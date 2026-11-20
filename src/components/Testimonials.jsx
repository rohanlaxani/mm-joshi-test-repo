export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Patient Stories</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Thousands of patients trust us with their most precious sense. Here are some of their stories.
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
              "The cataract surgery changed my life completely. The doctors were professional and caring throughout my treatment journey. I can see clearly for the first time in years!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'linear-gradient(135deg, #1a4fa0, #0ea5e9)' }}>
                PS
              </div>
              <div>
                <div className="author-name">Priya S.</div>
                <div className="author-location">📍 Hubballi</div>
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
              "Excellent facility with modern technology. My retinal treatment was successful and the staff made me comfortable at every step. Truly world-class care right here in Karnataka."
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
                RK
              </div>
              <div>
                <div className="author-name">Ramesh K.</div>
                <div className="author-location">📍 Dharwad</div>
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
              "I travelled from Belagavi because of MM Joshi's reputation. Worth every bit — world-class eye care close to home. The specialists are outstanding and truly dedicated."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'linear-gradient(135deg, #7c3aed, #c026d3)' }}>
                SM
              </div>
              <div>
                <div className="author-name">Sunita M.</div>
                <div className="author-location">📍 Belagavi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
