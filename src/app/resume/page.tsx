import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '../../config/site';
import TechIcon from '../../components/common/TechIcon';

export default function ResumePage() {
  const { personalInfo, stats, skills, experience, education } = siteConfig;

  return (
    <section className="about at-top" aria-labelledby="resume-title">
      {/* Page Title Starts */}
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
        <h1 id="resume-title">ABOUT <span>ME</span></h1>
        <span className="title-bg" aria-hidden="true">Resume</span>
      </section>
      {/* Page Title Ends */}

      {/* Main Content Starts */}
      <section className="main-content revealator-slideup revealator-once revealator-delay1 no-transform revealator-partially-above revealator-within">
        <div className="container">
          <div className="row">
            {/* Personal Info Starts */}
            <article className="col-12 col-lg-5 col-xl-6" aria-label="Personal Information">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-uppercase custom-title mb-0 ft-wt-600 h3">personal infos</h2>
                </div>
                <div className="col-12 d-block d-sm-none mb-4">
                  <div className="main-img-mobile rounded overflow-hidden mx-auto" style={{ maxWidth: '230px', border: '4px solid var(--border-color)' }}>
                    <Image
                      src={siteConfig.avatar}
                      alt={siteConfig.name}
                      className="img-fluid"
                      title={siteConfig.name}
                      priority
                      width={230}
                      height={270}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                  <ul className="about-list list-unstyled open-sans-font">
                    <li>
                      <span className="title">first name :</span>{' '}
                      <strong className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personalInfo.firstName}</strong>
                    </li>
                    <li>
                      <span className="title">last name :</span>{' '}
                      <strong className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personalInfo.lastName}</strong>
                    </li>
                    <li>
                      <span className="title">Age :</span>{' '}
                      <strong className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personalInfo.age}</strong>
                    </li>
                    <li>
                      <span className="title">Nationality :</span>{' '}
                      <strong className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personalInfo.nationality}</strong>
                    </li>
                    <li>
                      <span className="title">Freelance :</span>{' '}
                      <strong className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personalInfo.freelance}</strong>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6">
                  <ul className="about-list list-unstyled open-sans-font">
                    <li>
                      <span className="title">Address :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personalInfo.address}</span>
                    </li>
                    <li>
                      <span className="title">phone :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--text-heading)' }} aria-label={`Call ${personalInfo.phone}`}>
                          {personalInfo.phone}
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="title">Email :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-heading)' }} aria-label={`Email ${personalInfo.email}`}>
                          {personalInfo.email}
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="title">Languages :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personalInfo.languages}</span>
                    </li>
                    <li>
                      <span className="title">Skype :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personalInfo.skype}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-12 mt-3 d-flex flex-wrap gap-3">
                  <a
                    className="button"
                    href="/Mostafa_Wahba_Frontend_Developer_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Mostafa_Wahba_Frontend_Developer_CV.pdf"
                    aria-label="Download my Curriculum Vitae in PDF format"
                  >
                    <span className="button-text">Download CV</span>
                    <span className="button-icon fa fa-download" aria-hidden="true"></span>
                  </a>
                  <Link 
                    className="button" 
                    href="/contact"
                    aria-label="Contact Me"
                  >
                    <span className="button-text">Contact Me</span>
                    <span className="button-icon fa fa-paper-plane" aria-hidden="true"></span>
                  </Link>
                </div>
              </div>
            </article>
            {/* Personal Info Ends */}

            {/* Stats Boxes Starts */}
            <aside className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0" aria-label="Professional Statistics">
              <div className="row">
                {stats.map((stat, idx) => (
                  <div key={idx} className="col-6">
                    <div className="box-stats with-margin">
                      <span className="top"></span>
                      <span className="bottom"></span>
                      <span className="right"></span>
                      <span className="left"></span>
                      <h3 className="poppins-font position-relative">{stat.value}</h3>
                      <p className="open-sans-font m-0 position-relative text-uppercase">
                        {stat.label.split(' ')[0]} <span className="d-block">{stat.label.split(' ').slice(1).join(' ')}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
            {/* Stats Boxes Ends */}
          </div>

          <hr className="separator" />

          {/* Skills Section Starts */}
          <section className="row" aria-labelledby="skills-heading">
            <div className="col-12">
              <h2 id="skills-heading" className="text-uppercase pb-4 pb-sm-5 mb-0 text-left text-sm-center custom-title ft-wt-600 h3">
                MY SKILLS
              </h2>
            </div>
            <div className="col-12">
              <div className="skills-grid my-3">
                {skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="skill-card visible"
                  >
                    <div
                      className="skill-icon-box"
                      aria-hidden="true"
                    >
                      <TechIcon name={skill.label} size={34} />
                    </div>
                    <strong className="skill-name">{skill.label}</strong>
                    <span className="skill-tag">{skill.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Skills Section Ends */}

          <hr className="separator mt-4 mb-4" />

          {/* Experience Section Starts */}
          <section className="row" aria-labelledby="experience-heading">
            <div className="col-12">
              <h2 id="experience-heading" className="text-uppercase pb-4 pb-sm-5 mb-0 text-left text-sm-center custom-title ft-wt-600 h3">
                EXPERIENCE
              </h2>
            </div>
            <div className="col-12">
              <div className="exp-grid my-3">
                {experience.map((item, idx) => (
                  <article key={idx} className="exp-card">
                    <div className="exp-card-header">
                      <div className="exp-card-icon-box" aria-hidden="true">
                        <i className="fa fa-briefcase"></i>
                      </div>
                      <div className="exp-card-badges">
                        <span className="exp-time-badge">
                          <i className="fa fa-calendar-o" aria-hidden="true"></i>
                          {item.time}
                        </span>
                        {item.type && (
                          <span className="exp-type-badge">{item.type}</span>
                        )}
                      </div>
                    </div>

                    <h3 className="exp-card-title poppins-font">
                      {item.title}
                    </h3>

                    <div className="exp-card-place">
                      <i className="fa fa-building-o" aria-hidden="true"></i>
                      <span>{item.place}</span>
                    </div>

                    <p className="exp-card-desc open-sans-font">
                      {item.description}
                    </p>

                    {item.skills && item.skills.length > 0 && (
                      <div className="exp-card-skills" aria-label="Skills applied">
                        {item.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="exp-skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
          {/* Experience Section Ends */}

          <hr className="separator mt-4 mb-4" />

          {/* Education & Certifications Section Starts */}
          <section className="row" aria-labelledby="education-heading">
            <div className="col-12">
              <h2 id="education-heading" className="text-uppercase pb-4 pb-sm-5 mb-0 text-left text-sm-center custom-title ft-wt-600 h3">
                EDUCATION <span>&amp;</span> CERTIFICATIONS
              </h2>
            </div>
            <div className="col-12">
              <div className="edu-grid my-3">
                {education.map((item, idx) => (
                  <article key={idx} className="edu-card">
                    <div className="edu-card-header">
                      <div className="edu-card-icon-box" aria-hidden="true">
                        <i className="fa fa-graduation-cap"></i>
                      </div>
                      <div className="edu-card-badges">
                        <span className="edu-time-badge">
                          <i className="fa fa-calendar-o" aria-hidden="true"></i>
                          {item.time}
                        </span>
                        {item.type && (
                          <span className="edu-type-badge">{item.type}</span>
                        )}
                      </div>
                    </div>

                    <h3 className="edu-card-title poppins-font">
                      {item.title}
                    </h3>

                    <div className="edu-card-place">
                      <i className="fa fa-university" aria-hidden="true"></i>
                      <span>{item.place}</span>
                    </div>

                    <p className="edu-card-desc open-sans-font">
                      {item.description}
                    </p>

                    {item.skills && item.skills.length > 0 && (
                      <div className="edu-card-skills" aria-label="Key subjects">
                        {item.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="edu-skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.certificateUrl && (
                      <div className="edu-card-footer">
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="edu-cert-btn"
                          aria-label={`View verified certificate for ${item.title}`}
                        >
                          <i className="fa fa-certificate" aria-hidden="true"></i>
                          <span>View Certificate</span>
                          <i className="fa fa-external-link" aria-hidden="true"></i>
                        </a>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
          {/* Education & Certifications Section Ends */}
        </div>
      </section>
    </section>
  );
}
