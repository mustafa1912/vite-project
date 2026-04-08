import { useState } from "react";

// Fancybox
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";
import "@fancyapps/fancybox/dist/jquery.fancybox.min.js";

import gallery from "../../../src/assets/images/gallery.gif";
import link from "../../../src/assets/images/link.gif";
// ── Images ───────────────────────────────────────────────────────────────────
import issgroups1 from "../../assets/img/issgroups1.webp";
import issgroups2 from "../../assets/img/issgroups2.webp";
import issgroups3 from "../../assets/img/issgroups3.webp";
import issgroups4 from "../../assets/img/issgroups4.webp";
import issgroups5 from "../../assets/img/issgroups5.webp";
import issgroups6 from "../../assets/img/issgroups6.webp";
import issgroups7 from "../../assets/img/issgroups7.webp";
import issgroups8 from "../../assets/img/issgroups8.webp";
import issgroups9 from "../../assets/img/issgroups9.webp";
import issgroups10 from "../../assets/img/issgroups10.webp";
import chitotech1 from "../../assets/img/chitotech1.webp";
import chitotech2 from "../../assets/img/chitotech2.webp";
import chitotech3 from "../../assets/img/chitotech3.webp";
import chitotech4 from "../../assets/img/chitotech4.webp";
import chitotech5 from "../../assets/img/chitotech5.webp";
import KanbanBoard1 from "../../assets/img/KanbanBoard1.webp";
import KanbanBoard2 from "../../assets/img/KanbanBoard2.webp";
import KanbanBoard3 from "../../assets/img/KanbanBoard3.webp";
import insidermenofia1 from "../../assets/img/insidermenofia1.webp";
import insidermenofia2 from "../../assets/img/insidermenofia2.webp";
import insidermenofia3 from "../../assets/img/insidermenofia3.webp";
import insidermenofia4 from "../../assets/img/insidermenofia4.webp";
import insidermenofia5 from "../../assets/img/insidermenofia5.webp";
import insidermenofia6 from "../../assets/img/insidermenofia6.webp";
import insidermenofia7 from "../../assets/img/insidermenofia7.webp";
import ugec1 from "../../assets/img/ugec1_result.webp";
import ugec2 from "../../assets/img/ugec2_result.webp";
import ugec3 from "../../assets/img/ugec3_result.webp";
import ugec4 from "../../assets/img/ugec4_result.webp";
import jawdaconsultant1 from "../../assets/img/jawdaconsultant1_result.webp";
import jawdaconsultant3 from "../../assets/img/jawdaconsultant3_result.webp";
import jawdaconsultant4 from "../../assets/img/jawdaconsultant4_result.webp";
import alMotamizon1 from "../../assets/img/al-motamizon1_result.webp";
import alMotamizon2 from "../../assets/img/al-motamizon2_result.webp";
import alMotamizon3 from "../../assets/img/al-motamizon3_result.webp";
import alMotamizon4 from "../../assets/img/al-motamizon4_result.webp";
import alMotamizon5 from "../../assets/img/al-motamizon5_result.webp";
import alMotamizon6 from "../../assets/img/al-motamizon6_result.webp";
import alMotamizon7 from "../../assets/img/al-motamizon7_result.webp";
import ghulam1 from "../../assets/img/ghulam1_result.webp";
import ghulam2 from "../../assets/img/ghulam2_result.webp";
import ghulam3 from "../../assets/img/ghulam3_result.webp";
import ghulam4 from "../../assets/img/ghulam4_result.webp";
import ghulam5 from "../../assets/img/ghulam5_result.webp";
import ghulam6 from "../../assets/img/ghulam6_result.webp";
import ghulam7 from "../../assets/img/ghulam7_result.webp";
import ghulam9 from "../../assets/img/ghulam9_result.webp";
import noorcontrol1 from "../../assets/img/noorcontrol1_result.webp";
import noorcontrol2 from "../../assets/img/noorcontrol2_result.webp";
import noorcontrol3 from "../../assets/img/noorcontrol3_result.webp";
import noorcontrol4 from "../../assets/img/noorcontrol4_result.webp";
import noorcontrol5 from "../../assets/img/noorcontrol5_result.webp";
import noorcontrol6 from "../../assets/img/noorcontrol6_result.webp";
import noorcontrol7 from "../../assets/img/noorcontrol7_result.webp";
import asiaf1 from "../../assets/img/asiaf1_result.webp";
import asiaf2 from "../../assets/img/asiaf2_result.webp";
import asiaf3 from "../../assets/img/asiaf3_result.webp";
import asiaf4 from "../../assets/img/asiaf4_result.webp";
import asiaf5 from "../../assets/img/asiaf5_result.webp";
import kfsHiet1 from "../../assets/img/kfs-hiet1_result.webp";
import kfsHiet2 from "../../assets/img/kfs-hiet2_result.webp";
import kfsHiet3 from "../../assets/img/kfs-hiet3_result.webp";
import kfsHiet4 from "../../assets/img/kfs-hiet4_result.webp";
import kfsHiet5 from "../../assets/img/kfs-hiet5_result.webp";
import kfsHiet6 from "../../assets/img/kfs-hiet6_result.webp";
import kfsHiet7 from "../../assets/img/kfs-hiet7_result.webp";
import kfsHiet8 from "../../assets/img/kfs-hiet8_result.webp";
import kfsHiet9 from "../../assets/img/kfs-hiet9_result.webp";
import kfsHiet10 from "../../assets/img/kfs-hiet10_result.webp";
import citysquares1 from "../../assets/img/citysquares1_result.webp";
import citysquares2 from "../../assets/img/citysquares2_result.webp";
import citysquares3 from "../../assets/img/citysquares3_result.webp";
import citysquares4 from "../../assets/img/citysquares4_result.webp";
import citysquares5 from "../../assets/img/citysquares5_result.webp";
import citysquares6 from "../../assets/img/citysquares6_result.webp";
import citysquares7 from "../../assets/img/citysquares7_result.webp";
import osqufia1 from "../../assets/img/osqufia1_result.webp";
import osqufia2 from "../../assets/img/osqufia2_result.webp";
import osqufia3 from "../../assets/img/osqufia3_result.webp";
import osqufia4 from "../../assets/img/osqufia4_result.webp";
import osqufia5 from "../../assets/img/osqufia5_result.webp";
import osqufia6 from "../../assets/img/osqufia6_result.webp";
import osqufia7 from "../../assets/img/osqufia7_result.webp";
import osqufia8 from "../../assets/img/osqufia8_result.webp";
import osqufia9 from "../../assets/img/osqufia9_result.webp";
import osqufia10 from "../../assets/img/osqufia10_result.webp";
import osqufia11 from "../../assets/img/osqufia11_result.webp";
import osqufia12 from "../../assets/img/osqufia12_result.webp";
import osqufia13 from "../../assets/img/osqufia13_result.webp";
import osqufia14 from "../../assets/img/osqufia14_result.webp";
import osqufia15 from "../../assets/img/osqufia15_result.webp";
import osqufia16 from "../../assets/img/osqufia16_result.webp";
import whitesand1 from "../../assets/img/whitesand1_result.webp";
import whitesand2 from "../../assets/img/whitesand2_result.webp";
import whitesand3 from "../../assets/img/whitesand3_result.webp";
import whitesand4 from "../../assets/img/whitesand4_result.webp";
import whitesand5 from "../../assets/img/whitesand5_result.webp";
import us1 from "../../assets/img/us1_result.webp";
import us2 from "../../assets/img/us2_result.webp";
import us3 from "../../assets/img/us3_result.webp";
import us4 from "../../assets/img/us4_result.webp";
import us5 from "../../assets/img/us5_result.webp";
import us6 from "../../assets/img/us6_result.webp";
import us7 from "../../assets/img/us7_result.webp";
import us8 from "../../assets/img/us8_result.webp";
import us9 from "../../assets/img/us9_result.webp";
import cms from "../../assets/img/cms_result.webp";
import hcr1 from "../../assets/img/hcr1_result.webp";
import naseq8 from "../../assets/img/naseq8_result.webp";
import thite1 from "../../assets/img/thite1_result.webp";
import thite2 from "../../assets/img/thite2_result.webp";
import thite3 from "../../assets/img/thite3_result.webp";
import thite4 from "../../assets/img/thite4_result.webp";
import thite5 from "../../assets/img/thite5_result.webp";
import thite6 from "../../assets/img/thite6_result.webp";
import henkleez7 from "../../assets/img/henkleez7_result.webp";
import market1 from "../../assets/img/market1_result.webp";
import market2 from "../../assets/img/market2_result.webp";
import market3 from "../../assets/img/market3_result.webp";
import market4 from "../../assets/img/market4_result.webp";
import market5 from "../../assets/img/market5_result.webp";
import market9 from "../../assets/img/market9_result.webp";
import dashboed1 from "../../assets/img/dashboed1_result.webp";
import dashboed2 from "../../assets/img/dashboed2_result.webp";
import dashboed3 from "../../assets/img/dashboed3_result.webp";
import dashboed4 from "../../assets/img/dashboed4_result.webp";
import dashboed5 from "../../assets/img/dashboed5_result.webp";
import dashboed6 from "../../assets/img/dashboed6_result.webp";
import dashboed7 from "../../assets/img/dashboed7_result.webp";

