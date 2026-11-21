import { useState, useEffect, useRef } from 'react';

const STATS_DATA = [
  {
    iconType: 'heritage',
    target: 55,
    suffix: '+',
    format: 'standard',
    label: 'Years of Clinical Excellence (Est. 1967)',
  },
  {
    iconType: 'patients',
    target: 500000,
    suffix: '+',
    format: 'indian',
    label: 'Patients Treated Across Karnataka & Goa',
  },
  {
    iconType: 'doctors',
    target: 20,
    suffix: '+',
    format: 'standard',
    label: 'Ophthalmic Super-Specialists',
  },
  {
    iconType: 'nabh',
    target: 100,
    suffix: '%',
    format: 'standard',
    label: 'NABH Accredited Healthcare Standards',
  },
];

function StatIcon({ type }) {
  switch (type) {
    case 'heritage':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    case 'patients':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'doctors':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      );
    case 'nabh':
    default:
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
  }
}

function formatIndian(num) {
  const str = num.toString();
  if (str.length <= 3) return str;
  const last3 = str.slice(-3);
  const rest = str.slice(0, -3);
  const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return formatted + ',' + last3;
}

function StatCounter({ stat, hasAnimated }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = null;
    const duration = 1800;
    const target = stat.target;
    let frameId;

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated, stat.target]);

  const displayValue = () => {
    if (!hasAnimated) return '0' + stat.suffix;
    if (stat.format === 'indian') {
      return formatIndian(count) + stat.suffix;
    }
    return count.toLocaleString() + stat.suffix;
  };

  return (
    <div className="stat-card reveal">
      <div className="stat-icon-wrap">
        <StatIcon type={stat.iconType} />
      </div>
      <div className="stat-number">{displayValue()}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {STATS_DATA.map((stat, idx) => (
            <StatCounter key={idx} stat={stat} hasAnimated={hasAnimated} />
          ))}
        </div>
      </div>
    </section>
  );
}
