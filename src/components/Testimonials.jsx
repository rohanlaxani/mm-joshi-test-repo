export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Patient Stories</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Thousands of families across Karnataka, Goa, and Maharashtra place their trust in our hands. Here are some of their verified experiences.
          </p>
        </div>
        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card reveal">
            <div className="quote-icon" aria-hidden="true">
              <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg" width="50" height="40">
                <path
                  d="M0 40V24C0 10.667 8 3.333 24 0l3 4C18.333 5.333 14.667 8 12 12c-1.333 2.667-2 5.333-2 8h10V40H0zm26 0V24C26 10.667 34 3.333 50 0l3 4C46.333 5.333 42.667 8 40 12c-1.333 2.667-2 5.333-2 8h10V40H26z"
                  fill="#1a4fa0"
                  opacity="0.12"
                />
              </svg>
            </div>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "I underwent IPCL refractive surgery under the expert guidelines of Dr. Aniket Shastri. Before the procedure I suffered from severe vision problems, but the counselling and clinical care were exceptional. My vision is now completely sharp and clear!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'linear-gradient(135deg, #1a4fa0, #0ea5e9)' }}>
                MP
              </div>
              <div>
                <div className="author-name">Mahesh P.</div>
                <div className="author-location">📍 Hubballi, Karnataka</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 (Featured) */}
          <div className="testimonial-card reveal featured-testimonial">
            <div className="quote-icon" aria-hidden="true">
              <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg" width="50" height="40">
                <path
                  d="M0 40V24C0 10.667 8 3.333 24 0l3 4C18.333 5.333 14.667 8 12 12c-1.333 2.667-2 5.333-2 8h10V40H0zm26 0V24C26 10.667 34 3.333 50 0l3 4C46.333 5.333 42.667 8 40 12c-1.333 2.667-2 5.333-2 8h10V40H26z"
                  fill="white"
                  opacity="0.25"
                />
              </svg>
            </div>
            <div className="stars stars-white">★★★★★</div>
            <p className="testimonial-text">
              "Everything about the experience has gone so well, from preliminary diagnostics to surgical recovery. Sincere gratitude to Dr. Shilpa Maled, counsellor Arif Khalander, and the entire nursing staff at MM Joshi Hospital. Truly world-class ophthalmic care right here in Hubli."
            </p>
            <div className="testimonial-author">
              <div
                className="author-avatar"
                style={{
                  background: 'rgba(255,255,255,0.25)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.5)',
                }}
              >
                SK
              </div>
              <div>
                <div className="author-name">Sunil K.</div>
                <div className="author-location">📍 Dharwad, Karnataka</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card reveal">
            <div className="quote-icon" aria-hidden="true">
              <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg" width="50" height="40">
                <path
                  d="M0 40V24C0 10.667 8 3.333 24 0l3 4C18.333 5.333 14.667 8 12 12c-1.333 2.667-2 5.333-2 8h10V40H0zm26 0V24C26 10.667 34 3.333 50 0l3 4C46.333 5.333 42.667 8 40 12c-1.333 2.667-2 5.333-2 8h10V40H26z"
                  fill="#1a4fa0"
                  opacity="0.12"
                />
              </svg>
            </div>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Dr. Aniket Shastri performed cataract surgery on my father when he had severe eye pain and clouded sight. Now he is completely pain-free and reading comfortably without strain. Thank you to the empathetic counsellors and doctors at MM Joshi Institute!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'linear-gradient(135deg, #7c3aed, #c026d3)' }}>
                BM
              </div>
              <div>
                <div className="author-name">Basavaraj M.</div>
                <div className="author-location">📍 Belagavi, Karnataka</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