// ── Data ──────────────────────────────────────────────────────────────────────
const FILTERS = ["All", "WordPress", "React", "PHP", "C#", "HTML"];

const PROJECTS = [
    {
        id: 1, number: "01", title: "issgroups Project",
        cover: issgroups1, url: "https://issgroups.com/",
        date: "mar 2026", wordpress: true, filter: "WordPress",
        tags: "WordPress · SEO · Cloudflare CDN",
        gallery: [issgroups1, issgroups2, issgroups3, issgroups4, issgroups5, issgroups6, issgroups7, issgroups8, issgroups9, issgroups10],
    },
    {
        id: 2, number: "02", title: "chitotech Project",
        cover: chitotech1, url: "https://chitotech-egypt.com/",
        date: "Jan 2026", wordpress: true, filter: "WordPress",
        tags: "WordPress · SEO · Cloudflare CDN",
        gallery: [chitotech1, chitotech2, chitotech3, chitotech4, chitotech5],
    },
    {
        id: 3, number: "03", title: "KanbanBoard Project",
        cover: KanbanBoard1, url: "#",
        date: "Oct 2025", wordpress: true, filter: "React",
        tags: "React ",
        gallery: [KanbanBoard1, KanbanBoard2, KanbanBoard3],
    },
    {
        id: 4, number: "04", title: "insidermenofia Project",
        cover: insidermenofia1, url: "https://insidermenofia.com/",
        date: "Oct 2025", wordpress: true, filter: "WordPress",
        tags: "WordPress · SEO · Cloudflare CDN",
        gallery: [insidermenofia2, insidermenofia3, insidermenofia4, insidermenofia5, insidermenofia6, insidermenofia7],
    },
    {
        id: 5, number: "05", title: "ugec Project",
        cover: ugec1, url: "https://ugec.souqmsr.com/",
        date: "Nov 2024", wordpress: true, filter: "WordPress",
        tags: "WordPress · Elementor · ACF",
        gallery: [ugec2, ugec3, ugec4],
    },
    {
        id: 6, number: "06", title: "jawdaconsultant Project",
        cover: jawdaconsultant1, url: "https://jawdaconsultant.com",
        date: "Jan 2024", wordpress: true, filter: "WordPress",
        tags: "WordPress · Elementor",
        gallery: [jawdaconsultant3, jawdaconsultant4],
    },
    {
        id: 7, number: "07", title: "al-motamizon Project",
        cover: alMotamizon1, url: "https://al-motamizon.com/ar",
        date: "Dec 2023", wordpress: false, filter: "PHP",
        tags: "PHP · Javascript · HTML",
        gallery: [alMotamizon2, alMotamizon3, alMotamizon4, alMotamizon5, alMotamizon6, alMotamizon7],
    },
    {
        id: 8, number: "08", title: "ghulam Project",
        cover: ghulam1, url: "https://ghulam.najezsoft.com/ar",
        date: "Nov 2023", wordpress: false, filter: "PHP",
        tags: "PHP · Javascript · HTML",
        gallery: [ghulam2, ghulam3, ghulam4, ghulam5, ghulam6, ghulam7, ghulam9],
    },
    {
        id: 9, number: "09", title: "noorcontrol Project",
        cover: noorcontrol1, url: "https://noorcontrol.com/",
        date: "Nov 2023", wordpress: false, filter: "PHP",
        tags: "PHP · Javascript · HTML",
        gallery: [noorcontrol2, noorcontrol3, noorcontrol4, noorcontrol5, noorcontrol6, noorcontrol7],
    },
    {
        id: 10, number: "10", title: "asiaf Project",
        cover: asiaf1, url: "https://www.asiaf.com.sa/",
        date: "Oct 2023", wordpress: false, filter: "PHP",
        tags: "PHP · Javascript · HTML",
        gallery: [asiaf2, asiaf3, asiaf4, asiaf5],
    },
    {
        id: 11, number: "11", title: "kfs-hiet Project",
        cover: kfsHiet1, url: "https://kfs-hiet.edu.eg/",
        date: "Aug 2023", wordpress: false, filter: "React",
        tags: "React · Custom Development",
        gallery: [kfsHiet2, kfsHiet3, kfsHiet4, kfsHiet5, kfsHiet6, kfsHiet7, kfsHiet8, kfsHiet9, kfsHiet10],
    },
    {
        id: 12, number: "12", title: "citysquares Project",
        cover: citysquares1, url: "#",
        date: "Jul 2023", wordpress: false, filter: "WordPress",
        tags: "WordPress · Elementor · ACF",
        gallery: [citysquares2, citysquares3, citysquares4, citysquares5, citysquares6, citysquares7],
    },
    {
        id: 13, number: "13", title: "osqufia Project",
        cover: osqufia1, url: "#",
        date: "Jun 2023", wordpress: false, filter: "PHP",
        tags: "PHP · Javascript · HTML",
        gallery: [osqufia2, osqufia3, osqufia4, osqufia5, osqufia6, osqufia7, osqufia8, osqufia9, osqufia10, osqufia11, osqufia12, osqufia13, osqufia14, osqufia15, osqufia16],
    },
    {
        id: 14, number: "14", title: "whitesand Project",
        cover: whitesand1, url: "https://www.whitesand-eg.com/",
        date: "Nov 2021", wordpress: false, filter: "PHP",
        tags: "PHP · Javascript · HTML",
        gallery: [whitesand2, whitesand3, whitesand4, whitesand5],
    },
    {
        id: 15, number: "15", title: "us Project",
        cover: us1, url: "#",
        date: "May 2023", wordpress: false, filter: "PHP",
        tags: "PHP · Javascript · HTML",
        gallery: [us2, us3, us4, us5, us6, us7, us8, us9],
    },
    {
        id: 16, number: "16", title: "CMS Project",
        cover: cms, url: "#",
        date: "Feb 2021", wordpress: false, filter: "React",
        tags: "React · Custom CMS",
        gallery: [],
    },
    {
        id: 17, number: "17", title: "HCR Project",
        cover: hcr1, url: "#",
        date: "Feb 2021", wordpress: false, filter: "C#",
        tags: "C# · Javascript · HTML . css",
        gallery: [],
    },
    {
        id: 18, number: "18", title: "naseq Project",
        cover: naseq8, url: "#",
        date: "Feb 2021", wordpress: false, filter: "PHP",
        tags: "PHP · Javascript · HTML",
        gallery: [],
    },
    {
        id: 19, number: "19", title: "thite Project",
        cover: thite1, url: "https://thiet.edu.eg/ar",
        date: "Feb 2021", wordpress: false, filter: "PHP",
        tags: "PHP · Javascript · HTML",
        gallery: [thite2, thite3, thite4, thite5, thite6],
    },
    {
        id: 20, number: "20", title: "henkleez Project",
        cover: henkleez7, url: "https://www.henkleez.com/ar",
        date: "Feb 2021", wordpress: false, filter: "PHP",
        tags: "PHP · Javascript · HTML",
        gallery: [],
    },
    {
        id: 21, number: "21", title: "market Project",
        cover: market9, url: "#",
        date: "Feb 2020", wordpress: false, filter: "HTML",
        tags: "HTML · E-Commerce",
        gallery: [market1, market2, market3, market4, market5],
    },
    {
        id: 22, number: "22", title: "dashboed Project",
        cover: dashboed7, url: "#",
        date: "Feb 2020", wordpress: false, filter: "HTML",
        tags: "HTML · Dashboard",
        gallery: [dashboed1, dashboed2, dashboed3, dashboed4, dashboed5, dashboed6],
    },
];


