function StarRating({ white }) {
  return (
    <div className={`star-rating-row ${white ? 'stars-white' : ''}`} aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
          className="star-icon"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

const TESTIMONIALS_DATA = [
  {
    id: 1,
    featured: false,
    text: 'I underwent IPCL refractive surgery under the expert care of Dr. Aniket Shastri. Before the procedure I suffered from severe vision problems, but the counselling and clinical care were exceptional. My vision is now completely sharp and clear!',
    initials: 'MP',
    avatarBg: 'linear-gradient(135deg, #1a4fa0, #0ea5e9)',
    name: 'Mahesh P.',
    location: 'Hubballi, Karnataka',
  },
  {
    id: 2,
    featured: true,
    text: 'Everything about the experience has gone so well, from preliminary diagnostics to surgical recovery. Sincere gratitude to Dr. Shilpa Maled, counsellor Arif Khalander, and the entire nursing staff at MM Joshi Hospital. Truly world-class ophthalmic care right here in Hubli.',
    initials: 'SK',
    avatarBg: 'rgba(255,255,255,0.25)',
    name: 'Sunil K.',
    location: 'Dharwad, Karnataka',
  },
  {
    id: 3,
    featured: false,
    text: 'Dr. Aniket Shastri performed cataract surgery on my father when he had severe eye pain and clouded sight. Now he is completely pain-free and reading comfortably without strain. Thank you to the empathetic counsellors and doctors at MM Joshi Institute!',
    initials: 'BM',
    avatarBg: 'linear-gradient(135deg, #7c3aed, #c026d3)',
    name: 'Basavaraj M.',
    location: 'Belagavi, Karnataka',
  },
  {
    id: 4,
    featured: true,
    text: 'Dr. Srinivas Joshi treated my mother’s retinal detachment with extraordinary precision. His reassuring guidance and the advanced vitreoretinal laser theater gave us confidence throughout the recovery.',
    initials: 'PP',
    avatarBg: 'rgba(255,255,255,0.25)',
    name: 'Pooja Patil',
    location: 'Hubballi, Karnataka',
  },
  {
    id: 5,
    featured: false,
    text: 'Glaucoma screening and visual field tests under Dr. Vijayalaxmi Kori preserved my peripheral sight. The hospital team is thoroughly professional, attentive, and kind.',
    initials: 'RK',
    avatarBg: 'linear-gradient(135deg, #059669, #10b981)',
    name: 'Ramesh Kulkarni',
    location: 'Bagalkot, Karnataka',
  },
  {
    id: 6,
    featured: false,
    text: 'My 7-year-old child had a squint that affected his school confidence. Dr. Deepti Joshi treated him with immense patience and gentleness. His vision alignment is now completely normal!',
    initials: 'AD',
    avatarBg: 'linear-gradient(135deg, #d97706, #f59e0b)',
    name: 'Anita Deshmukh',
    location: 'Dharwad, Karnataka',
  },
];

export default function Testimonials() {
  // Duplicate for smooth seamless infinite loop
  const animatedList = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Patient Stories</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Thousands of families across Karnataka, Goa, and Maharashtra place their trust in our hands.
            Here are some of their verified experiences.
          </p>
        </div>
      </div>

      {/* Smooth Continuous Animated Stream with EXACT Original Card Styling */}
      <div className="testimonials-animated-wrapper" aria-label="Continuously changing patient reviews">
        <div className="testimonials-animated-track">
          {animatedList.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={`testimonial-card ${card.featured ? 'featured-testimonial' : ''}`}
            >
              <div className="quote-icon" aria-hidden="true">
                <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg" width="40" height="32">
                  <path
                    d="M0 40V24C0 10.667 8 3.333 24 0l3 4C18.333 5.333 14.667 8 12 12c-1.333 2.667-2 5.333-2 8h10V40H0zm26 0V24C26 10.667 34 3.333 50 0l3 4C46.333 5.333 42.667 8 40 12c-1.333 2.667-2 5.333-2 8h10V40H26z"
                    fill={card.featured ? 'white' : '#1a4fa0'}
                    opacity={card.featured ? 0.25 : 0.14}
                  />
                </svg>
              </div>

              <StarRating white={card.featured} />

              <p className="testimonial-text">"{card.text}"</p>

              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{
                    background: card.avatarBg,
                    border: card.featured ? '2px solid rgba(255,255,255,0.5)' : 'none',
                    color: 'white',
                  }}
                >
                  {card.initials}
                </div>
                <div>
                  <div className="author-name">{card.name}</div>
                  <div className="author-location">📍 {card.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container testimonials-hint-row">
        <span className="testimonials-hint-badge">
          <span>● Continuously scrolling verified reviews — Hover to pause</span>
        </span>
      </div>
    </section>
  );
}
