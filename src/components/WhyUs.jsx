const WHY_DATA = [
  {
    icon: '🏅',
    title: 'Padma Shri Founded Heritage',
    desc: 'Founded in 1967 by the eminent Padma Shri Dr. M. M. Joshi, serving North Karnataka, Goa, and Maharashtra with clinical excellence for over 55+ years.',
  },
  {
    icon: '🏥',
    title: 'NABH Accredited Super-Specialty',
    desc: 'Full compliance with premier NABH standards, modern laminar airflow operation theatres, and cutting-edge ophthalmic surgical equipment.',
  },
  {
    icon: '🩺',
    title: '20+ Sub-Specialist Medical Team',
    desc: 'Fellowship-trained eye surgeons covering retina, cornea, pediatric ophthalmology, glaucoma, oculoplasty, and refractive microsurgeries.',
  },
  {
    icon: '👁️',
    title: 'Shri Guru Mahipatiraj Eye Bank',
    desc: 'Pioneering 24×7 corneal harvesting, donor tissue processing, community awareness programs, and life-changing sight restoration surgeries.',
  },
  {
    icon: '📚',
    title: 'DNB Postgraduate Teaching & Research',
    desc: 'Premier ophthalmic academic training institute nurturing future eye surgeons and actively publishing leading clinical research papers.',
  },
  {
    icon: '🌍',
    title: 'Charitable Outreach & Free Camps',
    desc: 'Over 500+ rural outreach eye screening camps, school vision assessments, and subsidized treatments ensuring quality eye care for all.',
  },
];

export default function WhyUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="why-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">The MM Joshi Difference</h2>
          <p className="section-subtitle">
            A harmonious combination of compassionate patient-first healing, cutting-edge technology, and unmatched clinical experience since 1967.
          </p>
        </div>
        <div className="why-grid">
          {WHY_DATA.map((item, index) => (
            <div className="why-card reveal" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
