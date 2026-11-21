export default function Hero() {
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

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-radial"></div>
        <div className="hero-eye-graphic" aria-hidden="true">
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
            <defs>
              <radialGradient id="eyeGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1a4fa0" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="irisGrad" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0369a1" />
              </radialGradient>
            </defs>
            <ellipse cx="200" cy="150" rx="180" ry="110" fill="none" stroke="white" strokeWidth="2" opacity="0.15" />
            <ellipse cx="200" cy="150" rx="160" ry="95" fill="white" opacity="0.06" />
            <circle cx="200" cy="150" r="60" fill="url(#irisGrad)" opacity="0.5" />
            <circle cx="200" cy="150" r="38" fill="#0f172a" opacity="0.7" />
            <circle cx="182" cy="134" r="10" fill="white" opacity="0.4" />
            <ellipse cx="200" cy="150" rx="180" ry="110" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" strokeDasharray="8 4" />
            <circle cx="200" cy="150" r="90" fill="url(#eyeGrad)" />
            <line x1="20" y1="150" x2="380" y2="150" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.2" />
            <line x1="200" y1="40" x2="200" y2="260" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.2" />
          </svg>
        </div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Est. 1967 · NABH Accredited Ophthalmic Super-Specialty Hospital
          </div>
          <h1 className="hero-headline">
            Seeing Clearly.<br />
            <span className="headline-accent">Living Fully.</span>
          </h1>
          <p className="hero-subheadline">
            Karnataka's premier ophthalmic super-specialty institute &amp; postgraduate DNB training center (Padma Nayanalaya) — founded by Padma Shri Dr. M. M. Joshi, delivering world-class eye care with clinical excellence since 1967.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-amber btn-lg" onClick={(e) => handleScrollTo(e, '#contact')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M19 4H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
              </svg>
              Book an Appointment
            </a>
            <a href="tel:+918362228222" className="btn btn-outline-white btn-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call 0836-2228222
            </a>
          </div>
          <div className="hero-trust-badges">
            <div className="trust-badge">
              <span className="trust-num">Est. 1967</span>
              <span className="trust-label">Founded</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-badge">
              <span className="trust-num">55+</span>
              <span className="trust-label">Years of Care</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-badge">
              <span className="trust-num">5,00,000+</span>
              <span className="trust-label">Patients Healed</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-badge">
              <span className="trust-num">20+</span>
              <span className="trust-label">Eye Specialists</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f0f7ff" />
        </svg>
      </div>
    </section>
  );
}
