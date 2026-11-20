export default function Footer() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 80;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  };

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo" onClick={(e) => handleScrollTo(e, '#home')}>
                <div className="footer-logo-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="40" height="40">
                    <circle cx="30" cy="30" r="28" fill="#1a4fa0" stroke="#0ea5e9" strokeWidth="2" />
                    <ellipse cx="30" cy="30" rx="20" ry="13" fill="white" opacity="0.95" />
                    <circle cx="30" cy="30" r="8" fill="#0ea5e9" />
                    <circle cx="30" cy="30" r="5" fill="#0f172a" />
                    <circle cx="27" cy="27" r="1.5" fill="white" />
                  </svg>
                </div>
                <div>
                  <span className="footer-institute-name">M. M. Joshi Eye Institute</span>
                  <span className="footer-tagline-text">Padma Nayanalaya</span>
                </div>
              </a>
              <p className="footer-desc">
                Karnataka's premier ophthalmic super-specialty institute, delivering compassionate and clinically excellent eye care since 1987.
              </p>
              <div className="footer-contact-info">
                <a href="tel:+918362261500" className="footer-contact-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  0836-2261500
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home" onClick={(e) => handleScrollTo(e, '#home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>About Us</a></li>
                <li><a href="#doctors" onClick={(e) => handleScrollTo(e, '#doctors')}>Our Doctors</a></li>
                <li><a href="#testimonials" onClick={(e) => handleScrollTo(e, '#testimonials')}>Patient Stories</a></li>
                <li><a href="#locations" onClick={(e) => handleScrollTo(e, '#locations')}>Locations</a></li>
                <li><a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>Contact Us</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links">
                <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>Cataract Surgery</a></li>
                <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>Vitreo-Retina</a></li>
                <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>LASIK / Clear Eye</a></li>
                <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>Cornea Services</a></li>
                <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>Glaucoma Care</a></li>
                <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>Paediatric Eye Care</a></li>
              </ul>
            </div>

            {/* Contact & Follow Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact &amp; Follow</h4>
              <div className="footer-contact-details">
                <div className="footer-contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Vidyanagar, Hubballi<br />580031, Karnataka</span>
                </div>
                <div className="footer-contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  <span>0836-2261500<br />0836-2261501</span>
                </div>
                <div className="footer-contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                  <span>Mon&ndash;Sat: 9AM &ndash; 6PM<br />Emergency: 24&#215;7</span>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter/X">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            &copy; 2024 M. M. Joshi Eye Institute. All rights reserved. | Padma Nayanalaya, Hubballi
          </p>
          <a href="#home" className="back-to-top" id="backToTop" onClick={handleBackToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
