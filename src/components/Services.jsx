const SERVICES_DATA = [
  {
    iconType: 'cataract',
    title: 'Cataract Surgery',
    desc: 'Advanced micro-incision phacoemulsification with premium multifocal, trifocal and toric IOL implants for high-definition vision restoration.',
  },
  {
    iconType: 'retina',
    title: 'Vitreo-Retina Services',
    desc: 'Specialized diagnosis and surgical management of diabetic retinopathy, retinal detachments, vitreous hemorrhage, and macular disorders.',
  },
  {
    iconType: 'cornea',
    title: 'Cornea & Refractive Services',
    desc: 'Corneal transplantation (PK, DALK, DSAEK), keratoconus cross-linking (C3R), dry eye therapy, and anterior surface management.',
  },
  {
    iconType: 'pediatric',
    title: 'Paediatric Ophthalmology & Squint',
    desc: 'Child-friendly eye care, pediatric cataracts, amblyopia (lazy eye) therapy, and precision surgical correction of strabismus (squint).',
  },
  {
    iconType: 'glaucoma',
    title: 'Glaucoma Care & Surgery',
    desc: 'Early computerized visual field screening, OCT-RNFL diagnostics, selective laser trabeculoplasty (SLT), and filtration surgeries.',
  },
  {
    iconType: 'lasik',
    title: 'LASIK & Clear Eye Surgery',
    desc: 'State-of-the-art blade-free laser vision correction and Contoura Vision procedures for permanent independence from spectacles.',
  },
  {
    iconType: 'oculoplasty',
    title: 'Oculoplasty & Orbital Surgery',
    desc: 'Aesthetic and reconstructive eyelid surgeries, ptosis correction, tear duct (DCR) procedures, and orbital disease management.',
  },
  {
    iconType: 'contact-lens',
    title: 'Contact Lens & Low Vision Clinic',
    desc: 'Custom fitting for specialty Scleral, Rose K, and RGP lenses alongside optical rehabilitation aids for sub-normal vision patients.',
  },
];

function ServiceIcon({ type }) {
  switch (type) {
    case 'cataract':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
        </svg>
      );
    case 'retina':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
          <path d="M12 9a3 3 0 0 1 3 3" />
        </svg>
      );
    case 'cornea':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case 'pediatric':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'glaucoma':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case 'lasik':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'oculoplasty':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          <path d="M3 3l18 18" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );
    case 'contact-lens':
    default:
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" strokeDasharray="4 2" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
  }
}

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
            From routine vision check-ups to complex microsurgical retinal and corneal procedures,
            our board-certified specialists deliver excellence under one roof.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES_DATA.map((service, index) => (
            <div className="service-card reveal" key={index}>
              <div className="service-icon-wrap">
                <ServiceIcon type={service.iconType} />
              </div>
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
