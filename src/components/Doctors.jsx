const DOCTORS_DATA = [
  {
    initials: 'RS',
    gradient: 'linear-gradient(135deg, #1a4fa0, #0ea5e9)',
    name: 'Dr. Rohit M. Shetty',
    specialty: 'Senior Vitreoretinal Surgeon',
    desc: 'Fellowship trained vitreoretinal expert specializing in complex retinal detachments, diabetic retinopathy and macular disorders.',
    tags: ['Retina', 'Vitreous', 'Diabetic Eye'],
  },
  {
    initials: 'SN',
    gradient: 'linear-gradient(135deg, #7c3aed, #c026d3)',
    name: 'Dr. Supriya R. Nayak',
    specialty: 'Cornea & Refractive Surgery',
    desc: 'Expert in corneal transplantation, keratoconus management and advanced laser refractive procedures including LASIK and SMILE.',
    tags: ['Cornea', 'LASIK', 'Keratoconus'],
  },
  {
    initials: 'AK',
    gradient: 'linear-gradient(135deg, #059669, #0ea5e9)',
    name: 'Dr. Anil Kumar Patil',
    specialty: 'Cataract & Glaucoma Specialist',
    desc: 'Highly experienced in phacoemulsification cataract surgery and comprehensive glaucoma management including surgical interventions.',
    tags: ['Cataract', 'Glaucoma', 'IOL'],
  },
  {
    initials: 'MJ',
    gradient: 'linear-gradient(135deg, #dc2626, #f59e0b)',
    name: 'Dr. Meena Jadhav',
    specialty: 'Paediatric Ophthalmology',
    desc: 'Dedicated paediatric ophthalmologist specializing in amblyopia, strabismus, childhood glaucoma and developmental eye conditions.',
    tags: ['Paediatrics', 'Squint', 'Amblyopia'],
  },
  {
    initials: 'VK',
    gradient: 'linear-gradient(135deg, #0f172a, #1a4fa0)',
    name: 'Dr. Vijay Kulkarni',
    specialty: 'Oculoplasty & Orbital Surgery',
    desc: 'Specialist in aesthetic and reconstructive eyelid surgeries, orbital tumors and lacrimal system disorders.',
    tags: ['Oculoplasty', 'Orbital', 'Aesthetic'],
  },
];

export default function Doctors() {
  return (
    <section className="doctors-section" id="doctors">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Our Specialists</span>
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-subtitle">
            Our board-certified ophthalmologists bring decades of combined experience to deliver exceptional eye care.
          </p>
        </div>
        <div className="doctors-grid">
          {DOCTORS_DATA.map((doc, idx) => (
            <div className="doctor-card reveal" key={idx}>
              <div className="doctor-avatar" style={{ background: doc.gradient }}>
                {doc.initials}
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{doc.name}</h3>
                <span className="doctor-specialty">{doc.specialty}</span>
                <p className="doctor-desc">{doc.desc}</p>
                <div className="doctor-tags">
                  {doc.tags.map((tag, tIdx) => (
                    <span className="tag" key={tIdx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
