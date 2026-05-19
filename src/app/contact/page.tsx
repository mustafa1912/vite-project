'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setLoading(true);

    emailjs
      .sendForm(
        "service_gtk5epn",
        "template_i97xxwh",
        formRef.current,
        "Vzj89bsJsqqJOi3PU"
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        setLoading(false);
        formRef.current?.reset();
      })
      .catch(() => {
        toast.error("Failed to send ❌ Try again");
        setLoading(false);
      });
  };

  return (
    <section className="contact at-top" aria-labelledby="contact-title">
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
        <h1 id="contact-title">get in <span>touch</span></h1>
        <span className="title-bg" aria-hidden="true">contact</span>
      </section>

      <section className="main-content revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
        <div className="container">
          <div className="row">
            {/* <!-- Left Side Info Starts --> */}
            <article className="col-12 col-lg-4" aria-label="Contact Information">
              <h2 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3 h3">Don't be shy !</h2>
              <p className="open-sans-font mb-3">
                Feel free to get in touch with me. I am always open to discussing new projects, 
                creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="open-sans-font custom-span-contact position-relative mb-4">
                <i className="fa fa-envelope-open position-absolute" aria-hidden="true"></i>
                <span className="d-block" style={{ textTransform: 'uppercase', fontSize: '12px', opacity: 0.8 }}>mail me</span>
                <a className="text-light" href="mailto:mostafaw338@gmail.com" aria-label="Mail me at mostafaw338@gmail.com">
                  mostafaw338@gmail.com
                </a>
              </div>

              <div className="open-sans-font custom-span-contact position-relative mb-4">
                <i className="fa fa-phone-square position-absolute" aria-hidden="true"></i>
                <span className="d-block" style={{ textTransform: 'uppercase', fontSize: '12px', opacity: 0.8 }}>call me</span>
                <a className="text-light" href="tel:01002883812" aria-label="Call me at 01002883812">
                  01002883812
                </a>
              </div>

              <ul className="social list-unstyled pt-1 mb-5 d-flex gap-3" aria-label="Social media profiles">
                <li className="facebook">
                  <a 
                    title="Facebook" 
                    href="https://www.facebook.com/mostafaw338/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit my Facebook profile"
                  >
                    <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="twitter">
                  <a 
                    title="LinkedIn" 
                    href="https://www.linkedin.com/in/mostafa-w-64bbab1a4/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile"
                  >
                    <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="youtube">
                  <a 
                    title="GitHub" 
                    href="https://github.com/mustafa1912" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub repository"
                  >
                    <i className="fa-brands fa-github" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </article>
            {/* <!-- Left Side Info Ends --> */}

            {/* <!-- Contact Form Starts --> */}
            <article className="col-12 col-lg-8" aria-label="Send Message Form">
              <form ref={formRef} onSubmit={sendEmail} className="contactform" aria-label="Contact form">
                <div className="row">
                  <div className="col-12 col-md-4 mb-3">
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      placeholder="YOUR NAME" 
                      required 
                      aria-required="true"
                      maxLength={80}
                      pattern="^[a-zA-Z\s\u0600-\u06FF]+$"
                      title="Name should only contain letters and spaces."
                    />
                  </div>
                  <div className="col-12 col-md-4 mb-3">
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder="YOUR EMAIL" 
                      required 
                      aria-required="true"
                      maxLength={120}
                    />
                  </div>
                  <div className="col-12 col-md-4 mb-3">
                    <label htmlFor="subject" className="sr-only">Your Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      placeholder="YOUR SUBJECT" 
                      maxLength={150}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      placeholder="YOUR MESSAGE" 
                      required 
                      aria-required="true"
                      maxLength={3000}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button 
                      type="submit" 
                      className="button" 
                      disabled={loading}
                      aria-live="polite"
                    >
                      <span className="button-text">
                        {loading ? "Sending..." : "Send Message"}
                      </span>
                      <span className="button-icon" aria-hidden="true">
                        <i className="fa-solid fa-paper-plane"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </article>
            {/* <!-- Contact Form Ends --> */}
          </div>
        </div>
      </section>
      
      {/* Toast Notifications container */}
      <Toaster position="top-left" reverseOrder={false} />
    </section>
  );
}
