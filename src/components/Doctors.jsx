import { useState } from 'react';

const DOCTORS_DATA = [
  // 4 Featured Doctors matching user's reference screenshot
  {
    id: 'dr-guruprasad',
    name: 'Dr Guruprasad S.Ayachit',
    img: '/assets/dr-guruprasad.jpg',
    specialty: 'Vitreoretinal Services',
    departmentBadge: 'Vitreoretinal Specialist',
    categories: ['all', 'featured', 'retina'],
    desc: 'Senior Vitreoretinal Surgeon specializing in complex retinal detachments, diabetic eye disease, and sutureless vitrectomy.',
  },
  {
    id: 'dr-satyamurthy',
    name: 'Dr K.V.Satyamurthy',
    img: '/assets/dr-satyamurthy.jpg',
    specialty: 'HOD Cornea and Refractive Surgery',
    departmentBadge: 'Cornea & Refractive HOD',
    categories: ['all', 'featured', 'cornea', 'cataract'],
    desc: 'Head of Cornea department, pioneer in corneal transplantation (DALK, DSAEK, PKP), keratoconus C3R, and micro-phaco cataract surgery.',
  },
  {
    id: 'dr-krishnaprasad',
    name: 'Dr. R. Krishnaprasad',
    img: '/assets/dr-krishnaprasad.jpg',
    specialty: 'Pediatric Ophthalmology and Glaucoma Specialist',
    departmentBadge: 'Pediatric & Glaucoma',
    categories: ['all', 'featured', 'pediatric', 'glaucoma', 'cataract'],
    desc: 'Senior specialist in pediatric cataracts, childhood glaucoma management, strabismus (squint), and advanced anterior segment surgery.',
  },
  {
    id: 'dr-shrinivas-joshi',
    name: 'Dr. Srinivas Joshi',
    img: '/assets/dr-shrinivas-joshi.jpg',
    specialty: 'Vitreoretinal Specialist',
    departmentBadge: 'Director & Vitreoretinal',
    categories: ['all', 'featured', 'retina'],
    desc: 'Director and internationally acclaimed retinal surgeon managing complex vitreoretinal conditions, diabetic retinopathy, and macular surgeries.',
  },
  // Additional Board-Certified Super-Specialists from the institute
  {
    id: 'dr-deepti-joshi',
    name: 'Dr Deepti Joshi',
    img: '/assets/dr-deepti-joshi.png',
    specialty: 'Pediatric Ophthalmology & Squint Specialist',
    departmentBadge: 'Pediatric & Squint',
    categories: ['all', 'pediatric'],
    desc: 'Dedicated specialist in pediatric vision rehabilitation, squint correction, amblyopia therapy, and developmental vision care.',
  },
  {
    id: 'dr-vijayalaxmi-kori',
    name: 'Dr Vijayalaxmi Kori',
    img: '/assets/dr-vijayalaxmi-kori.png',
    specialty: 'Glaucoma & Anterior Segment Specialist (Gold Medalist)',
    departmentBadge: 'Glaucoma Gold Medalist',
    categories: ['all', 'glaucoma', 'cataract'],
    desc: 'University gold medalist specializing in early glaucoma laser interventions, complex cataract surgery, and drainage valve implants.',
  },
  {
    id: 'dr-aniket-shastri',
    name: 'Dr Aniket N Shastri',
    img: '/assets/dr-aniket-shastri.png',
    specialty: 'Cornea, Phaco & Refractive Surgery',
    departmentBadge: 'Cornea & Phaco Surgeon',
    categories: ['all', 'cornea', 'cataract'],
    desc: 'Consultant surgeon in sutureless phacoemulsification, customized Contoura LASIK, C3R for keratoconus, and IPCL implants.',
  },
  {
    id: 'dr-priyanka-rane',
    name: 'Dr Priyanka Rane',
    img: '/assets/dr-priyanka-rane.png',
    specialty: 'Glaucoma and Anterior Segment Surgeon',
    departmentBadge: 'Glaucoma Specialist',
    categories: ['all', 'glaucoma', 'cataract'],
    desc: 'Skilled surgeon providing advanced computerized glaucoma screening, medical trabeculoplasty, and anterior segment laser procedures.',
  },
  {
    id: 'dr-tanushree-hegde',
    name: 'Dr. Tanushree Hegde',
    img: '/assets/dr-tanushree-hegde.webp',
    specialty: 'Sr. Phaco & Glaucoma Surgeon, Medical Retina Consultant',
    departmentBadge: 'Phaco & Medical Retina',
    categories: ['all', 'cataract', 'glaucoma', 'retina'],
    desc: 'Senior phacoemulsification surgeon, medical retina specialist for diabetic eye care, and comprehensive glaucoma consultant.',
  },
  {
    id: 'dr-vishwanath-ankad',
    name: 'Dr Vishwanath Ankad',
    img: '/assets/dr-vishwanath-ankad.webp',
    specialty: 'Sr. Cornea, Phaco & Refractive Surgeon',
    departmentBadge: 'Cornea & Refractive',
    categories: ['all', 'cornea', 'cataract'],
    desc: 'Senior surgeon specialized in lamellar corneal surgeries, Contoura laser vision correction, and micro-incision cataract surgery.',
  },
  {
    id: 'dr-manohar-puttanna',
    name: 'Dr. Manohar Puttanna',
    img: '/assets/dr-manohar-puttanna.png',
    specialty: 'Anterior Segment & Cataract Surgeon',
    departmentBadge: 'Anterior Segment',
    categories: ['all', 'cataract'],
    desc: 'Experienced ophthalmic surgeon specializing in premium IOL implants, complex cataracts, and comprehensive eye care.',
  },
  {
    id: 'dr-shilpa-maled',
    name: 'Dr Shilpa Maled',
    img: '/assets/dr-shilpa-maled.png',
    specialty: 'Comprehensive Ophthalmology & Cataract Consultant',
    departmentBadge: 'Comprehensive Eye Care',
    categories: ['all', 'cataract'],
    desc: 'Consultant ophthalmologist recognized for compassionate patient care, routine diagnostics, and surgical eye treatments.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Doctors' },
  { id: 'featured', label: 'Featured 4 Specialists' },
  { id: 'retina', label: 'Vitreoretinal (Retina)' },
  { id: 'cornea', label: 'Cornea & LASIK' },
  { id: 'cataract', label: 'Cataract & Phaco' },
  { id: 'glaucoma', label: 'Glaucoma Care' },
  { id: 'pediatric', label: 'Pediatric & Squint' },
];

