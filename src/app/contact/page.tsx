'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import { siteConfig } from '../../config/site';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setLoading(true);

    const { serviceId, templateId, publicKey } = siteConfig.contact;

    // Gracefully handle demo state when real EmailJS keys are not yet provided
    if (serviceId === 'YOUR_SERVICE_ID' || !serviceId) {
      setTimeout(() => {
        toast.success("Demo Mode: Message recorded! (Configure .env.local with real EmailJS keys for production).");
        setLoading(false);
        formRef.current?.reset();
      }, 700);
      return;
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        setLoading(false);
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send ❌ Please check your service configuration.");
        setLoading(false);
      });
  };

  const { personalInfo, socials } = siteConfig;

  return (
    <section className="contact at-top" aria-labelledby="contact-title">
      <Toaster position="top-right" />

      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
        <h1 id="contact-title">get in <span>touch</span></h1>
        <span className="title-bg" aria-hidden="true">contact</span>
      </section>

      <section className="main-content revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
        <div className="container">
          <div className="row">
            {/* Left Side Info Starts */}
            <article className="col-12 col-lg-4" aria-label="Contact Information">
              <h2 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3 h3">Don't be shy !</h2>
              <p className="open-sans-font mb-3">
                Feel free to get in touch with me. I am always open to discussing new projects, 
                creative ideas, architecture reviews, or opportunities to be part of your visions.
              </p>
              
              <div className="open-sans-font custom-span-contact position-relative mb-4">
                <i className="fa fa-envelope-open position-absolute" aria-hidden="true"></i>
                <span className="d-block" style={{ textTransform: 'uppercase', fontSize: '12px', opacity: 0.8 }}>mail me</span>
                <a className="text-light" href={`mailto:${personalInfo.email}`} aria-label={`Mail me at ${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </div>

              <div className="open-sans-font custom-span-contact position-relative mb-4">
                <i className="fa fa-phone-square position-absolute" aria-hidden="true"></i>
                <span className="d-block" style={{ textTransform: 'uppercase', fontSize: '12px', opacity: 0.8 }}>call me</span>
                <a className="text-light" href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} aria-label={`Call me at ${personalInfo.phone}`}>
                  {personalInfo.phone}
                </a>
              </div>

              <div className="open-sans-font custom-span-contact position-relative mb-4">
                <i className="fa fa-map-marker-alt position-absolute" aria-hidden="true"></i>
                <span className="d-block" style={{ textTransform: 'uppercase', fontSize: '12px', opacity: 0.8 }}>location</span>
                <span className="text-light">
                  {personalInfo.address}
                </span>
              </div>

              <ul className="social list-unstyled pt-1 mb-5 d-flex gap-3" aria-label="Social media profiles">
                {socials.map((s, idx) => (
                  <li key={idx} className="social-item">
                    <a 
                      title={s.name} 
                      href={s.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${s.name} profile`}
                    >
                      <i className={s.icon} aria-hidden="true"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
            {/* Left Side Info Ends */}

            {/* Contact Form Starts */}
            <div className="col-12 col-lg-8">
              <form 
                ref={formRef} 
                onSubmit={sendEmail} 
                className="contactform"
                aria-label="Direct message form"
              >
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="user_name" className="visually-hidden">Your Name</label>
                      <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        placeholder="YOUR NAME"
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="user_email" className="visually-hidden">Your Email</label>
                      <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        placeholder="YOUR EMAIL"
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="user_subject" className="visually-hidden">Subject</label>
                      <input
                        type="text"
                        name="user_subject"
                        id="user_subject"
                        placeholder="YOUR SUBJECT"
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-3">
                      <label htmlFor="message" className="visually-hidden">Your Message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="YOUR MESSAGE"
                        rows={5}
                        required
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="button"
                      aria-label="Send contact message"
                    >
                      <span className="button-text">
                        {loading ? "Sending..." : "Send Message"}
                      </span>
                      <span className="button-icon fa fa-send" aria-hidden="true"></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Contact Form Ends */}
          </div>
        </div>
      </section>
    </section>
  );
}
