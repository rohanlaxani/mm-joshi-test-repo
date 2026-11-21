import { useState } from 'react';

const LOCATIONS = [
  {
    id: 'hubballi',
    name: 'M. M. Joshi Eye Hospital (Main Campus)',
    tagline: 'Padma Nayanalaya · Primary Super-Specialty Hospital',
    badge: 'Main Hospital',
    isMain: true,
    address: 'Gokul Road, Hosur, Hubballi – 580021, Karnataka',
    phone: '0836-2228222',
    altPhone: '0836-2228431',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: '24×7 Emergency Eye Trauma & Casualty Active',
    coordinates: '15.3524° N, 75.1298° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Dr.+M.M.+Joshi+Eye+Hospital+Gokul+Road+Hubballi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Gokul+Road+Hubli',
    features: [
      'NABH Accredited Surgical Suites',
      '24×7 Emergency Trauma Center',
      'Shri Guru Mahipatiraj Eye Bank',
      'In-House Optical & Pharmacy',
      'Ample Patient Parking Space',
    ],
  },
  {
    id: 'dharwad',
    name: 'M. M. Joshi Eye Institute (Dharwad Branch)',
    tagline: 'Comprehensive Eye Clinic & Day Care Surgical Center',
    badge: 'Super-Specialty Branch',
    isMain: false,
    address: 'Near K.C. Park, P.B. Road, Dharwad – 580008, Karnataka',
    phone: '0836-2792222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: 'Day Care Surgeries & Emergency Referrals Available',
    coordinates: '15.4589° N, 75.0078° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=MM+Joshi+Eye+Hospital+Dharwad&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Dharwad',
    features: [
      'Specialist OPD Consultations',
      'Advanced Diagnostic Laser Suite',
      'Day Care Microsurgery Theater',
      'Customized Optical Center',
      'Wheelchair Accessible Campus',
    ],
  },
];

export default function Locations() {
  const [activeBranchId, setActiveBranchId] = useState('hubballi');
  const [copied, setCopied] = useState(false);

  const activeBranch = LOCATIONS.find((b) => b.id === activeBranchId) || LOCATIONS[0];

  const handleCopyAddress = (text) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="locations-section" id="locations">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Find Us</span>
          <h2 className="section-title">Our Locations &amp; Reach</h2>
          <p className="section-subtitle">
            Strategically located in Hubballi and Dharwad to deliver compassionate, world-class eye care throughout North Karnataka, Goa, and neighbouring regions.
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="location-tabs-container reveal">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              type="button"
              className={`location-tab-btn ${activeBranchId === loc.id ? 'active' : ''}`}
              onClick={() => setActiveBranchId(loc.id)}
            >
              <span className="tab-pin-icon">📍</span>
              <div className="tab-text">
                <span className="tab-title">{loc.name}</span>
                <span className="tab-badge">{loc.badge}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="locations-wrapper-modern reveal">
          {/* Active Branch Info Card */}
          <div className="branch-info-card">
            <div className="branch-header">
              <span className={`branch-badge ${activeBranch.isMain ? 'badge-primary' : 'badge-secondary'}`}>
                {activeBranch.badge}
              </span>
              <span className="live-status-pill">
                <span className="pulse-dot"></span> Open Today · {activeBranch.timing.split(':')[0]}
              </span>
            </div>

            <h3 className="branch-name">{activeBranch.name}</h3>
            <p className="branch-tagline">{activeBranch.tagline}</p>

            <div className="branch-details-list">
              <div className="branch-detail-item">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <strong>Address</strong>
                  <p>{activeBranch.address}</p>
                  <button
                    type="button"
                    className="copy-address-btn"
                    onClick={() => handleCopyAddress(activeBranch.address)}
                  >
                    {copied ? '✓ Address Copied!' : 'Copy Full Address'}
                  </button>
                </div>
              </div>

              <div className="branch-detail-item">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <strong>Direct Helpdesk &amp; Appointments</strong>
                  <div className="branch-phones">
                    <a href={`tel:${activeBranch.phone.replace(/[^0-9]/g, '')}`} className="phone-link-active">
                      {activeBranch.phone}
                    </a>
                    {activeBranch.altPhone && (
                      <span className="phone-separator">/ {activeBranch.altPhone}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="branch-detail-item">
                <div className="detail-icon">🕒</div>
                <div className="detail-content">
                  <strong>Consultation Timings</strong>
                  <p>{activeBranch.timing}</p>
                </div>
              </div>

              <div className="branch-detail-item emergency-highlight">
                <div className="detail-icon">🚨</div>
                <div className="detail-content">
                  <strong>Emergency Support</strong>
                  <p className="emergency-text">{activeBranch.emergency}</p>
                </div>
              </div>
            </div>

            <div className="branch-facilities-strip">
              <span className="facilities-label">Key Facilities:</span>
              <div className="facility-chips">
                {activeBranch.features.map((feat, i) => (
                  <span key={i} className="facility-chip">
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="branch-actions-row">
              <a
                href={activeBranch.directMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Get Live Directions
              </a>
              <a
                href={`tel:${activeBranch.phone.replace(/[^0-9]/g, '')}`}
                className="btn btn-amber"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call Branch
              </a>
            </div>
          </div>

          {/* Interactive Animated Map Display */}
          <div className="interactive-map-frame">
            <div className="map-radar-badge">
              <div className="radar-circle-outer"></div>
              <div className="radar-circle-inner"></div>
              <div className="radar-core"></div>
              <span className="radar-text">GPS Satellite Link Active · {activeBranch.coordinates}</span>
            </div>

            {/* Embedded Live Google Map */}
            <iframe
              title={`Map view for ${activeBranch.name}`}
              src={activeBranch.mapEmbedUrl}
              className="map-iframe"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Glassmorphic HUD overlay */}
            <div className="map-glass-hud">
              <div className="hud-info">
                <span className="hud-title">📍 {activeBranch.name}</span>
                <span className="hud-sub">{activeBranch.address}</span>
              </div>
              <a
                href={activeBranch.directMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hud-action-btn"
                title="Open in Google Maps App"
              >
                Open Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
