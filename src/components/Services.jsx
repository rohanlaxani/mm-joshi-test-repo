import { useState } from 'react';

const SPECIALTIES_DATA = [
  {
    id: 'cataract',
    title: 'Cataract Surgery',
    subtitle: 'Micro-Incision Phacoemulsification & Premium IOLs',
    tag: 'Highest Volume Super-Specialty',
    leadDoctor: 'Dr. K.V. Satyamurthy / Dr. Tanushree Hegde',
    symptoms: 'Cloudy or blurry vision, night glare, halos around lights, fading colors.',
    desc: 'Our state-of-the-art suture-less phacoemulsification procedure gently dissolves the cloudy natural lens and replaces it with advanced foldable intraocular lenses (Multifocal, Trifocal, or Toric) for high-definition near, intermediate, and distance clarity.',
    highlights: [
      'Blade-free micro-incision (1.8mm to 2.2mm)',
      '15-minute painless day-care procedure',
      'Premium Toric (astigmatism) & Multifocal IOL implants',
      'Empanelled with major cashless health insurances & TPAs',
    ],
    tech: 'Alcon Centurion Phaco & Zeiss Lumera Surgical Microscope',
    recovery: 'Same-day discharge · Normal vision in 24–48 hours',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    id: 'vitreo-retina',
    title: 'Vitreo-Retina Services',
    subtitle: 'Diabetic Retinopathy & Complex Vitreoretinal Care',
    tag: 'Advanced Retina Surgical Suites',
    leadDoctor: 'Dr. Srinivas Joshi / Dr. Guruprasad S. Ayachit',
    symptoms: 'Sudden vision loss, floaters, dark spots, flashes of light, distorted lines.',
    desc: 'Comprehensive diagnostic angiography, high-resolution Spectral Domain OCT, and microsurgical 25G/27G sutureless vitrectomy to treat diabetic retinopathy, retinal detachments, macular holes, and vitreous hemorrhages.',
    highlights: [
      'Constellation high-speed sutureless vitrectomy systems',
      'Targeted anti-VEGF intravitreal injection therapy',
      'Green/Yellow Pattern Scan laser photocoagulation',
      '24×7 casualty emergency trauma retinal management',
    ],
    tech: 'Constellation Vitrectomy & Zeiss Cirrus HD-OCT',
    recovery: 'Specialist inpatient and day-care microsurgery suites',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.25" />
        <path d="M12 9a3 3 0 0 1 3 3" />
      </svg>
    ),
  },
  {
    id: 'cornea',
    title: 'Cornea & Refractive Services',
    subtitle: 'Corneal Transplantation & Ocular Surface Center',
    tag: 'Backed by Shri Guru Mahipatiraj Eye Bank',
    leadDoctor: 'Dr. K.V. Satyamurthy / Dr. Aniket N. Shastri',
    symptoms: 'Severe eye pain, corneal ulcers, keratitis, keratoconus, dry eye syndrome.',
    desc: 'North Karnataka’s foremost corneal referral center specializing in full-thickness (PKP) and lamellar corneal transplants (DALK, DSAEK, DMEK), corneal collagen cross-linking (C3R) for keratoconus, and computerized topography.',
    highlights: [
      'Round-the-clock donor tissue from our own NABH Eye Bank',
      'C3R corneal cross-linking halting keratoconus progression',
      'Amniotic membrane grafting & stem cell ocular surface care',
      'Specialty therapeutic Scleral & Rose-K contact lens fitting',
    ],
    tech: 'Pentacam Corneal Tomography & Laminar OT Suites',
    recovery: 'Personalized post-transplant follow-up protocols',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3.5" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    id: 'pediatric',
    title: 'Paediatric Ophthalmology & Squint',
    subtitle: 'Child-Friendly Amblyopia & Strabismus Correction',
    tag: 'Specialized Children’s Eye Clinic',
    leadDoctor: 'Dr. R. Krishnaprasad / Dr. Deepti Joshi',
    symptoms: 'Misaligned eyes (squint), lazy eye, frequent eye rubbing, head tilting.',
    desc: 'Gentle, specialized ophthalmic care tailored for infants and children. We diagnose pediatric cataracts, refractive errors, amblyopia (lazy eye), and perform precision surgical realignments for strabismus (squint).',
    highlights: [
      'Child-friendly non-threatening examination rooms',
      'Computerized vision therapy & occlusion amblyopia protocols',
      'Precision microscopic strabismus muscle re-alignment',
      'Pediatric refractive glasses & binocular vision training',
    ],
    tech: 'Pediatric Synoptophore & Non-Contact Refraction',
    recovery: 'Gentle day-care discharge with reassuring pediatric nurses',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'glaucoma',
    title: 'Glaucoma Care & Diagnostics',
    subtitle: 'Silent Vision Thief Prevention & Laser Therapy',
    tag: 'Early Optic Nerve Preservation',
    leadDoctor: 'Dr. R. Krishnaprasad / Dr. Vijayalaxmi Kori',
    symptoms: 'Often zero early symptoms! Tunnel vision, severe eye ache, halos around lights.',
    desc: 'Glaucoma causes permanent optic nerve damage without early pain. We offer automated Humphrey visual field analysis, pachymetry, OCT-RNFL nerve scans, Selective Laser Trabeculoplasty (SLT), and trabeculectomy with valve implants.',
    highlights: [
      'Humphrey Visual Field (HVF) perimeter testing',
      'OCT Retinal Nerve Fiber Layer (RNFL) computerized tracking',
      'Non-invasive SLT & YAG peripheral iridotomy laser therapy',
      'Minimally invasive filtration surgeries (Trabeculectomy & Valves)',
    ],
    tech: 'Humphrey Field Analyzer & Zeiss OCT Perimetry',
    recovery: 'Lifelong IOP monitoring & vision preservation programs',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'lasik',
    title: 'LASIK & Clear Eye Surgery',
    subtitle: 'Blade-Free Laser Vision Correction',
    tag: 'Spectacle Independence in Minutes',
    leadDoctor: 'Dr. K.V. Satyamurthy / Dr. Aniket N. Shastri',
    symptoms: 'Desire to be free from spectacles or contact lenses for myopia, hyperopia, astigmatism.',
    desc: 'Experience life with unobstructed, high-definition vision. Our customized Contoura Vision and blade-free refractive laser reshaping corrects near-sightedness, far-sightedness, and astigmatism with micron-level accuracy.',
    highlights: [
      'Blade-free Femtosecond precision corneal flap creation',
      'Customized wave-front guided Contoura Vision profiles',
      'Quick 10-minute outpatient procedure for both eyes',
      'Rapid recovery — resume normal activities within 24 hours',
    ],
    tech: 'Custom Wavefront Laser & 3D Corneal Topography',
    recovery: 'Walk in with glasses, walk out seeing clearly',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('cataract');

  const selectedSpecialty =
    SPECIALTIES_DATA.find((s) => s.id === activeTab) || SPECIALTIES_DATA[0];

  const handleSelectSpecialtyBooking = (specialtyId) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const header = document.getElementById('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const targetTop =
        contactSection.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Automatically select this specialty in the appointment dropdown!
      setTimeout(() => {
        const selectEl = document.getElementById('specialty');
        if (selectEl) {
          selectEl.value = specialtyId;
          selectEl.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 400);
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-eyebrow">Comprehensive Eye Care</span>
          <h2 className="section-title">Ophthalmic Super-Specialties</h2>
          <p className="section-subtitle">
            Explore our specialized clinical departments. Each specialty combines fellowship-trained surgeons,
            advanced diagnostic lasers, and empathetic patient care.
          </p>
        </div>

        {/* Interactive Specialty Selector Pills */}
        <div className="specialty-tabs-bar reveal">
          {SPECIALTIES_DATA.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                type="button"
                className={`specialty-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="tab-icon-wrap" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="tab-title-text">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Interactive Spotlight Card */}
        <div className="specialty-spotlight-card reveal" key={selectedSpecialty.id}>
          {/* Left Column: Clinical Description & Procedures */}
          <div className="spotlight-content-col">
            <div className="spotlight-meta-row">
              <span className="spotlight-tag">{selectedSpecialty.tag}</span>
              <span className="spotlight-lead">
                <strong>Leading Surgeons:</strong> {selectedSpecialty.leadDoctor}
              </span>
            </div>

            <h3 className="spotlight-title">{selectedSpecialty.title}</h3>
            <h4 className="spotlight-subtitle">{selectedSpecialty.subtitle}</h4>

            <p className="spotlight-desc">{selectedSpecialty.desc}</p>

            <div className="spotlight-symptoms-box">
              <span className="symptoms-label">Common Symptoms &amp; Indications:</span>
              <p className="symptoms-text">{selectedSpecialty.symptoms}</p>
            </div>

            <div className="spotlight-highlights-list">
              <span className="highlights-header">Clinical Highlights &amp; Care Standards:</span>
              <div className="highlights-grid">
                {selectedSpecialty.highlights.map((point, idx) => (
                  <div className="highlight-item" key={idx}>
                    <span className="check-bullet">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="spotlight-actions-row">
              <button
                type="button"
                className="btn btn-amber"
                onClick={() => handleSelectSpecialtyBooking(selectedSpecialty.id)}
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
                Book Consultation for {selectedSpecialty.title}
              </button>
              <a href="#doctors" className="btn btn-outline-primary">
                View Specialty Doctors &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Visual Technology & Assurance Card */}
          <div className="spotlight-card-right">
            <div className="specialty-tech-badge-card">
              <div className="tech-badge-header">
                <div className="tech-icon-circle">{selectedSpecialty.icon}</div>
                <div>
                  <span className="tech-label">Diagnostic &amp; Laser Standard</span>
                  <h5 className="tech-name">{selectedSpecialty.tech}</h5>
                </div>
              </div>

              <div className="tech-perk-row">
                <div className="perk-icon">⏱</div>
                <div>
                  <strong>Recovery Timeline</strong>
                  <p>{selectedSpecialty.recovery}</p>
                </div>
              </div>

              <div className="tech-perk-row">
                <div className="perk-icon">🛡️</div>
                <div>
                  <strong>Quality Certified</strong>
                  <p>NABH Accredited Super-Specialty Protocol</p>
                </div>
              </div>

              <div className="tech-perk-row">
                <div className="perk-icon">💳</div>
                <div>
                  <strong>Insurance &amp; TPA</strong>
                  <p>Cashless hospitalization support available</p>
                </div>
              </div>

              <div className="emergency-call-strip">
                <span>Immediate Assistance?</span>
                <a href="tel:+918362228222" className="strip-phone">
                  📞 0836-2228222
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Specialty Quick Browse Grid at a glance */}
        <div className="specialties-quick-grid reveal">
          {SPECIALTIES_DATA.map((item) => {
            const isCurrent = item.id === activeTab;
            return (
              <div
                key={item.id}
                className={`specialty-mini-card ${isCurrent ? 'active-mini' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <div className="mini-icon-row">
                  <div className="mini-icon">{item.icon}</div>
                  <span className="mini-badge">{item.tag.split(' ')[0]} Care</span>
                </div>
                <h4 className="mini-title">{item.title}</h4>
                <p className="mini-desc">{item.subtitle}</p>
                <button
                  type="button"
                  className="mini-learn-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab(item.id);
                  }}
                >
                  {isCurrent ? '● Active Specialty' : 'Explore Treatment &rarr;'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
