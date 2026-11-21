import { useState } from 'react';

const LOCATIONS_DATA = [
  {
    id: 'eyesiri',
    name: 'EyeSiri - M. M. Joshi Eye Institute',
    region: 'hubli-dharwad',
    category: 'Flagship Campus',
    badge: 'Main Hospital',
    city: 'Hubballi',
    address: 'Hosur – Unkal Bypass Rd, next to Shakuntala Memorial Hospital, Kallur Layout, Hubballi, Karnataka 580021',
    phone: '0836-2229222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: '24×7 Emergency Trauma & Casualty Active',
    mapUrl: 'https://maps.google.com/maps?q=EyeSiri+-+M.+M.+Joshi+Eye+Institute,+Hosur+-+Unkal+Bypass+Rd,+Hubballi,+Karnataka+580021&t=&z=16&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=EyeSiri+M+M+Joshi+Eye+Institute+Hubballi',
  },
  {
    id: 'hubli',
    name: 'M. M. Joshi Eye Hospital - Hubli',
    region: 'hubli-dharwad',
    category: 'Super-Specialty Hospital',
    badge: 'Primary Campus',
    city: 'Hubballi',
    address: 'Gokul Road, Hosur, Hubballi – 580021, Karnataka',
    phone: '0836-2228222',
    altPhone: '0836-2228431',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: '24×7 Casualty & Shri Guru Mahipatiraj Eye Bank',
    mapUrl: 'https://maps.google.com/maps?q=15.348633,75.122854+(Dr.+M.+M.+Joshi+Eye+Hospital+Gokul+Road)&t=&z=16&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Gokul+Road+Hubli',
  },
  {
    id: 'dharwad',
    name: 'M. M. Joshi Eye Hospital - Dharwad',
    region: 'hubli-dharwad',
    category: 'Day Care Surgical Suite',
    badge: 'Dharwad Branch',
    city: 'Dharwad',
    address: 'Near K.C. Park, P.B. Road, Dharwad – 580008, Karnataka',
    phone: '0836-2792222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: 'Day Care Surgeries & Urgent Consultations',
    mapUrl: 'https://maps.google.com/maps?q=15.4589,75.0078+(M.+M.+Joshi+Eye+Hospital+Dharwad)&t=&z=16&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Dharwad',
  },
  {
    id: 'navanagar',
    name: 'M. M. Joshi Eye Hospital - Navanagar',
    region: 'hubli-dharwad',
    category: 'Vision Screening Center',
    badge: 'Twin-City Corridor',
    city: 'Navanagar',
    address: 'Navanagar, Hubli-Dharwad Twin City Corridor, Karnataka 580025',
    phone: '0836-2228222',
    altPhone: '0836-2229222',
    timing: 'Mon – Sat: 9:30 AM – 5:30 PM',
    emergency: 'OPD Eye Screening & Specialist Referrals',
    mapUrl: 'https://maps.google.com/maps?q=15.4050,75.0750+(M.+M.+Joshi+Eye+Hospital+Navanagar)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Navanagar+Hubli',
  },
  {
    id: 'bagalkot',
    name: 'M. M. Joshi Eye Hospital - Bagalkot',
    region: 'regional',
    category: 'Regional Eye Care Center',
    badge: 'Bagalkot Branch',
    city: 'Bagalkot',
    address: 'Station Road / Sector Area, Bagalkot – 587101, Karnataka',
    phone: '08354-220222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: 'Regional OPD & Surgical Consultations',
    mapUrl: 'https://maps.google.com/maps?q=16.1815,75.6958+(M.+M.+Joshi+Eye+Hospital+Bagalkot)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Bagalkot',
  },
  {
    id: 'koppal',
    name: 'M. M. Joshi Eye Hospital - Koppal',
    region: 'regional',
    category: 'Comprehensive Eye Center',
    badge: 'Koppal Branch',
    city: 'Koppal',
    address: 'Near Central Bus Stand, Koppal – 583231, Karnataka',
    phone: '08539-221222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 5:30 PM',
    emergency: 'Outpatient Clinic & Emergency Triage',
    mapUrl: 'https://maps.google.com/maps?q=15.3522,76.1558+(M.+M.+Joshi+Eye+Hospital+Koppal)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Koppal',
  },
  {
    id: 'sankeshwar',
    name: 'M. M. Joshi Eye Hospital - Sankeshwar',
    region: 'regional',
    category: 'Regional Specialty Branch',
    badge: 'Belagavi Region',
    city: 'Sankeshwar',
    address: 'Old P.B. Road, Sankeshwar, Belagavi District – 591313, Karnataka',
    phone: '08333-273222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 5:30 PM',
    emergency: 'Specialist Eye Care & Referral Support',
    mapUrl: 'https://maps.google.com/maps?q=16.2625,74.4842+(M.+M.+Joshi+Eye+Hospital+Sankeshwar)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Sankeshwar',
  },
  {
    id: 'jamakhandi',
    name: 'M. M. Joshi Eye Hospital - Jamakhandi',
    region: 'regional',
    category: 'Diagnostic & OPD Center',
    badge: 'Jamakhandi Branch',
    city: 'Jamakhandi',
    address: 'Girigowda Layout, Jamakhandi, Bagalkot District – 587301, Karnataka',
    phone: '08353-222222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:30 AM – 5:30 PM',
    emergency: 'Community Eye Care & Diagnostic Services',
    mapUrl: 'https://maps.google.com/maps?q=16.5050,75.2950+(M.+M.+Joshi+Eye+Hospital+Jamakhandi)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Jamakhandi',
  },
  {
    id: 'raichur',
    name: 'M. M. Joshi Eye Hospital - Raichur',
    region: 'regional',
    category: 'Regional Super-Specialty Center',
    badge: 'Kalyana Karnataka',
    city: 'Raichur',
    address: 'Station Road, Near Gandhi Chowk, Raichur – 584101, Karnataka',
    phone: '08532-225222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: 'Regional Specialist Eye Care & Casualty',
    mapUrl: 'https://maps.google.com/maps?q=16.2076,77.3463+(M.+M.+Joshi+Eye+Hospital+Raichur)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Raichur',
  },
];

