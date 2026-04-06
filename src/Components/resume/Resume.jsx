import React, { useEffect, useRef } from "react";

// import img
import profileImg from "../../assets/img/me/H22C1262.webp";

function Resume() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.15 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const skills = [
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



    return (
        <React.Fragment>
            <title>Resume | Mostafa Wahba</title>
            <section className='about at-top'>
                <div id="preloader" className="preloader off">
                    <div className="black_wall"></div>
                    <div className="loader"></div>
                </div>
                {/*<!-- Page Title Starts --> */}
                <section
                    className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
                    <h1>ABOUT <span>ME</span></h1>
                    <span className="title-bg">Resume</span>
                </section>
                {/*<!-- Page Title Ends --> */}
                {/*<!-- Main Content Starts --> */}
                <section
                    className="main-content revealator-slideup revealator-once revealator-delay1 no-transform revealator-partially-above revealator-within">
                    <div className="container">
                        <div className="row">
                            {/*<!-- Personal Info Starts --> */}
                            <div className="col-12 col-lg-5 col-xl-6">
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
                                    </div>
                                    <div className="col-12 d-block d-sm-none">
                                        <img src={profileImg}
                                            className="img-fluid main-img-mobile" title='Mostafa Wahba' alt='Mostafa Wahba' />
                                    </div>
                                    <div className="col-6">
                                        <ul className="about-list list-unstyled open-sans-font">
                                            <li> <span className="title">first name :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Mostafa</span>
                                            </li>
                                            <li> <span className="title">last name :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Wahba afifa</span>
                                            </li>
                                            <li> <span className="title">Age :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">25
                                                Years</span> </li>
                                            <li> <span className="title">Nationality :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Egypt</span>
                                            </li>
                                            <li> <span className="title">Freelance :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Available</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="about-list list-unstyled open-sans-font">
                                            <li> <span className="title">Address :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Quesna Menoufia</span>
                                            </li>
                                            <li> <span className="title">phone :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                                <a href="tel:01002883812" className="text-light" > 01002883812 </a>
                                            </span>
                                            </li>
                                            <li> <span className="title">Email :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                                <a href="mailto:mostafw338@fmail.com" className="text-light" > mostafw338@fmail.com </a>
                                            </span>
                                            </li>
                                            <li> <span className="title">langages :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> arabic</span> </li>
                                            <li> <span className="title">langages :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> English</span> </li>
                                            <li> <span className="title">langages :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> Italian</span> </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <a className="button" href={'./assets/mostafa_wahba_FrontEnd_cv'} download>
                                            <span className="button-text">Download CV</span>
                                            <span className="button-icon fa fa-download"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Personal Info Ends --> */}
                            {/*<!-- Boxes Starts --> */}
                            <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="box-stats with-margin">
                                            <h3 className="poppins-font position-relative">3</h3>
                                            <p className="open-sans-font m-0 position-relative text-uppercase">years of <span
                                                className="d-block">experience</span></p>
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="box-stats with-margin">
                                            <h3 className="poppins-font position-relative">20</h3>
                                            <p className="open-sans-font m-0 position-relative text-uppercase">completed <span
                                                className="d-block">projects</span></p>
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="box-stats with-margin m-0">
                                            <h3 className="poppins-font position-relative">20</h3>
                                            <p className="open-sans-font m-0 position-relative text-uppercase">Happy<span
                                                className="d-block">customers</span></p>
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="box-stats with-margin m-0">
                                            <h3 className="poppins-font position-relative">8</h3>
                                            <p className="open-sans-font m-0 position-relative text-uppercase">awards <span
                                                className="d-block">won</span></p>
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Boxes Ends --> */}
                        </div>
                        <hr className="separator" />
                        {/*<!-- Skills Starts --> */}
                        <div className="row">
                            <div className="col-12">
                                <h3
                                    className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                                    My Skills</h3>
                            </div> 
                            <div className="skills-grid my-4">
                                {skills.map((skill, i) => (
                                    <div
                                        key={skill.label}
                                        className="skill-card"
                                        ref={(el) => (cardsRef.current[i] = el)}
                                        style={{ animationDelay: `${i * 0.06}s` }}
                                    >
                                        <div
                                            className="skill-icon"
                                            style={{
                                                color: skill.color,
                                                background: skill.bg,
                                                border: `1.5px solid ${skill.border}`,
                                            }}
                                        >
                                            {skill.abbr}
                                        </div>
                                        <span className="skill-name">{skill.label}</span>
                                        <span className="skill-tag">{skill.tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/*<!-- Skills Ends --> */}
                        <hr className="separator mt-1" />
                        {/*<!-- Experience & Education Starts --> */}
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience
                                    <span>&amp;</span> Education</h3>
                            </div>
                            <div className="resume-box">
                                <ul className='row m-0'>
                                    <li className='col-12 col-md-6'>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2021 - September </span>
                                        <h5 className="poppins-font text-uppercase">Web Development Challenger <span
                                            className="place open-sans-font">udacity</span></h5>
                                        <p className="open-sans-font"> Learn HTML, CSS and Wordpress. You will be able to start translating ideas into compelling websites.
                                        </p>
                                        <div className='text-right'>
                                            <a href='https://drive.google.com/file/d/11wHZ21qIkgeIOiSo_FV5gLfWaNgbqULR/view?usp=drive_link' target='_blank' rel="noopener noreferrer" className="button mt-3" >
                                                <span className="button-text">  certificate </span>
                                                <span className="button-icon fas fa-images"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li className='col-12 col-md-6'>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2021 - November  </span>
                                        <h5 className="poppins-font text-uppercase">Front End Web Development Professional
                                            <span
                                                className="place open-sans-font">udacity</span></h5>
                                        <p className="open-sans-font">Learn JavaScript basics from the very beginning. You will increase your knowledge in Front End Web Development gradually and you will create some interesting projects by the end of this program.
                                        </p>
                                        <div className='text-right'>
                                            <a href='https://drive.google.com/file/d/1mssGMKomiRFzE5XzSywFOgaBbq97j-pU/view?usp=drive_link' target='_blank' rel="noopener noreferrer" className="button mt-3" >
                                                <span className="button-text">  certificate </span>
                                                <span className="button-icon fas fa-images"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li className='col-12 col-md-6'>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2022 - march  </span>
                                        <h5 className="poppins-font text-uppercase">JavaScript language <span
                                            className="place open-sans-font">maharatech</span></h5>
                                        <p className="open-sans-font">The JavaScript Course by maharatech is a comprehensive program designed to teach the essential concepts of JavaScript, the most popular programming language for web development. This course takes students from the basics of JavaScript to more advanced topics, enabling them to create dynamic, interactive websites and applications.</p>
                                        <div className='text-right'>
                                            <a href='https://drive.google.com/file/d/1IllikQFLKryBLU1saBMqiP9zN9rDPJk3/view?usp=drive_link' target='_blank' rel="noopener noreferrer" className="button mt-3" >
                                                <span className="button-text">  certificate </span>
                                                <span className="button-icon fas fa-images"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li className='col-12 col-md-6'>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2022 - may  </span>
                                        <h5 className="poppins-font text-uppercase"> React js <span
                                            className="place open-sans-font">maharatech</span></h5>
                                        <p className="open-sans-font">The React JS Course by maharatech is designed to teach developers how to build fast, scalable, and modern web applications using React, one of the most powerful JavaScript libraries. This course provides a deep dive into the fundamentals of React and covers everything you need to create dynamic user interfaces and single-page applications (SPAs).</p>
                                        <div className='text-right'>
                                            <a href='https://drive.google.com/file/d/1NMyXoeObIqROkRpw7NtXyHRwPiVQWSTy/view?usp=sharing' target='_blank' rel="noopener noreferrer" className="button mt-3" >
                                                <span className="button-text">  certificate </span>
                                                <span className="button-icon fas fa-images"></span>
                                            </a>
                                        </div>
                                    </li>

                                    {/* ✅ NEW - Modern JavaScript: ES6 and beyond */}
                                    <li className='col-12 col-md-6'>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2026 - March</span>
                                        <h5 className="poppins-font text-uppercase">Modern JavaScript: ES6 and beyond <span
                                            className="place open-sans-font">maharatech</span></h5>
                                        <p className="open-sans-font">A course covering modern JavaScript features introduced in ES6 and later versions, including arrow functions, destructuring, modules, promises, async/await, and other advanced concepts that power modern web development.</p>
                                        <div className='text-right'>
                                            <a href='https://drive.google.com/file/d/1AybJLjU-OedLxZCCd5HQ8ux0qQp8dTzk/view?usp=drive_link' target='_blank' rel="noopener noreferrer" className="button mt-3" >
                                                <span className="button-text">  certificate </span>
                                                <span className="button-icon fas fa-images"></span>
                                            </a>
                                        </div>
                                    </li>

                                    {/* ✅ NEW - UX Design Fundamentals */}
                                    <li className='col-12 col-md-6'>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2026 - March</span>
                                        <h5 className="poppins-font text-uppercase">UX Design Fundamentals <span
                                            className="place open-sans-font">maharatech</span></h5>
                                        <p className="open-sans-font">A foundational course in UX Design covering core principles of user experience design, including user research, wireframing, prototyping, usability testing, and designing intuitive digital products that meet user needs.</p>
                                        <div className='text-right'>
                                            <a href='https://drive.google.com/file/d/1hVBaE8zNXdZW_0m4MTuYySTGYvkCTIkF/view?usp=drive_link' target='_blank' rel="noopener noreferrer" className="button mt-3" >
                                                <span className="button-text">  certificate </span>
                                                <span className="button-icon fas fa-images"></span>
                                            </a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/*<!-- Experience & Education Ends --> */}
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Resume