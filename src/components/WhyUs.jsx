const WHY_DATA = [
  {
    icon: '🏥',
    title: 'Super-Specialty Institute',
    desc: 'Dedicated ophthalmology center equipped with the most advanced diagnostic and surgical equipment available.',
  },
  {
    icon: '🩺',
    title: 'Expert Medical Team',
    desc: '20+ experienced ophthalmologists spanning all sub-specialties, trained at leading institutions across India and abroad.',
  },
  {
    icon: '❤️',
    title: 'Patient-Centered Care',
    desc: 'Compassionate, holistic care from your very first consultation through to full recovery and beyond.',
  },
  {
    icon: '🏆',
    title: 'Eye Bank Activity',
    desc: 'Actively contributing to corneal donation programs and driving community eye health awareness across Karnataka.',
  },
  {
    icon: '📚',
    title: 'Education & Research',
    desc: 'Training the next generation of eye care specialists through academic programs and cutting-edge clinical research.',
  },
  {
    icon: '🌍',
    title: 'Community Outreach',
    desc: 'Regular free eye camps and vision screening programs bringing quality eye care to underserved communities.',
  },
];

export default function WhyUs() {
  return (
    <section className="why-section">
      <div className="why-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">The MM Joshi Difference</h2>
          <p className="section-subtitle">
            Decades of expertise, compassionate care and cutting-edge technology — all dedicated to your vision and wellbeing.
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
