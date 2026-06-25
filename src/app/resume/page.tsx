import React from 'react';
import Image from 'next/image';

// Profile image served from public/assets/images/me/
const profileImg = '/assets/images/me/H22C1262.webp';

interface Skill {
  label: string;
  abbr: string;
  tag: string;
  color: string;
  bg: string;
  border: string;
}

interface TimelineItem {
  time: string;
  title: string;
  place: string;
  description: string;
  certificateUrl: string;
}

const skills: Skill[] = [
  { label: "TypeScript", abbr: "TS", tag: "Language", color: "#3178c6", bg: "#00152b", border: "#003d73" },
  { label: "Next.js", abbr: "NXT", tag: "Framework", color: "#ffffff", bg: "#111111", border: "#333333" },
  { label: "Vue.js", abbr: "VUE", tag: "Framework", color: "#42b883", bg: "#001a11", border: "#004d33" },
  { label: "Nuxt.js", abbr: "NXT", tag: "Framework", color: "#00dc82", bg: "#001a0f", border: "#004d2e" },
  { label: "PHP", abbr: "PHP", tag: "Language", color: "#777bb4", bg: "#0d0f1a", border: "#25273d" },
  { label: "HTML 5", abbr: "HTML5", tag: "Markup", color: "#f0a500", bg: "#1a1200", border: "#3a2a00" },
  { label: "CSS 3", abbr: "CSS3", tag: "Styling", color: "#38bdf8", bg: "#001220", border: "#003050" },
  { label: "JavaScript", abbr: "JS", tag: "Language", color: "#facc15", bg: "#1a1500", border: "#3a3000" },
  { label: "React", abbr: "TSX", tag: "Framework", color: "#a78bfa", bg: "#0d0025", border: "#2a1060" },
  { label: "Tailwind CSS", abbr: "TW", tag: "Styling", color: "#34d399", bg: "#001a15", border: "#00402e" },
  { label: "SCSS", abbr: "SCSS", tag: "Styling", color: "#f472b6", bg: "#1a0010", border: "#400030" },
  { label: "Bootstrap", abbr: "BS", tag: "UI Kit", color: "#60a5fa", bg: "#001a28", border: "#003050" },
  { label: "WordPress", abbr: "WP", tag: "CMS", color: "#4ade80", bg: "#002010", border: "#005025" },
  { label: "Elementor", abbr: "EL", tag: "Builder", color: "#fb923c", bg: "#1a0800", border: "#401800" },
  { label: "ACF", abbr: "ACF", tag: "WP Plugin", color: "#f0a500", bg: "#1a1200", border: "#3a2a00" },
  { label: "Git", abbr: "GIT", tag: "Version Control", color: "#c084fc", bg: "#100015", border: "#300040" },
  { label: "SEO", abbr: "SEO", tag: "Marketing", color: "#22d3ee", bg: "#001a28", border: "#003a50" },
];

