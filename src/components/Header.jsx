import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Specialties' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#testimonials', label: 'Patient Stories' },
  { href: '#locations', label: 'Locations' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const [imgError, setImgError] = useState(false);
  const headerRef = useRef(null);

  // Handle scroll for sticky header shadow and active nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      // 1. Sticky header shadow
      setIsScrolled(window.scrollY > 10);

      // 2. Active nav link based on section in view
      const sections = document.querySelectorAll('section[id]');
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
      const scrollPos = window.scrollY + headerHeight + 60;
      let currentSection = '#home';

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) {
          currentSection = `#${section.getAttribute('id')}`;
        }
      });

      setActiveNav(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click & resize to close mobile menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 960 && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;

    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header" ref={headerRef}>
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
            {!imgError ? (
              <img
                src="/assets/logo.png"
                alt="M. M. Joshi Eye Institute - Padma Nayanalaya"
                className="logo-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="46" height="46" aria-label="Eye logo">
                  <circle cx="30" cy="30" r="28" fill="#1a4fa0" stroke="#0ea5e9" strokeWidth="2" />
                  <ellipse cx="30" cy="30" rx="20" ry="13" fill="white" opacity="0.95" />
                  <circle cx="30" cy="30" r="8" fill="#0ea5e9" />
                  <circle cx="30" cy="30" r="5" fill="#0f172a" />
                  <circle cx="27" cy="27" r="1.5" fill="white" />
                  <ellipse cx="30" cy="30" rx="20" ry="13" fill="none" stroke="#1a4fa0" strokeWidth="1.5" opacity="0.4" />
                </svg>
              </div>
            )}
            <div className="logo-text">
              <span className="logo-name">M. M. Joshi Eye Institute</span>
              <span className="logo-tagline">Padma Nayanalaya · Hubballi</span>
            </div>
          </a>

          {/* NABH Quality Badge */}
          <div className="header-nabh" title="NABH Accredited Eye Hospital">
            <img src="/assets/nabh.png" alt="NABH Accredited" className="nabh-badge-img" onError={(e) => e.target.style.display = 'none'} />
          </div>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeNav === link.href ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Mobile-only CTA in drawer for convenient mobile & tablet booking */}
            <li className="mobile-menu-cta">
              <a href="tel:+918362228222" className="phone-cta mobile-drawer-phone">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                0836-2228222
              </a>
              <a
                href="#contact"
                className="btn btn-amber mobile-drawer-btn"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Book Appointment
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <a href="tel:+918362228222" className="phone-cta">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              0836-2228222
            </a>
            <a href="#contact" className="btn btn-amber" onClick={(e) => handleNavClick(e, '#contact')}>
              Book Appointment
            </a>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              id="hamburger"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
