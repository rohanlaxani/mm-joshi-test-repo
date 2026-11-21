import { useState } from 'react';

const DOCTORS_DATA = [
  // 4 Primary Specialists from reference image
  {
    id: 'dr-guruprasad',
    name: 'Dr Guruprasad S.Ayachit',
    img: '/assets/dr-guruprasad.jpg',
    specialty: 'Vitreoretinal Services',
    departmentBadge: 'Retina & Uvea',
    categories: ['all', 'retina'],
  },
  {
    id: 'dr-satyamurthy',
    name: 'Dr K.V.Satyamurthy',
    img: '/assets/dr-satyamurthy.jpg',
    specialty: 'HOD Cornea & Refractive Surgery',
    departmentBadge: 'Cornea HOD',
    categories: ['all', 'cornea', 'cataract'],
  },
  {
    id: 'dr-krishnaprasad',
    name: 'Dr. R. Krishnaprasad',
    img: '/assets/dr-krishnaprasad.jpg',
    specialty: 'Pediatric Ophthalmology & Glaucoma',
    departmentBadge: 'Pediatric & Glaucoma',
    categories: ['all', 'pediatric', 'glaucoma', 'cataract'],
  },
  {
    id: 'dr-shrinivas-joshi',
    name: 'Dr. Srinivas Joshi',
    img: '/assets/dr-shrinivas-joshi.jpg',
    specialty: 'Vitreoretinal Specialist',
    departmentBadge: 'Director · Retina',
    categories: ['all', 'retina'],
  },
  // Additional Board-Certified Super-Specialists
  {
    id: 'dr-deepti-joshi',
    name: 'Dr Deepti Joshi',
    img: '/assets/dr-deepti-joshi.png',
    specialty: 'Pediatric Ophthalmology & Squint',
    departmentBadge: 'Pediatric Specialist',
    categories: ['all', 'pediatric'],
  },
  {
    id: 'dr-vijayalaxmi-kori',
    name: 'Dr Vijayalaxmi Kori',
    img: '/assets/dr-vijayalaxmi-kori.png',
    specialty: 'Glaucoma & Anterior Segment (Gold Medalist)',
    departmentBadge: 'Glaucoma Gold Medalist',
    categories: ['all', 'glaucoma', 'cataract'],
  },
  {
    id: 'dr-aniket-shastri',
    name: 'Dr Aniket N Shastri',
    img: '/assets/dr-aniket-shastri.png',
    specialty: 'Cornea, Phaco & Refractive Surgery',
    departmentBadge: 'Cornea & LASIK',
    categories: ['all', 'cornea', 'cataract'],
  },
  {
    id: 'dr-priyanka-rane',
    name: 'Dr Priyanka Rane',
    img: '/assets/dr-priyanka-rane.png',
    specialty: 'Glaucoma & Anterior Segment Surgeon',
    departmentBadge: 'Glaucoma Surgeon',
    categories: ['all', 'glaucoma', 'cataract'],
  },
  {
    id: 'dr-tanushree-hegde',
    name: 'Dr. Tanushree Hegde',
    img: '/assets/dr-tanushree-hegde.webp',
    specialty: 'Sr. Phaco & Glaucoma Surgeon, Retina',
    departmentBadge: 'Phaco & Retina',
    categories: ['all', 'cataract', 'glaucoma', 'retina'],
  },
  {
    id: 'dr-vishwanath-ankad',
    name: 'Dr Vishwanath Ankad',
    img: '/assets/dr-vishwanath-ankad.webp',
    specialty: 'Sr. Cornea, Phaco & Refractive Surgeon',
    departmentBadge: 'Cornea & Phaco',
    categories: ['all', 'cornea', 'cataract'],
  },
  {
    id: 'dr-manohar-puttanna',
    name: 'Dr. Manohar Puttanna',
    img: '/assets/dr-manohar-puttanna.png',
    specialty: 'Anterior Segment & Cataract Surgeon',
    departmentBadge: 'Cataract Specialist',
    categories: ['all', 'cataract'],
  },
  {
    id: 'dr-shilpa-maled',
    name: 'Dr Shilpa Maled',
    img: '/assets/dr-shilpa-maled.png',
    specialty: 'Comprehensive Eye Care Consultant',
    departmentBadge: 'General Ophthalmology',
    categories: ['all', 'cataract'],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Doctors' },
  { id: 'retina', label: 'Vitreoretinal (Retina)' },
  { id: 'cornea', label: 'Cornea & LASIK' },
  { id: 'cataract', label: 'Cataract & Phaco' },
  { id: 'glaucoma', label: 'Glaucoma Care' },
  { id: 'pediatric', label: 'Pediatric & Squint' },
];

export default function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
            Board-certified ophthalmologists and super-specialists delivering world-class clinical care and surgical excellence since 1967.
          </p>

          {/* Compact, Sleek Filter Pills */}
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

        {/* Refined, Shorter Doctor Cards Grid */}
        <div className="doctors-compact-grid">
          {filteredDoctors.map((doc) => (
            <div className="doctor-compact-card" key={doc.id}>
              <div className="doctor-compact-img-wrap">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="doctor-compact-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/assets/logo.png';
                    e.target.classList.add('fallback-img');
                  }}
                />
                <span className="doctor-compact-badge">{doc.departmentBadge}</span>
              </div>
              <div className="doctor-compact-body">
                <h3 className="doctor-compact-name">{doc.name}</h3>
                <p className="doctor-compact-specialty">{doc.specialty}</p>
                <button
                  type="button"
                  className="doctor-compact-btn"
                  onClick={(e) => handleConsultDoctor(e, doc.name)}
                >
                  Consult Doctor &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
