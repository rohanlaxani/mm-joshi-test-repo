import { useState } from 'react';

const LOCATIONS = [
  {
    id: 'eyesiri',
    name: 'EyeSiri - M. M. Joshi Eye Institute',
    shortName: 'EyeSiri (Flagship)',
    city: 'Hubballi',
    badge: 'Flagship Campus',
    isMain: true,
    address:
      'Hosur – Unkal Bypass Rd, next to Shakuntala Memorial Hospital, Kallur Layout, Hubballi, Karnataka 580021',
    phone: '0836-2229222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: '24×7 Emergency Eye Trauma & Casualty Active',
    coordinates: '15.3582° N, 75.1290° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=EyeSiri+-+M.+M.+Joshi+Eye+Institute,+Hosur+-+Unkal+Bypass+Rd,+Hubballi,+Karnataka+580021&t=&z=16&ie=UTF8&iwloc=A&output=embed',
    directMapUrl:
      'https://maps.google.com/?q=EyeSiri+M+M+Joshi+Eye+Institute+Hosur+Unkal+Bypass+Rd+Hubballi',
    features: [
      'NABH Accredited Ophthalmic Suites',
      'Advanced LASIK & Cornea Center',
      'Vitreo-Retina Care & Laser Suite',
      '24×7 Emergency Trauma & Pharmacy',
    ],
  },
  {
    id: 'hubli',
    name: 'M. M. Joshi Eye Hospital - Hubli',
    shortName: 'Hubballi (Gokul Rd)',
    city: 'Hubballi',
    badge: 'Primary Hospital & Eye Bank',
    isMain: true,
    address: 'Gokul Road, Hosur, Hubballi – 580021, Karnataka',
    phone: '0836-2228222',
    altPhone: '0836-2228431',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM (24×7 Emergency)',
    emergency: '24×7 Casualty & Shri Guru Mahipatiraj Eye Bank',
    coordinates: '15.3486° N, 75.1228° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=15.348633,75.122854+(Dr.+M.+M.+Joshi+Eye+Hospital+Gokul+Road)&t=&z=16&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Gokul+Road+Hubli',
    features: [
      'NABH Accredited Hospital',
      'Shri Guru Mahipatiraj Eye Bank',
      'Phaco Cataract & Glaucoma Wings',
      'In-House Optical & Pharmacy',
    ],
  },
  {
    id: 'dharwad',
    name: 'M. M. Joshi Eye Hospital - Dharwad',
    shortName: 'Dharwad (K.C. Park)',
    city: 'Dharwad',
    badge: 'Day Care Surgical Center',
    isMain: false,
    address: 'Near K.C. Park, P.B. Road, Dharwad – 580008, Karnataka',
    phone: '0836-2792222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: 'Day Care Cataract & Laser Surgeries Active',
    coordinates: '15.4589° N, 75.0078° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=15.4589,75.0078+(M.+M.+Joshi+Eye+Hospital+Dharwad)&t=&z=16&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Dharwad',
    features: [
      'Specialist OPD Consultations',
      'Day Care Microsurgery Suite',
      'Glaucoma & Pediatric Clinics',
      'Comprehensive Optical Store',
    ],
  },
  {
    id: 'navanagar',
    name: 'M. M. Joshi Eye Hospital - Navanagar',
    shortName: 'Navanagar (Twin-City)',
    city: 'Navanagar',
    badge: 'Twin-City Center',
    isMain: false,
    address: 'Navanagar, Hubli-Dharwad Twin City Corridor, Karnataka 580025',
    phone: '0836-2228222',
    altPhone: '0836-2229222',
    timing: 'Mon – Sat: 9:30 AM – 5:30 PM',
    emergency: 'OPD Eye Screening & Specialist Referrals',
    coordinates: '15.4050° N, 75.0750° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=15.4050,75.0750+(M.+M.+Joshi+Eye+Hospital+Navanagar)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Navanagar+Hubli',
    features: [
      'General Eye Consultations',
      'Computerized Vision Screening',
      'Cataract Diagnostic Evaluations',
      'Optical Dispensing Unit',
    ],
  },
  {
    id: 'bagalkot',
    name: 'M. M. Joshi Eye Hospital - Bagalkot',
    shortName: 'Bagalkot',
    city: 'Bagalkot',
    badge: 'Regional Center',
    isMain: false,
    address: 'Station Road / Sector Area, Bagalkot – 587101, Karnataka',
    phone: '08354-220222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: 'Regional Eye Care & Surgical Referrals',
    coordinates: '16.1815° N, 75.6958° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=16.1815,75.6958+(M.+M.+Joshi+Eye+Hospital+Bagalkot)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Bagalkot',
    features: [
      'Senior Specialist Consultations',
      'Phacoemulsification Cataract Center',
      'Diabetic Retinopathy Screening',
      'Spectacle & Contact Lens Clinic',
    ],
  },
  {
    id: 'koppal',
    name: 'M. M. Joshi Eye Hospital - Koppal',
    shortName: 'Koppal',
    city: 'Koppal',
    badge: 'Regional Center',
    isMain: false,
    address: 'Near Central Bus Stand, Koppal – 583231, Karnataka',
    phone: '08539-221222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 5:30 PM',
    emergency: 'Outpatient Clinic & Emergency Triage',
    coordinates: '15.3522° N, 76.1558° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=15.3522,76.1558+(M.+M.+Joshi+Eye+Hospital+Koppal)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Koppal',
    features: [
      'Routine & Comprehensive Eye Checks',
      'Cataract & Glaucoma Evaluations',
      'Pediatric Vision Screening',
      'Prescription Eyewear Counter',
    ],
  },
  {
    id: 'sankeshwar',
    name: 'M. M. Joshi Eye Hospital - Sankeshwar',
    shortName: 'Sankeshwar (Belagavi)',
    city: 'Sankeshwar',
    badge: 'Regional Branch',
    isMain: false,
    address: 'Old P.B. Road, Sankeshwar, Belagavi District – 591313, Karnataka',
    phone: '08333-273222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 5:30 PM',
    emergency: 'Emergency Eye Care & Surgery Referrals',
    coordinates: '16.2625° N, 74.4842° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=16.2625,74.4842+(M.+M.+Joshi+Eye+Hospital+Sankeshwar)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Sankeshwar',
    features: [
      'Specialist Outpatient Eye Clinic',
      'Micro-Incision Cataract Consultations',
      'Dry Eye & Allergy Treatment',
      'Digital Refraction Services',
    ],
  },
  {
    id: 'jamakhandi',
    name: 'M. M. Joshi Eye Hospital - Jamakhandi',
    shortName: 'Jamakhandi',
    city: 'Jamakhandi',
    badge: 'Diagnostic Center',
    isMain: false,
    address: 'Girigowda Layout, Jamakhandi, Bagalkot District – 587301, Karnataka',
    phone: '08353-222222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:30 AM – 5:30 PM',
    emergency: 'Community Eye Care & OPD Consultations',
    coordinates: '16.5050° N, 75.2950° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=16.5050,75.2950+(M.+M.+Joshi+Eye+Hospital+Jamakhandi)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Jamakhandi',
    features: [
      'Comprehensive Vision Checkup',
      'Cataract Diagnosis & Surgical Booking',
      'Corneal Health Assessment',
      'Full Optical Dispensing',
    ],
  },
  {
    id: 'raichur',
    name: 'M. M. Joshi Eye Hospital - Raichur',
    shortName: 'Raichur',
    city: 'Raichur',
    badge: 'Kalyana Karnataka Center',
    isMain: false,
    address: 'Station Road, Near Gandhi Chowk, Raichur – 584101, Karnataka',
    phone: '08532-225222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: 'Regional Specialist OPD & Eye Emergencies',
    coordinates: '16.2076° N, 77.3463° E',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=16.2076,77.3463+(M.+M.+Joshi+Eye+Hospital+Raichur)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Raichur',
    features: [
      'Retina & Diabetic Eye Care',
      'Phaco Cataract Surgery Consultations',
      'Glaucoma Management',
      'Pharmacy & Optical Center',
    ],
  },
];

