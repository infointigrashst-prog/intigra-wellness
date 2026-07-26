import React, { useEffect, useState } from 'react';
import { clinicContactDetails } from '../contact-details';

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Left side actions (WhatsApp) */}
      <div className="floating-actions left-side">
        <a 
          href={`https://wa.me/${clinicContactDetails.phoneDialable.replace('+', '')}?text=${encodeURIComponent(clinicContactDetails.whatsappMessage)}`} 
          className="fab whatsapp"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
          <div className="ring"></div>
        </a>
      </div>


      {/* Right side actions (Call & Scroll to Top) */}
      <div className="floating-actions right-side">


        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className={`fab top ${showTopBtn ? 'show' : ''}`}
          aria-label="Scroll to top"
          style={{ border: 'none', cursor: 'pointer' }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
}
