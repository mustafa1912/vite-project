'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export default function Lightbox({ isOpen, onClose, images, title }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div
      className="custom-lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} Gallery`}
      onClick={onClose}
    >
      <button 
        className="lightbox-close" 
        onClick={onClose} 
        aria-label="Close Lightbox"
      >
        &times;
      </button>

      {images.length > 1 && (
        <>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Image"
          >
            &#10094;
          </button>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Image"
          >
            &#10095;
          </button>
        </>
      )}

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-image-wrapper">
          <Image
            src={currentImg}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="lightbox-image"
            width={1200}
            height={900}
            priority
          />
        </div>
        <div className="lightbox-caption">
          <h3>{title.toUpperCase()}</h3>
          <span className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}