const timelineData: TimelineItem[] = [
  {
    time: "2021 - September",
    title: "Web Development Challenger",
    place: "udacity",
    description: "Learn HTML, CSS and Wordpress. You will be able to start translating ideas into compelling websites.",
    certificateUrl: "https://drive.google.com/file/d/11wHZ21qIkgeIOiSo_FV5gLfWaNgbqULR/view?usp=drive_link"
  },
  {
    time: "2021 - November",
    title: "Front End Web Development Professional",
    place: "udacity",
    description: "Learn JavaScript basics from the very beginning. You will increase your knowledge in Front End Web Development gradually and you will create some interesting projects by the end of this program.",
    certificateUrl: "https://drive.google.com/file/d/1mssGMKomiRFzE5XzSywFOgaBbq97j-pU/view?usp=drive_link"
  },
  {
    time: "2022 - March",
    title: "JavaScript language",
    place: "maharatech",
    description: "The JavaScript Course by maharatech is a comprehensive program designed to teach the essential concepts of JavaScript, the most popular programming language for web development.",
    certificateUrl: "https://drive.google.com/file/d/1IllikQFLKryBLU1saBMqiP9zN9rDPJk3/view?usp=drive_link"
  },
  {
    time: "2022 - May",
    title: "React JS",
    place: "maharatech",
    description: "The React JS Course by maharatech is designed to teach developers how to build fast, scalable, and modern web applications using React, one of the most powerful JavaScript libraries.",
    certificateUrl: "https://drive.google.com/file/d/1NMyXoeObIqROkRpw7NtXyHRwPiVQWSTy/view?usp=sharing"
  },
  {
    time: "2026 - March",
    title: "Modern JavaScript: ES6 and beyond",
    place: "maharatech",
    description: "A course covering modern JavaScript features introduced in ES6 and later versions, including arrow functions, destructuring, modules, promises, async/await, and other advanced concepts.",
    certificateUrl: "https://drive.google.com/file/d/1AybJLjU-OedLxZCCd5HQ8ux0qQp8dTzk/view?usp=drive_link"
  },
  {
    time: "2026 - March",
    title: "UX Design Fundamentals",
    place: "maharatech",
    description: "A foundational course in UX Design covering core principles of user experience design, including user research, wireframing, prototyping, usability testing, and designing intuitive digital products.",
    certificateUrl: "https://drive.google.com/file/d/1hVBaE8zNXdZW_0m4MTuYySTGYvkCTIkF/view?usp=drive_link"
  }
];

