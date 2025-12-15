import React from "react";
// Fancybox CSS and JS
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";
import "@fancyapps/fancybox/dist/jquery.fancybox.min.js";

function Portfolio() {
    const projectCategories = {
        Projects: [
            { href: 'src/assets/img/ugec1.png', title: 'ugec Project', url: 'https://ugec.souqmsr.com/', date: ' Nov 2024  ' },
            { href: 'src/assets/img/jawdaconsultant1.png', title: 'jawdaconsultant Project', url: 'https://jawdaconsultant.com', date: ' jan 2024  ' },
            { href: 'src/assets/img/al-motamizon1.png', title: 'al-motamizon Project', url: 'https://al-motamizon.com/ar', date: ' Dec 2023  ' },
            { href: 'src/assets/img/ghulam1.png', title: 'ghulam Project', url: 'https://ghulam.najezsoft.com/ar', date: ' Nov 2023  ' },
            { href: 'src/assets/img/noorcontrol1.png', title: 'noorcontrol Project', url: 'https://noorcontrol.com/', date: ' Nov 2023  ' },
            { href: 'src/assets/img/asiaf1.png', title: 'asiaf Project', url: 'https://www.asiaf.com.sa/', date: ' oct 2023  ' },
            { href: 'src/assets/img/kfs-hiet1.png', title: 'kfs-hiet Project', url: 'https://kfs-hiet.edu.eg/', date: ' Aug 2023  ' },
            { href: 'src/assets/img/citysquares1.png', title: 'citysquares Project', url: 'https://citysquares.com.eg/ar', date: ' jul 2023  ' },
            { href: 'src/assets/img/osqufia1.png', title: 'osqufia Project', url: '#', date: ' jun 2023  ' },
            { href: 'src/assets/img/whitesand1.png', title: 'whitesand Project', url: 'https://www.whitesand-eg.com/', date: ' Nov 2021  ' },
            { href: 'src/assets/img/us1.png', title: 'us Project', url: '#', date: ' may 2023  ' },
            { href: 'src/assets/img/cms.webp', title: 'CMS Project', url: '#', date: ' Feb 2021  ' },
            { href: 'src/assets/img/hcr1.webp', title: 'HCR Project', url: '#', date: ' Feb 2021  ' },
            { href: 'src/assets/img/naseq8.webp', title: 'naseq Project', url: '#', date: ' Feb 2021  ' },
            { href: 'src/assets/img/thite1.webp', title: 'thite', url: 'https://thiet.edu.eg/ar', date: ' Feb 2021  ' },
            { href: 'src/assets/img/henkleez7.webp', title: 'henkleez Project', url: 'https://www.henkleez.com/ar', date: ' Feb 2021  ' },
            { href: 'src/assets/img/market9.webp', title: 'market Project', url: '', date: ' Feb 2020  ' },
            { href: 'src/assets/img/dashboed7.webp', title: 'dashboed Project', url: '#', date: ' Feb 2020  ' },
        ],
        dashboed: [
            { href: 'src/assets/img/dashboed1.png', title: 'dashboed Project' },
            { href: 'src/assets/img/dashboed2.png', title: 'dashboed Project' }
        ],
        HCR: [
            { href: 'src/assets/img/dashboed1.png', title: 'dashboed Project' },
            { href: 'src/assets/img/dashboed2.png', title: 'dashboed Project' },
            { href: 'src/assets/img/dashboed3.png', title: 'dashboed Project' },
            { href: 'src/assets/img/dashboed4.png', title: 'dashboed Project' },
            { href: 'src/assets/img/dashboed5.png', title: 'dashboed Project' },
            { href: 'src/assets/img/dashboed6.png', title: 'dashboed Project' },
            { href: 'src/assets/img/dashboed7.png', title: 'dashboed Project' },
            { href: 'src/assets/img/dashboed8.png', title: 'dashboed Project' },
            { href: 'src/assets/img/dashboed9.png', title: 'dashboed Project' }
        ],
        market: [
            { href: 'src/assets/img/market1.png', title: 'market Project' },
            { href: 'src/assets/img/market2.png', title: 'market Project' },
            { href: 'src/assets/img/market3.png', title: 'market Project' },
            { href: 'src/assets/img/market4.png', title: 'market Project' },
            { href: 'src/assets/img/market5.png', title: 'market Project' }
        ],
        osqufia: [
            { href: 'src/assets/img/osqufia1.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia2.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia3.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia4.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia5.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia6.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia7.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia8.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia9.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia10.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia11.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia12.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia13.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia14.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia15.png', title: 'osqufia Project' },
            { href: 'src/assets/img/osqufia16.png', title: 'osqufia Project' }
        ],
        thite: [
            { href: 'src/assets/img/thite1.png', title: 'thite' },
            { href: 'src/assets/img/thite2.png', title: 'thite' },
            { href: 'src/assets/img/thite3.png', title: 'thite' },
            { href: 'src/assets/img/thite4.png', title: 'thite' },
            { href: 'src/assets/img/thite5.png', title: 'thite' },
            { href: 'src/assets/img/thite6.png', title: 'thite' }
        ],
        us: [
            { href: 'src/assets/img/us1.png', title: 'us Project' },
            { href: 'src/assets/img/us2.png', title: 'us Project' },
            { href: 'src/assets/img/us3.png', title: 'us Project' },
            { href: 'src/assets/img/us4.png', title: 'us Project' },
            { href: 'src/assets/img/us5.png', title: 'us Project' },
            { href: 'src/assets/img/us6.png', title: 'us Project' },
            { href: 'src/assets/img/us7.png', title: 'us Project' },
            { href: 'src/assets/img/us8.png', title: 'us Project' },
            { href: 'src/assets/img/us9.png', title: 'us Project' }
        ],
        al_motamizon: [
            { href: 'src/assets/img/al-motamizon7.png', title: 'al-motamizon Project' },
            { href: 'src/assets/img/al-motamizon6.png', title: 'al-motamizon Project' },
            { href: 'src/assets/img/al-motamizon5.png', title: 'al-motamizon Project' },
            { href: 'src/assets/img/al-motamizon4.png', title: 'al-motamizon Project' },
            { href: 'src/assets/img/al-motamizon3.png', title: 'al-motamizon Project' },
            { href: 'src/assets/img/al-motamizon2.png', title: 'al-motamizon Project' },
        ],
        jawdaconsultant: [
            { href: 'src/assets/img/jawdaconsultant4.png', title: 'jawdaconsultant Project' },
            { href: 'src/assets/img/jawdaconsultant3.png', title: 'jawdaconsultant Project' },
            { href: 'src/assets/img/jawdaconsultant2.png', title: 'jawdaconsultant Project' },
            { href: 'src/assets/img/jawdaconsultant1.png', title: 'jawdaconsultant Project' },
        ],
        ugec: [
            { href: 'src/assets/img/ugec4.png', title: 'ugec Project' },
            { href: 'src/assets/img/ugec3.png', title: 'ugec Project' },
            { href: 'src/assets/img/ugec2.png', title: 'ugec Project' },
            { href: 'src/assets/img/ugec1.png', title: 'ugec Project' },
        ],
        noorcontrol: [
            { href: 'src/assets/img/noorcontrol7.png', title: 'noorcontrol Project' },
            { href: 'src/assets/img/noorcontrol6.png', title: 'noorcontrol Project' },
            { href: 'src/assets/img/noorcontrol5.png', title: 'noorcontrol Project' },
            { href: 'src/assets/img/noorcontrol4.png', title: 'noorcontrol Project' },
            { href: 'src/assets/img/noorcontrol3.png', title: 'noorcontrol Project' },
            { href: 'src/assets/img/noorcontrol2.png', title: 'noorcontrol Project' },
        ],
        asiaf: [
            { href: 'src/assets/img/asiaf5.png', title: 'asiaf Project' },
            { href: 'src/assets/img/asiaf4.png', title: 'asiaf Project' },
            { href: 'src/assets/img/asiaf3.png', title: 'asiaf Project' },
            { href: 'src/assets/img/asiaf2.png', title: 'asiaf Project' },
        ],
        citysquares: [
            { href: 'src/assets/img/citysquares7.png', title: 'citysquares Project' },
            { href: 'src/assets/img/citysquares6.png', title: 'citysquares Project' },
            { href: 'src/assets/img/citysquares5.png', title: 'citysquares Project' },
            { href: 'src/assets/img/citysquares4.png', title: 'citysquares Project' },
            { href: 'src/assets/img/citysquares3.png', title: 'citysquares Project' },
            { href: 'src/assets/img/citysquares2.png', title: 'citysquares Project' },
        ],
        ghulam: [
            { href: 'src/assets/img/ghulam1.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/ghulam2.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/ghulam3.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/ghulam4.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/ghulam5.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/ghulam6.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/ghulam7.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/ghulam8.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/ghulam9.png', title: 'ghulam Project', date: ' Nov 2023  ' },
        ],
        kfs_hiet: [
            { href: 'src/assets/img/kfs-hiet1.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/kfs-hiet2.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/kfs-hiet3.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/kfs-hiet4.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/kfs-hiet5.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/kfs-hiet6.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/kfs-hiet7.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/kfs-hiet8.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/kfs-hiet9.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/kfs-hiet10.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        ],
        whitesand: [
            { href: 'src/assets/img/whitesand1.png', title: 'whitesand Project' },
            { href: 'src/assets/img/whitesand2.png', title: 'whitesand Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/whitesand3.png', title: 'whitesand Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/whitesand4.png', title: 'whitesand Project', date: ' Nov 2023  ' },
            { href: 'src/assets/img/whitesand5.png', title: 'whitesand Project', date: ' Nov 2023  ' },
        ],


    };

    // Reusable render function for project grids
    const renderGrid = (category) =>
        projectCategories[category].map((item, index) => (
            <div className="d-none" key={`${category}-${index}`}>
                <figure>
                    <a data-fancybox={item.title} data-caption={item.title} href={item.href}>
                        <img
                            src={item.href}
                            alt={item.title}
                            title={item.title}
                            decoding="async"
                            className="img img-responsive"
                        />
                    </a>
                </figure>
            </div>
        ));

    return (
        <React.Fragment>
            <title>Portfolio | Mostafa Wahba </title>

            <section className="portfolio at-top">
                <div id="preloader" className="preloader off">
                    <div className="black_wall"></div>
                    <div className="loader"></div>
                </div>

                {/* Page Title */}
                <section className="title-section text-left text-sm-center">
                    <h1>
                        my <span>portfolio</span>
                    </h1>
                    <span className="title-bg">works</span>
                </section>

                {/* Main Content */}
                <section className="main-content text-center">
                    <div id="grid-gallery" className="container grid-gallery">
                        <section className="grid-wrap">
                            <ul className="row">
                                {projectCategories.Projects.map((project, index) => (
                                    <li className="col-sm-4 mb-2" key={`project-${index}`}>
                                        <figure>
                                            <div className="position-relative mb-2">
                                                <a
                                                    data-fancybox={project.title}
                                                    data-caption={project.title}
                                                    href={project.href}>
                                                    <div className="img-holder">
                                                        <img
                                                            src={project.href}
                                                            alt={project.title}
                                                            title={project.title}
                                                            decoding="async"
                                                            className="img img-responsive"
                                                        />
                                                        <span className="top"></span>
                                                        <span className="bottom"></span>
                                                        <span className="right"></span>
                                                        <span className="left"></span>
                                                    </div>
                                                    <div className="Project-title pt-2 pb-1">
                                                        <span>{project.title}</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="button mb-2 rounded-lg w-100" >
                                                    <span className="button-text rounded">Visit Site</span>
                                                </a>
                                            </div>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </section>

                {/* Hidden Grids */}
                {Object.keys(projectCategories).map((category) =>
                    category !== "Projects" ? renderGrid(category) : null
                )}
            </section>
        </React.Fragment>
    );
}

export default Portfolio;
