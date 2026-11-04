'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from '../../components/portfolio/Lightbox';
import { siteConfig, ProjectItem } from '../../config/site';

const PROJECTS_PER_PAGE = 6;

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  // Lightbox state management
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const filtered =
    activeFilter === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.filter === activeFilter);

  const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE) || 1;

  // Reset page when filter changes
  const handleFilterChange = (f: string) => {
    setActiveFilter(f);
    setCurrentPage(1);
  };

  // Page change with smooth scroll to top of portfolio
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      const titleElem = document.getElementById('portfolio-title');
      if (titleElem) {
        titleElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filtered.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  const showingStart = filtered.length > 0 ? startIndex + 1 : 0;
  const showingEnd = Math.min(startIndex + PROJECTS_PER_PAGE, filtered.length);

  const openLightbox = (project: ProjectItem) => {
    setLightboxImages(project.gallery);
    setLightboxTitle(project.title);
    setLightboxOpen(true);
  };

  return (
    <section className="pf-section" aria-labelledby="portfolio-title">
      {/* Dynamic SEO & HTML5 Semantic Header */}
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within" style={{ scrollMarginTop: '100px' }}>
        <h1 id="portfolio-title">MY <span>PORTFOLIO</span></h1>
        <span className="title-bg" aria-hidden="true">WORK</span>
      </section>

      {/* Filters Bar */}
      <nav 
        className="pf-filter-bar align-items-center justify-content-center" 
        aria-label="Filter portfolio projects"
      >
        {siteConfig.portfolioFilters.map((f) => (
          <button
            key={f}
            className={`pf-filter-btn ${activeFilter === f ? "active" : ""}`}
            onClick={() => handleFilterChange(f)}
            aria-pressed={activeFilter === f}
            type="button"
          >
            {f}
          </button>
        ))}
      </nav>

      {/* Grid Layout using optimized Next.js Images */}
      <div className="pf-grid" role="region" aria-label="Portfolio gallery grid">
        {paginatedProjects.map((project) => (
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
                width={800}
                height={600}
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
              {project.summary && (
                <p className="text-muted small px-3 text-center d-none d-md-block" style={{ fontSize: '12px', lineHeight: '18px' }}>
                  {project.summary}
                </p>
              )}
              
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
                    aria-label={`Visit live demo of ${project.title}`}
                  >
                    <i className="fa fa-external-link-alt" aria-hidden="true"></i>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav className="pf-pagination" aria-label="Portfolio pagination">
          <button
            type="button"
            className="pf-page-nav-btn prev-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <i className="fa fa-solid fa-angle-left" aria-hidden="true" />
            <span>Prev</span>
          </button>

          <div className="pf-page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                className={`pf-page-num ${currentPage === pageNum ? "active" : ""}`}
                onClick={() => handlePageChange(pageNum)}
                aria-current={currentPage === pageNum ? "page" : undefined}
                aria-label={`Page ${pageNum}`}
              >
                {pageNum < 10 ? `0${pageNum}` : pageNum}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="pf-page-nav-btn next-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <span>Next</span>
            <i className="fa fa-solid fa-angle-right" aria-hidden="true" />
          </button>
        </nav>
      )}

      {/* Footer statistics */}
      <footer className="pf-footer open-sans-font">
        <div className="pf-count">
          Showing <span>{showingStart}–{showingEnd}</span> of {filtered.length} projects {activeFilter !== "All" && `(${activeFilter})`} (Total {siteConfig.projects.length})
        </div>
        {totalPages > 1 && (
          <div className="pf-count">
            Page <span>{currentPage}</span> of {totalPages}
          </div>
        )}
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
