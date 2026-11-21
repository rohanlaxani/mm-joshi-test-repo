import { useState, useEffect, useRef } from 'react';

const STATS_DATA = [
  {
    icon: '🏆',
    target: 55,
    suffix: '+',
    format: 'standard',
    label: 'Years of Clinical Excellence (Est. 1967)',
  },
  {
    icon: '👁️',
    target: 500000,
    suffix: '+',
    format: 'indian',
    label: 'Patients Served Across Karnataka & Goa',
  },
  {
    icon: '🩺',
    target: 20,
    suffix: '+',
    format: 'standard',
    label: 'Ophthalmic Super-Specialists',
  },
  {
    icon: '🏥',
    target: 100,
    suffix: '%',
    format: 'standard',
    label: 'NABH Accredited Healthcare Standards',
  },
];

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
      <div className="stat-icon">{stat.icon}</div>
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
