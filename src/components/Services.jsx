const SERVICES_DATA = [
  {
    icon: '🔵',
    title: 'Cataract Surgery',
    desc: 'Advanced phacoemulsification with premium IOL implants for crystal-clear vision restoration.',
  },
  {
    icon: '👁',
    title: 'Vitreo-Retina',
    desc: 'Diagnosis and treatment of retinal conditions and vitreous disorders using latest technology.',
  },
  {
    icon: '👶',
    title: 'Paediatric Ophthalmology',
    desc: "Specialized care for children's eye conditions and vision development by experienced paediatric specialists.",
  },
  {
    icon: '🌟',
    title: 'LASIK / Clear Eye Surgery',
    desc: 'Laser vision correction for permanent freedom from glasses and contact lenses.',
  },
  {
    icon: '🌿',
    title: 'Cornea Services',
    desc: 'Corneal transplant, keratoconus treatment and comprehensive surface disorder management.',
  },
  {
    icon: '🔺',
    title: 'Glaucoma Care',
    desc: 'Early detection and expert management of glaucoma to preserve precious vision for life.',
  },
  {
    icon: '🎯',
    title: 'Oculoplasty',
    desc: 'Aesthetic and reconstructive eyelid and orbital surgeries for functional and cosmetic outcomes.',
  },
  {
    icon: '💎',
    title: 'Contact Lens Clinic',
    desc: 'Expert fitting and comprehensive evaluation for all types of contact lenses by trained optometrists.',
  },
];

export default function Services() {
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
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Our Specialties</span>
          <h2 className="section-title">Comprehensive Eye Care Services</h2>
          <p className="section-subtitle">
            From routine check-ups to complex surgical procedures, our specialists deliver world-class ophthalmic care under one roof.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES_DATA.map((service, index) => (
            <div className="service-card reveal" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <a
                href="#contact"
                className="service-link"
                onClick={(e) => handleScrollTo(e, '#contact')}
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
