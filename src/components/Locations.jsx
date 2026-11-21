import { useState } from 'react';

const LOCATIONS_DATA = [
  {
    id: 'eyesiri',
    name: 'EyeSiri - M. M. Joshi Eye Institute',
    region: 'hubli-dharwad',
    category: 'Flagship Super-Specialty Campus',
    badge: 'Main Hospital',
    city: 'Hubballi',
    address:
      'Hosur – Unkal Bypass Rd, next to Shakuntala Memorial Hospital, Kallur Layout, Hubballi, Karnataka 580021',
    phone: '0836-2229222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: '24×7 Emergency Eye Trauma & Casualty Active',
    mapUrl:
      'https://maps.google.com/maps?q=EyeSiri+-+M.+M.+Joshi+Eye+Institute,+Hosur+-+Unkal+Bypass+Rd,+Hubballi,+Karnataka+580021&t=&z=16&ie=UTF8&iwloc=A&output=embed',
    directMapUrl:
      'https://maps.google.com/?q=EyeSiri+M+M+Joshi+Eye+Institute+Hubballi',
  },
  {
    id: 'hubli',
    name: 'M. M. Joshi Eye Hospital - Hubli',
    region: 'hubli-dharwad',
    category: 'Super-Specialty Hospital',
    badge: 'Gokul Road Campus',
    city: 'Hubballi',
    address: 'Gokul Road, Hosur, Hubballi – 580021, Karnataka',
    phone: '0836-2228222',
    altPhone: '0836-2228431',
    timing: 'Mon – Sat: 9:00 AM – 6:00 PM',
    emergency: '24×7 Casualty & Shri Guru Mahipatiraj Eye Bank',
    mapUrl:
      'https://maps.google.com/maps?q=15.348633,75.122854+(Dr.+M.+M.+Joshi+Eye+Hospital+Gokul+Road)&t=&z=16&ie=UTF8&iwloc=A&output=embed',
    directMapUrl:
      'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Gokul+Road+Hubli',
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
    emergency: 'Day Care Surgeries & Urgent Eye Consultations',
    mapUrl:
      'https://maps.google.com/maps?q=15.4589,75.0078+(M.+M.+Joshi+Eye+Hospital+Dharwad)&t=&z=16&ie=UTF8&iwloc=A&output=embed',
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
    mapUrl:
      'https://maps.google.com/maps?q=15.4050,75.0750+(M.+M.+Joshi+Eye+Hospital+Navanagar)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl:
      'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Navanagar+Hubli',
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
    mapUrl:
      'https://maps.google.com/maps?q=16.1815,75.6958+(M.+M.+Joshi+Eye+Hospital+Bagalkot)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
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
    mapUrl:
      'https://maps.google.com/maps?q=15.3522,76.1558+(M.+M.+Joshi+Eye+Hospital+Koppal)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Koppal',
  },
  {
    id: 'sankeshwar',
    name: 'M. M. Joshi Eye Hospital - Sankeshwar',
    region: 'regional',
    category: 'Regional Specialty Branch',
    badge: 'Belagavi Region',
    city: 'Sankeshwar',
    address:
      'Old P.B. Road, Sankeshwar, Belagavi District – 591313, Karnataka',
    phone: '08333-273222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:00 AM – 5:30 PM',
    emergency: 'Specialist Eye Care & Referral Support',
    mapUrl:
      'https://maps.google.com/maps?q=16.2625,74.4842+(M.+M.+Joshi+Eye+Hospital+Sankeshwar)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Sankeshwar',
  },
  {
    id: 'jamakhandi',
    name: 'M. M. Joshi Eye Hospital - Jamakhandi',
    region: 'regional',
    category: 'Diagnostic & OPD Center',
    badge: 'Jamakhandi Branch',
    city: 'Jamakhandi',
    address:
      'Girigowda Layout, Jamakhandi, Bagalkot District – 587301, Karnataka',
    phone: '08353-222222',
    altPhone: '0836-2228222',
    timing: 'Mon – Sat: 9:30 AM – 5:30 PM',
    emergency: 'Community Eye Care & Diagnostic Services',
    mapUrl:
      'https://maps.google.com/maps?q=16.5050,75.2950+(M.+M.+Joshi+Eye+Hospital+Jamakhandi)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl:
      'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Jamakhandi',
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
    mapUrl:
      'https://maps.google.com/maps?q=16.2076,77.3463+(M.+M.+Joshi+Eye+Hospital+Raichur)&t=&z=15&ie=UTF8&iwloc=A&output=embed',
    directMapUrl: 'https://maps.google.com/?q=MM+Joshi+Eye+Hospital+Raichur',
  },
];

