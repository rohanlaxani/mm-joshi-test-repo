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
      <div className="container hero-container">
        {/* Left Column: Reassuring Patient-Focused Messaging */}
        <div className="hero-content-col reveal">
          <div className="hero-pill-badge">
            <span className="pill-pulse-dot"></span>
            <span>Founded 1967 · Padma Shri Dr. M. M. Joshi · NABH Accredited</span>
          </div>

          <h1 className="hero-headline">
            Advanced Eye Care.<br />
            <span className="headline-accent">Compassionate Touch.</span>
          </h1>

          <p className="hero-subheadline">
            Karnataka's premier ophthalmic super-specialty institute (Padma Nayanalaya) delivering
            board-certified microsurgical, laser, cataract, and retina care for over 55+ years.
          </p>

          <div className="hero-ctas">
            <a
              href="#contact"
              className="btn btn-amber btn-lg"
              onClick={(e) => handleScrollTo(e, '#contact')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M19 4H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
              </svg>
              Book an Appointment
            </a>
            <a href="tel:+918362228222" className="btn btn-outline-white btn-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              0836-2228222
            </a>
          </div>

          <div className="hero-metrics-strip">
            <div className="metric-box">
              <span className="metric-val">55+</span>
              <span className="metric-lbl">Years of Trust</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">5,00,000+</span>
              <span className="metric-lbl">Patients Healed</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">20+</span>
              <span className="metric-lbl">Super-Specialists</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">9</span>
              <span className="metric-lbl">Centers in Karnataka</span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Clinical Trust Card Showcase */}
        <div className="hero-visual-col reveal">
          <div className="hero-clinical-card">
            {/* Main Featured Specialist Box */}
            <div className="clinical-doctor-preview">
              <div className="doctor-avatar-circle">
                <img
                  src="/assets/dr-shrinivas-joshi.jpg"
                  alt="Dr. Srinivas Joshi"
                  className="preview-doctor-img"
                  onError={(e) => {
                    e.target.src = '/assets/logo.png';
                  }}
                />
              </div>
              <div className="doctor-preview-meta">
                <span className="preview-label">DIRECTOR &amp; VITREORETINAL SPECIALIST</span>
                <h4 className="preview-name">Dr. Srinivas Joshi</h4>
                <p className="preview-qual">MS, DNB, FICO, Fellowship in Retina</p>
              </div>
            </div>

            {/* Quick Consultation Perks */}
            <div className="hero-quick-features">
              <div className="quick-feature-item">
                <div className="qf-icon-box">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <strong>NABH Accredited Ophthalmic Suites</strong>
                  <p>International standard laminar airflow theaters</p>
                </div>
              </div>

              <div className="quick-feature-item">
                <div className="qf-icon-box">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <strong>24×7 Emergency Eye Trauma Center</strong>
                  <p>Round-the-clock ophthalmic casualty &amp; care</p>
                </div>
              </div>

              <div className="quick-feature-item">
                <div className="qf-icon-box">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <strong>Shri Guru Mahipatiraj Eye Bank</strong>
                  <p>Pioneering corneal donation &amp; transplantation</p>
                </div>
              </div>
            </div>

            {/* Bottom Floating Pill: Verified Patient Rating */}
            <div className="hero-card-footer">
              <div className="rating-stars-row">
                <span className="star-symbol">★</span>
                <span className="star-symbol">★</span>
                <span className="star-symbol">★</span>
                <span className="star-symbol">★</span>
                <span className="star-symbol">★</span>
                <strong className="rating-score">4.9 / 5.0</strong>
              </div>
              <span className="rating-caption">Verified patient reviews across North Karnataka</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
