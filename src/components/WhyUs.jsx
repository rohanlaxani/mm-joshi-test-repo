const WHY_DATA = [
  {
    iconType: 'heritage',
    title: 'Padma Shri Founded Heritage',
    desc: 'Founded in 1967 by the eminent Padma Shri Dr. M. M. Joshi, serving North Karnataka, Goa, and Maharashtra with clinical excellence for over 55+ years.',
  },
  {
    iconType: 'nabh',
    title: 'NABH Accredited Super-Specialty',
    desc: 'Full compliance with premier NABH standards, modern laminar airflow operation theatres, and cutting-edge ophthalmic surgical equipment.',
  },
  {
    iconType: 'specialists',
    title: '20+ Sub-Specialist Medical Team',
    desc: 'Fellowship-trained eye surgeons covering retina, cornea, pediatric ophthalmology, glaucoma, oculoplasty, and refractive microsurgeries.',
  },
  {
    iconType: 'eyebank',
    title: 'Shri Guru Mahipatiraj Eye Bank',
    desc: 'Pioneering 24×7 corneal harvesting, donor tissue processing, community awareness programs, and life-changing sight restoration surgeries.',
  },
  {
    iconType: 'research',
    title: 'DNB Postgraduate Teaching & Research',
    desc: 'Premier ophthalmic academic training institute nurturing future eye surgeons and actively publishing leading clinical research papers.',
  },
  {
    iconType: 'outreach',
    title: 'Charitable Outreach & Free Camps',
    desc: 'Over 500+ rural outreach eye screening camps, school vision assessments, and subsidized treatments ensuring quality eye care for all.',
  },
];

function WhyIcon({ type }) {
  switch (type) {
    case 'heritage':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    case 'nabh':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case 'specialists':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'eyebank':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3" strokeDasharray="1 3" />
        </svg>
      );
    case 'research':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case 'outreach':
    default:
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
  }
}

export default function WhyUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="why-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">The MM Joshi Difference</h2>
          <p className="section-subtitle">
            A harmonious combination of compassionate patient-first healing, cutting-edge technology,
            and unmatched clinical experience since 1967.
          </p>
        </div>
        <div className="why-grid">
          {WHY_DATA.map((item, index) => (
            <div className="why-card reveal" key={index}>
              <div className="why-icon-wrap">
                <WhyIcon type={item.iconType} />
              </div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