export default function Locations() {
  const [activeBranchId, setActiveBranchId] = useState('eyesiri');
  const [filterRegion, setFilterRegion] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [isMapCollapsed, setIsMapCollapsed] = useState(false);
  const [inlineMapBranchId, setInlineMapBranchId] = useState(null);

  const filteredBranches =
    filterRegion === 'all'
      ? LOCATIONS_DATA
      : LOCATIONS_DATA.filter((b) => b.region === filterRegion);

  const activeBranch =
    LOCATIONS_DATA.find((b) => b.id === activeBranchId) ||
    LOCATIONS_DATA.find((b) => b.id === 'eyesiri') ||
    LOCATIONS_DATA[0];

  const handleCopy = (id, text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const toggleBranch = (id) => {
    // Collapsible accordion: clicking already open item collapses it
    setActiveBranchId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="locations-section" id="locations">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-eyebrow">Hospital Network</span>
          <h2 className="section-title">Our Locations Across Karnataka</h2>
          <p className="section-subtitle">
            Convenient access with 9 hospital branches and specialized clinics
            across Hubballi, Dharwad, and North Karnataka.
          </p>
        </div>

        {/* Clean, Intuitive Two-Column Layout */}
        <div className="locations-clean-layout reveal">
          {/* Left Column: Scrollable List Matched to Map Height */}
          <div className="locations-sidebar">
            {/* Region Filter Tabs */}
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

            {/* Whole List with Inline Details (Accordion / Inline Card) */}
            <div className="branch-accordion-list">
              {filteredBranches.map((branch) => {
                const isOpen = branch.id === activeBranchId;
                const isInlineMapOpen = inlineMapBranchId === branch.id;
                return (
                  <div
                    key={branch.id}
                    className={`branch-accordion-item ${isOpen ? 'open' : ''}`}
                  >
                    {/* Header Row (Always Clickable & Collapsible) */}
                    <button
                      type="button"
                      className="accordion-header-btn"
                      onClick={() => toggleBranch(branch.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="item-title-col">
                        <div className="item-title-row">
                          <span className="item-name">{branch.name}</span>
                          <span className="item-badge">{branch.badge}</span>
                        </div>
                        <span className="item-city">📍 {branch.city}</span>
                      </div>
                      <span className="accordion-chevron" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d={isOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
                        </svg>
                      </span>
                    </button>

                    {/* Inline Expanded Details */}
                    {isOpen && (
                      <div className="accordion-body-inline">
                        <div className="active-card-top">
                          <span className="active-category-pill">
                            {branch.category}
                          </span>
                          <span className="active-open-pill">● Open Mon–Sat</span>
                        </div>

                        <div className="active-info-block">
                          <div className="info-row">
                            <span className="info-icon">📍</span>
                            <div className="info-text">
                              <p>{branch.address}</p>
                              <button
                                type="button"
                                className="inline-copy-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(branch.id, branch.address);
                                }}
                              >
                                {copiedId === branch.id
                                  ? '✓ Copied to clipboard'
                                  : 'Copy Address'}
                              </button>
                            </div>
                          </div>

                          <div className="info-row">
                            <span className="info-icon">📞</span>
                            <div className="info-text">
                              <a
                                href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`}
                                className="active-phone-link"
                              >
                                {branch.phone}
                              </a>
                              {branch.altPhone && (
                                <span className="alt-phone">
                                  {' '}
                                  / {branch.altPhone}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="info-row">
                            <span className="info-icon">🕒</span>
                            <div className="info-text">
                              <p>{branch.timing}</p>
                            </div>
                          </div>

                          <div className="info-row emergency-box">
                            <span className="info-icon">🚨</span>
                            <div className="info-text">
                              <strong>{branch.emergency}</strong>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="active-actions-row">
                          <a
                            href={branch.directMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              width="15"
                              height="15"
                            >
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            Get Directions ↗
                          </a>
                          <a
                            href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`}
                            className="btn btn-amber"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              width="15"
                              height="15"
                            >
                              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                            </svg>
                            Call Hospital
                          </a>
                          <button
                            type="button"
                            className="btn btn-outline-map"
                            onClick={(e) => {
                              e.stopPropagation();
                              setInlineMapBranchId((prev) =>
                                prev === branch.id ? null : branch.id
                              );
                            }}
                          >
                            {isInlineMapOpen ? '▴ Hide Inline Map' : '🗺️ Inline Map'}
                          </button>
                        </div>

                        {/* Collapsible Inline Mini Map */}
                        {isInlineMapOpen && (
                          <div className="inline-map-container">
                            <iframe
                              key={`inline-${branch.id}`}
                              title={`Inline map for ${branch.name}`}
                              src={branch.mapUrl}
                              className="inline-map-iframe"
                              loading="lazy"
                              allowFullScreen=""
                              referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean Sticky Map with Collapsible Toggle */}
          <div className={`locations-map-wrapper ${isMapCollapsed ? 'map-is-collapsed' : ''}`}>
            <div className={`map-clean-frame ${isMapCollapsed ? 'collapsed' : ''}`}>
              <div className="map-pinned-tag">
                <div className="pinned-info">
                  <span className="pinned-dot"></span>
                  <span className="pinned-text">
                    Pinned: <strong>{activeBranch.name}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  className="map-collapse-toggle-btn"
                  onClick={() => setIsMapCollapsed((prev) => !prev)}
                  title={isMapCollapsed ? 'Expand Map View' : 'Collapse Map View'}
                  aria-label={isMapCollapsed ? 'Expand Map View' : 'Collapse Map View'}
                >
                  {isMapCollapsed ? (
                    <>
                      <span>🗺️ Show Map</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Collapse Map</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {!isMapCollapsed ? (
                <iframe
                  key={activeBranch.id}
                  title={`Map for ${activeBranch.name}`}
                  src={activeBranch.mapUrl}
                  className="clean-map-iframe"
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <div className="map-collapsed-placeholder">
                  <div className="collapsed-content">
                    <span className="collapsed-icon">🗺️</span>
                    <div>
                      <strong>Interactive Map Collapsed</strong>
                      <p>{activeBranch.address}</p>
                    </div>
                  </div>
                  <div className="collapsed-actions">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => setIsMapCollapsed(false)}
                    >
                      Show Interactive Map
                    </button>
                    <a
                      href={activeBranch.directMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
