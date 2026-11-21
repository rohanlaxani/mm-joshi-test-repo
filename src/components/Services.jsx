const SERVICES_DATA = [
  {
    icon: '🔵',
    title: 'Cataract Surgery',
    desc: 'Advanced micro-incision phacoemulsification with premium multifocal, trifocal and toric IOL implants for high-definition vision restoration.',
  },
  {
    icon: '👁',
    title: 'Vitreo-Retina Services',
    desc: 'Specialized diagnosis and surgical management of diabetic retinopathy, retinal detachments, vitreous hemorrhage, and macular disorders.',
  },
  {
    icon: '🌿',
    title: 'Cornea & Refractive Services',
    desc: 'Corneal transplantation (PK, DALK, DSAEK), keratoconus cross-linking (C3R), dry eye therapy, and anterior surface management.',
  },
  {
    icon: '👶',
    title: 'Paediatric Ophthalmology & Squint',
    desc: "Child-friendly eye care, pediatric cataracts, amblyopia (lazy eye) therapy, and precision surgical correction of strabismus (squint).",
  },
  {
    icon: '🔺',
    title: 'Glaucoma Care & Surgery',
    desc: 'Early computerized visual field screening, OCT-RNFL diagnostics, selective laser trabeculoplasty (SLT), and filtration surgeries.',
  },
  {
    icon: '🌟',
    title: 'LASIK & Clear Eye Surgery',
    desc: 'State-of-the-art blade-free laser vision correction and Contoura Vision procedures for permanent independence from spectacles.',
  },
  {
    icon: '🎯',
    title: 'Oculoplasty & Orbital Surgery',
    desc: 'Aesthetic and reconstructive eyelid surgeries, ptosis correction, tear duct (DCR) procedures, and orbital disease management.',
  },
  {
    icon: '💎',
    title: 'Contact Lens & Low Vision Clinic',
    desc: 'Custom fitting for specialty Scleral, Rose K, and RGP lenses alongside optical rehabilitation aids for sub-normal vision patients.',
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
            From routine vision check-ups to complex microsurgical retinal and corneal procedures, our super-specialists deliver world-class ophthalmic care under one roof.
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
