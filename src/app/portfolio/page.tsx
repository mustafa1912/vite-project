'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from '../../components/portfolio/Lightbox';

// ── Types ────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  number: string;
  title: string;
  cover: string;
  url: string;
  date: string;
  wordpress: boolean;
  filter: string;
  tags: string;
  gallery: string[];
}

const FILTERS = ["All", "WordPress", "React", "PHP", "C#", "HTML"];

const PROJECTS: Project[] = [
  {
    id: 1, number: "01", title: "Enterprise  ERP System",
    cover: "/assets/img/erp1_result.webp", url: "#",
    date: "Jun 2026", wordpress: false, filter: "React",
    tags: "React 19 · TypeScript · Laravel 12 · Tailwind 4 · ERP",
    gallery: Array.from({ length: 8 }, (_, i) => `/assets/img/erp${i + 1}_result.webp`),
  },
  {
    id: 2, number: "02", title: "Saif_dK Project",
    cover: "/assets/img/Saif_dK1.webp", url: "https://mustafa1912.github.io/Saif_dK/",
    date: "May 2026", wordpress: false, filter: "HTML",
    tags: "HTML5 · CSS3 · JavaScript · Three.js · GSAP · Lenis · Cyberpunk HUD",
    gallery: Array.from({ length: 11 }, (_, i) => `/assets/img/Saif_dK${i + 1}.webp`),
  },
  {
    id: 3, number: "03", title: "nutramena Project",
    cover: "/assets/img/nutramena1.webp", url: "https://nutramena.com/",
    date: "May 2026", wordpress: true, filter: "WordPress",
    tags: "WordPress · WooCommerce · Elementor · Responsive Design · SEO",
    gallery: Array.from({ length: 13 }, (_, i) => `/assets/img/nutramena${i + 1}.webp`),
  },
  {
    id: 4, number: "04", title: "issgroups Project",
    cover: "/assets/img/issgroups1.webp", url: "https://issgroups.com/",
    date: "Mar 2026", wordpress: true, filter: "WordPress",
    tags: "WordPress · Custom Theme · Responsive Design · SEO · Performance",
    gallery: Array.from({ length: 10 }, (_, i) => `/assets/img/issgroups${i + 1}.webp`),
  },
  {
    id: 5, number: "05", title: "chitotech Project",
    cover: "/assets/img/chitotech1.webp", url: "https://chitotech-egypt.com/",
    date: "Jan 2026", wordpress: true, filter: "WordPress",
    tags: "WordPress · WooCommerce · Elementor · Responsive Design · SEO",
    gallery: Array.from({ length: 5 }, (_, i) => `/assets/img/chitotech${i + 1}.webp`),
  },
  {
    id: 6, number: "06", title: "KanbanBoard Project",
    cover: "/assets/img/KanbanBoard1.webp", url: "",
    date: "Oct 2025", wordpress: false, filter: "React",
    tags: "React · Kanban Board · Drag & Drop · State Management · SPA",
    gallery: Array.from({ length: 3 }, (_, i) => `/assets/img/KanbanBoard${i + 1}.webp`),
  },
  {
    id: 7, number: "07", title: "insidermenofia Project",
    cover: "/assets/img/insidermenofia1.webp", url: "https://insidermenofia.com/",
    date: "Oct 2025", wordpress: true, filter: "WordPress",
    tags: "WordPress · Custom Theme · Responsive Design · SEO · Performance",
    gallery: Array.from({ length: 7 }, (_, i) => `/assets/img/insidermenofia${i + 1}.webp`),
  },
  {
    id: 8, number: "08", title: "ugec Project",
    cover: "/assets/img/ugec1_result.webp", url: "",
    date: "Nov 2024", wordpress: true, filter: "WordPress",
    tags: "WordPress · Elementor · ACF · Responsive Design · SEO",
    gallery: Array.from({ length: 4 }, (_, i) => `/assets/img/ugec${i + 1}_result.webp`),
  },
  {
    id: 9, number: "09", title: "jawdaconsultant Project",
    cover: "/assets/img/jawdaconsultant1_result.webp", url: "https://jawdaconsultant.com",
    date: "Jan 2024", wordpress: true, filter: "WordPress",
    tags: "WordPress · Elementor · ACF · Responsive Design · SEO",
    gallery: [
      "/assets/img/jawdaconsultant1_result.webp",
      "/assets/img/jawdaconsultant3_result.webp",
      "/assets/img/jawdaconsultant4_result.webp",
    ],
  },
  {
    id: 10, number: "10", title: "al-motamizon Project",
    cover: "/assets/img/al-motamizon1_result.webp", url: "https://al-motamizon.com/ar",
    date: "Dec 2023", wordpress: false, filter: "PHP",
    tags: "PHP · Custom E-Commerce · MySQL · JavaScript · Responsive Design",
    gallery: Array.from({ length: 7 }, (_, i) => `/assets/img/al-motamizon${i + 1}_result.webp`),
  },
  {
    id: 11, number: "11", title: "ghulam Project",
    cover: "/assets/img/ghulam1_result.webp", url: "https://ghulam.najezsoft.com/ar",
    date: "Nov 2023", wordpress: false, filter: "PHP",
    tags: "PHP · Custom Development · MySQL · Bootstrap · Responsive Design",
    gallery: [1, 2, 3, 4, 5, 6, 7, 9].map((n) => `/assets/img/ghulam${n}_result.webp`),
  },
  {
    id: 12, number: "12", title: "noorcontrol Project",
    cover: "/assets/img/noorcontrol1_result.webp", url: "https://noorcontrol.com/",
    date: "Nov 2023", wordpress: false, filter: "PHP",
    tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
    gallery: Array.from({ length: 7 }, (_, i) => `/assets/img/noorcontrol${i + 1}_result.webp`),
  },
  {
    id: 13, number: "13", title: "asiaf Project",
    cover: "/assets/img/asiaf1_result.webp", url: "https://www.asiaf.com.sa/",
    date: "Oct 2023", wordpress: false, filter: "PHP",
    tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
    gallery: Array.from({ length: 5 }, (_, i) => `/assets/img/asiaf${i + 1}_result.webp`),
  },
  {
    id: 14, number: "14", title: "kfs-hiet Project",
    cover: "/assets/img/kfs-hiet1_result.webp", url: "https://kfs-hiet.edu.eg/",
    date: "Aug 2023", wordpress: false, filter: "React",
    tags: "React · Custom Development · Responsive Design · SPA · API Integration",
    gallery: Array.from({ length: 10 }, (_, i) => `/assets/img/kfs-hiet${i + 1}_result.webp`),
  },
  {
    id: 15, number: "15", title: "citysquares Project",
    cover: "/assets/img/citysquares1_result.webp", url: "",
    date: "Jul 2023", wordpress: false, filter: "WordPress",
    tags: "WordPress · Elementor · ACF · Responsive Design · SEO",
    gallery: Array.from({ length: 7 }, (_, i) => `/assets/img/citysquares${i + 1}_result.webp`),
  },
  {
    id: 16, number: "16", title: "osqufia Project",
    cover: "/assets/img/osqufia1_result.webp", url: "",
    date: "Jun 2023", wordpress: false, filter: "PHP",
    tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
    gallery: Array.from({ length: 16 }, (_, i) => `/assets/img/osqufia${i + 1}_result.webp`),
  },
  {
    id: 17, number: "17", title: "whitesand Project",
    cover: "/assets/img/whitesand1_result.webp", url: "https://www.whitesand-eg.com/",
    date: "Nov 2021", wordpress: false, filter: "PHP",
    tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
    gallery: Array.from({ length: 5 }, (_, i) => `/assets/img/whitesand${i + 1}_result.webp`),
  },
  {
    id: 18, number: "18", title: "us Project",
    cover: "/assets/img/us1_result.webp", url: "",
    date: "May 2023", wordpress: false, filter: "PHP",
    tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
    gallery: Array.from({ length: 9 }, (_, i) => `/assets/img/us${i + 1}_result.webp`),
  },
  {
    id: 19, number: "19", title: "CMS Project",
    cover: "/assets/img/cms_result.webp", url: "",
    date: "Feb 2021", wordpress: false, filter: "React",
    tags: "React · Custom CMS · REST API · Responsive Design · SPA",
    gallery: ["/assets/img/cms_result.webp"],
  },
  {
    id: 20, number: "20", title: "HCR Project",
    cover: "/assets/img/hcr1_result.webp", url: "",
    date: "Feb 2021", wordpress: false, filter: "C#",
    tags: "C# · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
    gallery: ["/assets/img/hcr1_result.webp"],
  },
  {
    id: 21, number: "21", title: "naseq Project",
    cover: "/assets/img/naseq8_result.webp", url: "",
    date: "Feb 2021", wordpress: false, filter: "PHP",
    tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
    gallery: ["/assets/img/naseq8_result.webp"],
  },
  {
    id: 22, number: "22", title: "thite Project",
    cover: "/assets/img/thite1_result.webp", url: "https://thiet.edu.eg/ar",
    date: "Feb 2021", wordpress: false, filter: "PHP",
    tags: "C# · ASP.NET · JavaScript · HTML5 · CSS3 · Responsive Design",
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/img/thite${i + 1}_result.webp`),
  },
  {
    id: 23, number: "23", title: "henkleez Project",
    cover: "/assets/img/henkleez7_result.webp", url: "https://www.henkleez.com/ar",
    date: "Feb 2021", wordpress: false, filter: "PHP",
    tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
    gallery: ["/assets/img/henkleez7_result.webp"],
  },
  {
    id: 24, number: "24", title: "market Project",
    cover: "/assets/img/market9_result.webp", url: "",
    date: "Feb 2020", wordpress: false, filter: "HTML",
    tags: "HTML5 · CSS3 · JavaScript · E-Commerce UI · Responsive Design",
    gallery: [
      "/assets/img/market9_result.webp",
      "/assets/img/market1_result.webp",
      "/assets/img/market2_result.webp",
      "/assets/img/market3_result.webp",
      "/assets/img/market4_result.webp",
      "/assets/img/market5_result.webp",
    ],
  },
  {
    id: 25, number: "25", title: "dashboed Project",
    cover: "/assets/img/dashboed7_result.webp", url: "",
    date: "Feb 2020", wordpress: false, filter: "HTML",
    tags: "HTML5 · CSS3 · JavaScript · Dashboard UI · Responsive Design",
    gallery: [
      "/assets/img/dashboed7_result.webp",
      "/assets/img/dashboed1_result.webp",
      "/assets/img/dashboed2_result.webp",
      "/assets/img/dashboed3_result.webp",
      "/assets/img/dashboed4_result.webp",
      "/assets/img/dashboed5_result.webp",
      "/assets/img/dashboed6_result.webp",
    ],
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Lightbox state management
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.filter === activeFilter);

  const openLightbox = (project: Project) => {
    setLightboxImages(project.gallery);
    setLightboxTitle(project.title);
    setLightboxOpen(true);
  };

  return (
    <section className="pf-section" aria-labelledby="portfolio-title">
      {/* Dynamic SEO & HTML5 Semantic Header */}
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
        <h1 id="portfolio-title">MY <span>PORTFOLIO</span></h1>
        <span className="title-bg" aria-hidden="true">WORK</span>
      </section>

      {/* Filters Bar */}
      <nav 
        className="pf-filter-bar align-items-center justify-content-center" 
        aria-label="Filter portfolio projects"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`pf-filter-btn ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
            aria-pressed={activeFilter === f}
            type="button"
          >
            {f}
          </button>
        ))}
      </nav>

      {/* Grid Layout using optimized Next.js Images */}
      <div className="pf-grid" role="region" aria-label="Portfolio gallery grid">
        {filtered.map((project) => (
          <article 
            key={project.id} 
            className="pf-card rounded overflow-hidden position-relative"
          >
            <div className="pf-accent-line" />
            <div className="pf-card-number p-1 poppins-font">{project.number}</div>
            
            {/* Optimized Next/Image container wrapper */}
            <div className="pf-image-container">
              <Image
                className="pf-card-img"
                src={project.cover}
                alt={`${project.title} cover image`}
                width={500}
                height={375}
              />
            </div>
            
            <div className="pf-overlay" />

            {/* Default bottom info */}
            <div className="pf-card-info">
              <span className="pf-card-date open-sans-font">{project.date}</span>
              <h2 className="pf-card-name poppins-font h5 m-0">{project.title}</h2>
            </div>

            {/* Premium CSS-based Hover overlay */}
            <div className="pf-hover-overlay">
              <span className="pf-hover-tag open-sans-font">{project.tags}</span>
              <h3 className="pf-hover-title poppins-font h4">{project.title.toUpperCase()}</h3>
              <span className="pf-hover-date open-sans-font">{project.date}</span>
              
              <div className="pf-btn-row">
                {/* Pure React Lightbox Trigger */}
                <button
                  type="button"
                  onClick={() => openLightbox(project)}
                  className="pf-gallery-btn"
                  aria-label={`Open photo gallery slideshow for ${project.title}`}
                >
                  <i className="fa fa-image" aria-hidden="true"></i>
                </button>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-visit-btn"
                    aria-label={`Visit live website of ${project.title}`}
                  >
                    <i className="fa fa-external-link-alt" aria-hidden="true"></i>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer statistics */}
      <footer className="pf-footer open-sans-font">
        <div className="pf-count">
          Showing <span>{filtered.length}</span> of {PROJECTS.length} projects
        </div>
      </footer>

      {/* Reusable, FOUC-free Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        title={lightboxTitle}
      />
    </section>
  );
}
