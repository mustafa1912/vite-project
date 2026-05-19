import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="contact at-top d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="container text-center">
        {/* Animated Page Title */}
        <section className="title-section text-center revealator-slideup revealator-once revealator-within">
          <h1 style={{ fontSize: '120px', lineHeight: '1', fontWeight: 900, marginBottom: '10px' }}>
            404
          </h1>
          <span className="title-bg" style={{ fontSize: '180px', opacity: 0.05 }} aria-hidden="true">
            LOST
          </span>
        </section>

        <div className="revealator-slideup revealator-once revealator-delay1 revealator-within" style={{ marginTop: '-40px' }}>
          <h2 className="poppins-font text-uppercase" style={{ fontSize: '32px', fontWeight: 700, margin: '20px 0 15px' }}>
            Page Not Found
          </h2>
          <p className="open-sans-font mx-auto mb-4" style={{ maxWidth: '500px', fontSize: '16px', lineHeight: '28px', opacity: 0.8 }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
            Let's get you back on track!
          </p>

          <Link href="/" className="button" aria-label="Navigate back to the home page">
            <span className="button-text">Back to Home</span>
            <span className="button-icon fa fa-home" aria-hidden="true"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