export default function Locations() {
  const [activeBranchId, setActiveBranchId] = useState('eyesiri');
  const [filterRegion, setFilterRegion] = useState('all');
  const [copied, setCopied] = useState(false);

  const filteredBranches =
    filterRegion === 'all'
      ? LOCATIONS_DATA
      : LOCATIONS_DATA.filter((b) => b.region === filterRegion);

  const activeBranch =
    LOCATIONS_DATA.find((b) => b.id === activeBranchId) || LOCATIONS_DATA[0];

  const handleCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="locations-section" id="locations">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-eyebrow">Hospital Network</span>
          <h2 className="section-title">Our Locations Across Karnataka</h2>
          <p className="section-subtitle">
            Convenient access with 9 hospital branches and specialized clinics across Hubballi,
            Dharwad, and North Karnataka.
          </p>
        </div>

        {/* Clean, Intuitive Two-Column Layout */}
        <div className="locations-clean-layout reveal">
          {/* Left Column: Branch Selector & Detailed Information Card */}
          <div className="locations-sidebar">
            {/* Simple Region Filter Pills */}
            <div className="region-filter-tabs">
              <button
                type="button"
                className={`region-tab ${filterRegion === 'all' ? 'active' : ''}`}
                onClick={() => setFilterRegion('all')}
              >
                All 9 Centers
              </button>
              <button
                type="button"
                className={`region-tab ${filterRegion === 'hubli-dharwad' ? 'active' : ''}`}
                onClick={() => setFilterRegion('hubli-dharwad')}
              >
                Hubballi &amp; Dharwad (4)
              </button>
              <button
                type="button"
                className={`region-tab ${filterRegion === 'regional' ? 'active' : ''}`}
                onClick={() => setFilterRegion('regional')}
              >
                Regional Centers (5)
              </button>
            </div>

            {/* Quick Branch List */}
            <div className="branch-selector-list">
              {filteredBranches.map((branch) => {
                const isSelected = branch.id === activeBranch.id;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    className={`branch-select-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => setActiveBranchId(branch.id)}
                  >
                    <div className="item-title-row">
                      <span className="item-name">{branch.name}</span>
                      <span className="item-badge">{branch.badge}</span>
                    </div>
                    <span className="item-city">📍 {branch.city}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Branch Full Details Card */}
            <div className="active-branch-card">
              <div className="active-card-top">
                <span className="active-category-pill">{activeBranch.category}</span>
                <span className="active-open-pill">● Open Mon–Sat</span>
              </div>

              <h3 className="active-card-title">{activeBranch.name}</h3>

              <div className="active-info-block">
                <div className="info-row">
                  <span className="info-icon">📍</span>
                  <div className="info-text">
                    <p>{activeBranch.address}</p>
                    <button
                      type="button"
                      className="inline-copy-btn"
                      onClick={() => handleCopy(activeBranch.address)}
                    >
                      {copied ? '✓ Copied to clipboard' : 'Copy Address'}
                    </button>
                  </div>
                </div>

                <div className="info-row">
                  <span className="info-icon">📞</span>
                  <div className="info-text">
                    <a
                      href={`tel:${activeBranch.phone.replace(/[^0-9]/g, '')}`}
                      className="active-phone-link"
                    >
                      {activeBranch.phone}
                    </a>
                    {activeBranch.altPhone && (
                      <span className="alt-phone"> / {activeBranch.altPhone}</span>
                    )}
                  </div>
                </div>

                <div className="info-row">
                  <span className="info-icon">🕒</span>
                  <div className="info-text">
                    <p>{activeBranch.timing}</p>
                  </div>
                </div>

                <div className="info-row emergency-box">
                  <span className="info-icon">🚨</span>
                  <div className="info-text">
                    <strong>{activeBranch.emergency}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="active-actions-row">
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
                    width="16"
                    height="16"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Get Directions ↗
                </a>
                <a
                  href={`tel:${activeBranch.phone.replace(/[^0-9]/g, '')}`}
                  className="btn btn-amber"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="16"
                    height="16"
                  >
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  Call Hospital
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Embedded Google Map */}
          <div className="locations-map-wrapper">
            <div className="map-clean-frame">
              <div className="map-pinned-tag">
                <span className="pinned-dot"></span>
                <span>
                  Pinned: <strong>{activeBranch.name}</strong>
                </span>
              </div>
              <iframe
                key={activeBranch.id}
                title={`Map for ${activeBranch.name}`}
                src={activeBranch.mapUrl}
                className="clean-map-iframe"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