export default function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter doctors ensuring EVERY category has matches
  const filteredDoctors = DOCTORS_DATA.filter((doc) =>
    doc.categories.includes(selectedCategory)
  );

  const getDoctorCount = (catId) => {
    return DOCTORS_DATA.filter((doc) => doc.categories.includes(catId)).length;
  };

  const handleConsultDoctor = (e, doctorName) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const header = document.getElementById('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const targetTop =
        contactSection.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      setTimeout(() => {
        const selectEl = document.getElementById('doctor');
        if (selectEl) {
          const lastName = doctorName.split(' ').pop().toLowerCase();
          for (let i = 0; i < selectEl.options.length; i++) {
            if (selectEl.options[i].text.toLowerCase().includes(lastName)) {
              selectEl.selectedIndex = i;
              selectEl.dispatchEvent(new Event('change', { bubbles: true }));
              break;
            }
          }
        }
      }, 400);
    }
  };

  return (
    <section className="doctors-section" id="doctors">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Our Specialists</span>
          <h2 className="section-title">Meet Our Medical Team</h2>
          <p className="section-subtitle">
            Our board-certified ophthalmologists bring decades of specialized clinical training and surgical excellence from premier Indian and global ophthalmic institutions.
          </p>

          {/* Interactive Category Filter Bar */}
          <div className="doctor-filter-bar">
            {CATEGORIES.map((cat) => {
              const count = getDoctorCount(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label} <span className="filter-count">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="doctors-official-grid">
          {filteredDoctors.map((doc) => (
            <div className="doctor-official-card" key={doc.id}>
              <div className="doctor-card-photo-wrapper">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="doctor-official-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/assets/logo.png';
                    e.target.classList.add('fallback-img');
                  }}
                />
                <div className="doctor-card-badge">{doc.departmentBadge}</div>
              </div>
              <div className="doctor-official-body">
                <h3 className="doctor-official-name">{doc.name}</h3>
                <p className="doctor-official-specialty">{doc.specialty}</p>
                <button
                  type="button"
                  className="doctor-consult-btn"
                  onClick={(e) => handleConsultDoctor(e, doc.name)}
                >
                  Book Consultation &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