export default function Locations() {
  const [activeBranchId, setActiveBranchId] = useState('eyesiri');
  const [copied, setCopied] = useState(false);

  const activeBranch = LOCATIONS.find((b) => b.id === activeBranchId) || LOCATIONS[0];

  const handleCopyAddress = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSelectBranch = (branchId) => {
    setActiveBranchId(branchId);
    const mapContainer = document.getElementById('interactive-map-focus');
    if (mapContainer) {
      const header = document.getElementById('header');
      const headerOffset = header ? header.offsetHeight : 80;
      const targetTop =
        mapContainer.getBoundingClientRect().top + window.scrollY - headerOffset - 20;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="locations-section" id="locations">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Hospital Network</span>
          <h2 className="section-title">Our Locations Across Karnataka</h2>
          <p className="section-subtitle">
            M. M. Joshi Eye Hospital offers convenient access with 8+ branches located across key
            areas, ensuring you receive quality, compassionate eye care close to home.
          </p>
        </div>

        {/* Modern Interactive Branch Selector Strip */}
        <div className="location-tabs-modern-strip">
          <div className="location-pills-scroll">
            {LOCATIONS.map((loc) => {
              const isActive = activeBranchId === loc.id;
              return (
                <button
                  key={loc.id}
                  type="button"
                  className={`location-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveBranchId(loc.id)}
                >
                  <span className="pill-dot"></span>
                  <span className="pill-name">{loc.shortName}</span>
                  <span className="pill-badge">{loc.badge}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Pinned Map & Details Display */}
        <div className="locations-wrapper-modern" id="interactive-map-focus">
          {/* Active Branch Info Card */}
          <div className="branch-info-card">
            <div className="branch-header">
              <span className={`branch-badge ${activeBranch.isMain ? 'badge-primary' : 'badge-secondary'}`}>
                {activeBranch.badge}
              </span>
              <span className="live-status-pill">
                <span className="pulse-dot"></span> Open Today · {activeBranch.timing.split('(')[0]}
              </span>
            </div>

            <h3 className="branch-name">{activeBranch.name}</h3>

            <div className="branch-details-list">
              <div className="branch-detail-item">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <strong>Official Address</strong>
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
                  <strong>Appointments &amp; Helpdesk</strong>
                  <div className="branch-phones">
                    <a
                      href={`tel:${activeBranch.phone.replace(/[^0-9]/g, '')}`}
                      className="phone-link-active"
                    >
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
                  <strong>Consultation Hours</strong>
                  <p>{activeBranch.timing}</p>
                </div>
              </div>

              <div className="branch-detail-item emergency-highlight">
                <div className="detail-icon">🚨</div>
                <div className="detail-content">
                  <strong>Emergency Eye Care</strong>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Get Live Directions
              </a>
              <a
                href={`tel:${activeBranch.phone.replace(/[^0-9]/g, '')}`}
                className="btn btn-amber"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call {activeBranch.phone}
              </a>
            </div>
          </div>

          {/* Interactive Modern Map Frame with Pinned Location Indicator */}
          <div className="interactive-map-frame">
            {/* Top Telemetry / Status Bar */}
            <div className="map-telemetry-bar">
              <div className="telemetry-pin-status">
                <span className="telemetry-live-dot"></span>
                <span className="telemetry-text">
                  PINNED LOCATION · <strong>{activeBranch.name}</strong>
                </span>
              </div>
              <span className="telemetry-coords">{activeBranch.coordinates}</span>
            </div>

            {/* Embedded Live Google Map with dropped pin */}
            <iframe
              key={activeBranch.id}
              title={`Pinned location map for ${activeBranch.name}`}
              src={activeBranch.mapEmbedUrl}
              className="map-iframe"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* On-Map Animated Pinned Beacon Marker */}
            <div className="map-pinned-marker-anchor" aria-hidden="true">
              <div className="pin-pulse-wave ring-1"></div>
              <div className="pin-pulse-wave ring-2"></div>
              <div className="pin-pulse-wave ring-3"></div>
              <div className="pin-icon-wrap">
                <svg
                  className="pin-svg"
                  viewBox="0 0 384 512"
                  width="36"
                  height="48"
                  fill="#b82065"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
              </div>
            </div>

            {/* Floating Glassmorphic HUD Card */}
            <div className="map-glass-hud">
              <div className="hud-info">
                <div className="hud-badge-row">
                  <span className="hud-pin-icon">📍</span>
                  <span className="hud-title">{activeBranch.name}</span>
                </div>
                <span className="hud-sub">{activeBranch.address}</span>
              </div>
              <a
                href={activeBranch.directMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hud-action-btn"
                title="Open in Google Maps App"
              >
                <span>Navigate</span> ↗
              </a>
            </div>
          </div>
        </div>

        {/* All 8+ Branches Network Grid */}
        <div className="all-branches-network-section">
          <div className="network-header">
            <h3 className="network-title">All 8+ Eye Care Centers at a Glance</h3>
            <p className="network-subtitle">
              Click any location to pin it on the interactive map above or call directly
            </p>
          </div>

          <div className="network-branches-grid">
            {LOCATIONS.map((branch) => {
              const isCurrent = activeBranchId === branch.id;
              return (
                <div
                  key={branch.id}
                  className={`network-branch-card ${isCurrent ? 'current-active' : ''}`}
                >
                  <div className="card-top-line">
                    <span className="network-card-city">📍 {branch.city}</span>
                    <span className="network-card-badge">{branch.badge}</span>
                  </div>
                  <h4 className="network-card-name">{branch.name}</h4>
                  <p className="network-card-address">{branch.address}</p>
                  <div className="network-card-phone">
                    <a href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`}>
                      📞 {branch.phone}
                    </a>
                  </div>
                  <div className="network-card-actions">
                    <button
                      type="button"
                      className="network-view-pin-btn"
                      onClick={() => handleSelectBranch(branch.id)}
                    >
                      {isCurrent ? '● Pinned on Map' : 'Pin on Map ↗'}
                    </button>
                    <a
                      href={branch.directMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="network-directions-link"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
