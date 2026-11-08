import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Profile image served from public/assets/images/me/
const profileImg = '/assets/images/me/H22C1262.webp';

export default function Home() {
  return (
    <section className="home at-top">
      {/* HTML5 Semantic Layout Structure */}
      <section 
        className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1 no-transform revealator-within"
        aria-label="Introduction Section"
      >
        <div className="color-block d-none d-lg-block" />
        <div className="row home-details-container align-items-center" style={{ width: '100%', margin: 0 }}>
          {/* Desktop background column */}
          <div 
            className="col-lg-4 bg position-fixed d-none d-lg-block" 
            role="img" 
            aria-label="Mostafa Wahba Portrait Background"
          />
          
          <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
            <div>
              {/* Next/Image optimized responsive image for mobile viewports */}
              <div className="d-sm-block d-lg-none rounded overflow-hidden mx-auto mb-4" style={{ maxWidth: '270px', border: '4px solid #252525' }}>
                <Image
                  src={profileImg}
                  alt="Mostafa Wahba portrait photo"
                  className="img-fluid"
                  title="Mostafa Wahba"
                  priority
                  width={540}
                  height={720}
                />
              </div>

              <h1 className="text-uppercase poppins-font">
                I'm mostafa wahba.
                <span>Full Stack & Modern JS Developer</span>
              </h1>
              
              <p className="open-sans-font">
                I am a versatile Software Developer specializing in modern JavaScript ecosystems (React/Next.js, Vue/Nuxt.js) and robust backend architectures (Laravel, PHP). I build high-performance, scalable web applications, ranging from complex enterprise ERP systems to conversion-optimized headless e-commerce stores.
              </p>
              
              <Link className="button" href="/resume" aria-label="Read more about my skills and experience">
                <span className="button-text">Read more</span>
                <span className="button-icon fa fa-arrow-right" aria-hidden="true"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
