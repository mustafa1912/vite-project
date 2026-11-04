import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '../../config/site';

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
                  <div className="main-img-mobile rounded overflow-hidden mx-auto" style={{ maxWidth: '230px', border: '4px solid #252525' }}>
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
                <div className="col-6">
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
                <div className="col-6">
                  <ul className="about-list list-unstyled open-sans-font">
                    <li>
                      <span className="title">Address :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{personalInfo.address}</span>
                    </li>
                    <li>
                      <span className="title">phone :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-light" aria-label={`Call ${personalInfo.phone}`}>
                          {personalInfo.phone}
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="title">Email :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        <a href={`mailto:${personalInfo.email}`} className="text-light" aria-label={`Email ${personalInfo.email}`}>
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
                <div className="col-12 mt-3">
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
            {skills.map((skill, idx) => (
              <div key={idx} className="col-6 col-md-3 mb-3 mb-sm-5">
                <div 
                  className="skill-card text-center p-3 rounded"
                  style={{
                    backgroundColor: skill.bg,
                    border: `1px solid ${skill.border}`,
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <span 
                    className="skill-abbr d-inline-block rounded-circle mb-2"
                    style={{
                      width: '45px',
                      height: '45px',
                      lineHeight: '45px',
                      backgroundColor: skill.color,
                      color: '#000',
                      fontWeight: 800,
                      fontSize: '14px',
                    }}
                  >
                    {skill.abbr}
                  </span>
                  <h3 className="poppins-font h6 m-0 text-white">{skill.label}</h3>
                  <span className="badge mt-2" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: skill.color, fontSize: '11px' }}>
                    {skill.tag}
                  </span>
                </div>
              </div>
            ))}
          </section>
          {/* Skills Section Ends */}

          <hr className="separator mt-1" />

          {/* Experience & Education Starts */}
          <section className="row" aria-labelledby="experience-heading">
            <div className="col-12">
              <h2 id="experience-heading" className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600 h3">
                EXPERIENCE &amp; EDUCATION
              </h2>
            </div>
            <div className="col-lg-6 m-15px-tb">
              <h3 className="h4 poppins-font mb-4 text-warning">
                <i className="fa fa-briefcase me-2" aria-hidden="true"></i> Experience
              </h3>
              <div className="resume-box">
                <ul>
                  {experience.map((item, idx) => (
                    <li key={idx}>
                      <div className="icon">
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                      </div>
                      <span className="time open-sans-font text-uppercase">{item.time}</span>
                      <h4 className="poppins-font text-uppercase">
                        {item.title}
                        <span className="place open-sans-font d-block text-capitalize text-muted">{item.place}</span>
                      </h4>
                      <p className="open-sans-font">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 m-15px-tb">
              <h3 className="h4 poppins-font mb-4 text-warning">
                <i className="fa fa-graduation-cap me-2" aria-hidden="true"></i> Education
              </h3>
              <div className="resume-box">
                <ul>
                  {education.map((item, idx) => (
                    <li key={idx}>
                      <div className="icon">
                        <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                      </div>
                      <span className="time open-sans-font text-uppercase">{item.time}</span>
                      <h4 className="poppins-font text-uppercase">
                        {item.title}
                        <span className="place open-sans-font d-block text-capitalize text-muted">{item.place}</span>
                      </h4>
                      <p className="open-sans-font">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          {/* Experience & Education Ends */}
        </div>
      </section>
    </section>
  );
}
