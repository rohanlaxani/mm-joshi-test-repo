import { useState } from 'react';

const DOCTORS_DATA = [
  {
    id: 'dr-guruprasad',
    name: 'Dr Guruprasad S.Ayachit',
    img: '/assets/dr-guruprasad.jpg',
    specialty: 'Vitreoretinal Services',
    department: 'Retina',
  },
  {
    id: 'dr-satyamurthy',
    name: 'Dr K.V.Satyamurthy',
    img: '/assets/dr-satyamurthy.jpg',
    specialty: 'HOD Cornea and Refractive Surgery',
    department: 'Cornea',
  },
  {
    id: 'dr-krishnaprasad',
    name: 'Dr. R. Krishnaprasad',
    img: '/assets/dr-krishnaprasad.jpg',
    specialty: 'Pediatric Ophthalmology and Glaucoma Specialist',
    department: 'Pediatric',
  },
  {
    id: 'dr-shrinivas-joshi',
    name: 'Dr. Srinivas Joshi',
    img: '/assets/dr-shrinivas-joshi.jpg',
    specialty: 'Vitreoretinal Specialist',
    department: 'Retina',
  },
  {
    id: 'dr-deepti-joshi',
    name: 'Dr Deepti Joshi',
    img: '/assets/dr-deepti-joshi.png',
    specialty: 'Pediatric Ophthalmology & Squint Specialist',
    department: 'Pediatric',
  },
  {
    id: 'dr-vijayalaxmi-kori',
    name: 'Dr Vijayalaxmi Kori',
    img: '/assets/dr-vijayalaxmi-kori.png',
    specialty: 'Glaucoma & Anterior Segment Specialist (Gold Medalist)',
    department: 'Glaucoma',
  },
  {
    id: 'dr-aniket-shastri',
    name: 'Dr Aniket N Shastri',
    img: '/assets/dr-aniket-shastri.png',
    specialty: 'Cornea, Phaco & Refractive Surgery',
    department: 'Cornea',
  },
  {
    id: 'dr-priyanka-rane',
    name: 'Dr Priyanka Rane',
    img: '/assets/dr-priyanka-rane.png',
    specialty: 'Glaucoma and Anterior Segment Surgeon',
    department: 'Glaucoma',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Doctors' },
  { id: 'leadership', label: 'Featured Specialists' },
  { id: 'Retina', label: 'Vitreoretinal' },
  { id: 'Cornea', label: 'Cornea & LASIK' },
  { id: 'Pediatric', label: 'Pediatric & Squint' },
  { id: 'Glaucoma', label: 'Glaucoma' },
];

export default function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDoctors =
    selectedCategory === 'all'
      ? DOCTORS_DATA
      : selectedCategory === 'leadership'
      ? DOCTORS_DATA.slice(0, 4)
      : DOCTORS_DATA.filter((doc) => doc.department === selectedCategory);

  const handleConsultDoctor = (e, doctorName) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const header = document.getElementById('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const targetTop = contactSection.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Pre-select doctor in form if select exists
      setTimeout(() => {
        const selectEl = document.getElementById('doctor');
        if (selectEl) {
          for (let i = 0; i < selectEl.options.length; i++) {
            if (selectEl.options[i].text.toLowerCase().includes(doctorName.toLowerCase().split(' ')[1] || '')) {
              selectEl.selectedIndex = i;
              selectEl.dispatchEvent(new Event('change', { bubbles: true }));
              break;
            }
          }
        }
      }, 500);
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
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Cards Grid — matching the user's reference design */}
        <div className="doctors-official-grid">
          {filteredDoctors.map((doc) => (
            <div className="doctor-official-card reveal" key={doc.id}>
              <div className="doctor-card-photo-wrapper">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="doctor-official-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/assets/logo.png';
                    e.target.className += ' fallback-img';
                  }}
                />
                <div className="doctor-card-badge">{doc.department}</div>
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