export default function ResumePage() {
  return (
    <section className="about at-top" aria-labelledby="resume-title">
      {/*<!-- Page Title Starts --> */}
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
        <h1 id="resume-title">ABOUT <span>ME</span></h1>
        <span className="title-bg" aria-hidden="true">Resume</span>
      </section>
      {/*<!-- Page Title Ends --> */}

      {/*<!-- Main Content Starts --> */}
      <section className="main-content revealator-slideup revealator-once revealator-delay1 no-transform revealator-partially-above revealator-within">
        <div className="container">
          <div className="row">
            {/*<!-- Personal Info Starts --> */}
            <article className="col-12 col-lg-5 col-xl-6" aria-label="Personal Information">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-uppercase custom-title mb-0 ft-wt-600 h3">personal infos</h2>
                </div>
                <div className="col-12 d-block d-sm-none mb-4">
                  <div className="main-img-mobile rounded overflow-hidden mx-auto" style={{ maxWidth: '230px', border: '4px solid #252525' }}>
                    <Image
                      src={profileImg}
                      alt="Mostafa Wahba"
                      className="img-fluid"
                      title="Mostafa Wahba"
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
                      <strong className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Mostafa</strong>
                    </li>
                    <li>
                      <span className="title">last name :</span>{' '}
                      <strong className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Wahba afifa</strong>
                    </li>
                    <li>
                      <span className="title">Age :</span>{' '}
                      <strong className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">25 Years</strong>
                    </li>
                    <li>
                      <span className="title">Nationality :</span>{' '}
                      <strong className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Egypt</strong>
                    </li>
                    <li>
                      <span className="title">Freelance :</span>{' '}
                      <strong className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Available</strong>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="about-list list-unstyled open-sans-font">
                    <li>
                      <span className="title">Address :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Quesna Menoufia</span>
                    </li>
                    <li>
                      <span className="title">phone :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        <a href="tel:01002883812" className="text-light" aria-label="Call me at 01002883812">01002883812</a>
                      </span>
                    </li>
                    <li>
                      <span className="title">Email :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        <a href="mailto:mostafw338@gmail.com" className="text-light" aria-label="Email me at mostafw338@gmail.com">mostafw338@gmail.com</a>
                      </span>
                    </li>
                    <li>
                      <span className="title">languages :</span>{' '}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Arabic, English, Italian</span>
                    </li>
                  </ul>
                </div>
                <div className="col-12 mt-3">
                  <a
                    className="button"
                    href="/Mostafa_Wahba_Frontend_Developer_CV.pdf"
                    download="Mostafa_Wahba_Frontend_Developer_CV.pdf"
                    aria-label="Download my Curriculum Vitae in PDF format"
                  >
                    <span className="button-text">Download CV</span>
                    <span className="button-icon fa fa-download" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </article>
            {/*<!-- Personal Info Ends --> */}

            {/*<!-- Boxes Starts --> */}
            <aside className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0" aria-label="Professional Statistics">
              <div className="row">
                <div className="col-6">
                  <div className="box-stats with-margin">
                    <span className="top"></span>
                    <span className="bottom"></span>
                    <span className="right"></span>
                    <span className="left"></span>
                    <h3 className="poppins-font position-relative">3</h3>
                    <p className="open-sans-font m-0 position-relative text-uppercase">
                      years of <span className="d-block">experience</span>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box-stats with-margin">
                    <span className="top"></span>
                    <span className="bottom"></span>
                    <span className="right"></span>
                    <span className="left"></span>
                    <h3 className="poppins-font position-relative">20+</h3>
                    <p className="open-sans-font m-0 position-relative text-uppercase">
                      completed <span className="d-block">projects</span>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box-stats with-margin m-0">
                    <span className="top"></span>
                    <span className="bottom"></span>
                    <span className="right"></span>
                    <span className="left"></span>
                    <h3 className="poppins-font position-relative">20+</h3>
                    <p className="open-sans-font m-0 position-relative text-uppercase">
                      Happy<span className="d-block">customers</span>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box-stats with-margin m-0">
                    <span className="top"></span>
                    <span className="bottom"></span>
                    <span className="right"></span>
                    <span className="left"></span>
                    <h3 className="poppins-font position-relative">8</h3>
                    <p className="open-sans-font m-0 position-relative text-uppercase">
                      awards <span className="d-block">won</span>
                    </p>
                  </div>
                </div>
              </div>
            </aside>
            {/*<!-- Boxes Ends --> */}
          </div>

          <hr className="separator" />

          {/*<!-- Skills Starts --> */}
          <section className="row" aria-labelledby="skills-heading">
            <div className="col-12">
              <h2
                id="skills-heading"
                className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600 h3"
              >
                My Skills
              </h2>
            </div>
            <div className="skills-grid my-4">
              {skills.map((skill, i) => (
                <div
                  key={skill.label}
                  className="skill-card"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div
                    className="skill-icon"
                    style={{
                      color: skill.color,
                      background: skill.bg,
                      border: `1.5px solid ${skill.border}`,
                    }}
                    aria-hidden="true"
                  >
                    {skill.abbr}
                  </div>
                  <strong className="skill-name">{skill.label}</strong>
                  <span className="skill-tag">{skill.tag}</span>
                </div>
              ))}
            </div>
          </section>
          {/*<!-- Skills Ends --> */}

          <hr className="separator mt-1" />

          {/*<!-- Experience & Education Starts --> */}
          <section className="row" aria-labelledby="experience-heading">
            <div className="col-12">
              <h2
                id="experience-heading"
                className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600 h3"
              >
                Experience <span>&amp;</span> Education
              </h2>
            </div>
            <div className="resume-box">
              <ul className="row m-0 list-unstyled">
                {timelineData.map((item, index) => (
                  <li key={index} className="col-12 col-md-6">
                    <div className="icon" aria-hidden="true">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">{item.time}</span>
                    <h3 className="poppins-font text-uppercase h5">
                      {item.title}{' '}
                      <span className="place open-sans-font">{item.place}</span>
                    </h3>
                    <p className="open-sans-font">
                      {item.description}
                    </p>
                    <div className="text-right">
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button mt-3"
                        aria-label={`View ${item.title} Certificate`}
                      >
                        <span className="button-text">certificate</span>
                        <span className="button-icon fas fa-images" aria-hidden="true"></span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/*<!-- Experience & Education Ends --> */}
        </div>
      </section>
    </section>
  );
}
