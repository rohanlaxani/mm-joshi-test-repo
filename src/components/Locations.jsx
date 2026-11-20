export default function Locations() {
  return (
    <section className="locations-section" id="locations">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Find Us</span>
          <h2 className="section-title">Our Locations</h2>
          <p className="section-subtitle">
            Conveniently located across Karnataka to bring quality eye care closer to you.
          </p>
        </div>
        <div className="locations-grid">
          {/* Main Hospital */}
          <div className="location-card location-main reveal">
            <div className="location-badge">Main Hospital</div>
            <div className="location-icon" aria-hidden="true">🏥</div>
            <h3 className="location-name">M. M. Joshi Eye Institute</h3>
            <div className="location-details">
              <div className="location-detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Vidyanagar, Hubballi &ndash; 580031, Karnataka</span>
              </div>
              <div className="location-detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                <a href="tel:+918362261500" className="location-phone">
                  0836-2261500
                </a>
              </div>
              <div className="location-detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                <span>Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM</span>
              </div>
              <div className="location-detail emergency">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span className="emergency-text">Emergency: 24&#215;7 Available</span>
              </div>
            </div>
          </div>

          {/* Vision Centre */}
          <div className="location-card reveal">
            <div className="location-badge location-badge-secondary">Vision Centre</div>
            <div className="location-icon" aria-hidden="true">👁️</div>
            <h3 className="location-name">MM Joshi Vision Centre</h3>
            <div className="location-details">
              <div className="location-detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Deshpande Nagar, Hubballi, Karnataka</span>
              </div>
              <div className="location-detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                <a href="tel:+918362261501" className="location-phone">
                  0836-2261501
                </a>
              </div>
              <div className="location-detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                <span>Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM</span>
              </div>
              <div className="location-detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span>Consultations &amp; Minor Procedures</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="map-placeholder reveal">
          <div className="map-inner">
            <div className="map-pin" aria-hidden="true">📍</div>
            <p>M. M. Joshi Eye Institute, Vidyanagar, Hubballi</p>
            <a
              href="https://maps.google.com/?q=MM+Joshi+Eye+Institute+Hubballi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