// ── Component ─────────────────────────────────────────────────────────────────
export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered =
        activeFilter === "All"
            ? PROJECTS
            : PROJECTS.filter((p) => p.filter === activeFilter);

    return (
        <>
            <title>Portfolio | Mostafa Wahba</title>

            <section className="pf-section">

                {/* Header */}
                <section
                    className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
                    <h1>  MY <span>PORTFOLIO</span> </h1>
                    <span className="title-bg"> WORK    </span>
                </section>

                {/* Filters */}
                <div className="pf-filter-bar align-items-center justify-content-center">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            className={`pf-filter-btn ${activeFilter === f ? "active" : ""}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="pf-grid">
                    {filtered.map((project) => (
                        <div key={project.id} className="pf-card rounded">

                            <div className="pf-accent-line" />
                            <div className="pf-card-number">{project.number}</div>
                            <img className="pf-card-img" src={project.cover} alt={project.title} />
                            <div className="pf-overlay" />

                            {/* Default bottom info */}
                            <div className="pf-card-info">
                                <div className="pf-card-date">{project.date}</div>
                                <div className="pf-card-name">{project.title}</div>
                            </div>

                            {/* Hover overlay */}
                            <div className="pf-hover-overlay">
                                <div className="pf-hover-tag">{project.tags}</div>
                                <div className="pf-hover-title">{project.title.toUpperCase()}</div>
                                <div className="pf-hover-date">{project.date}</div>
                                <div className="pf-btn-row">
                                    <a
                                        data-fancybox={project.title}
                                        data-caption={project.title}
                                        href={project.cover}
                                        className="pf-gallery-btn p-2 rounded"
                                    >
                                        <img src={gallery} alt={'gallery'} className="img-link" ></img>
                                    </a>

                                    {project.url && project.url !== "#" && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pf-visit-btn p-2 rounded"
                                        >
                                            <img src={link} alt={'link'} className="img-link"></img>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Hidden gallery images for Fancybox */}
                            {project.gallery.map((img, i) => (
                                <a
                                    key={i}
                                    className="pf-hidden-gallery"
                                    data-fancybox={project.title}
                                    data-caption={`${project.title} — ${i + 2}`}
                                    href={img}
                                />
                            ))}

                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="pf-footer">
                    <div className="pf-count">
                        Showing <span>{filtered.length}</span> of {PROJECTS.length} projects
                    </div>
                </div>

            </section>
        </>
    );
}