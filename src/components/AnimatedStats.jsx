
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 1600;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);

          setCount(Math.floor(value * eased));

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function AnimatedStats() {
  const stats = [
    { value: 100, suffix: "+", label: "Solar Possibilities" },
    { value: 3, suffix: "", label: "Solution Categories" },
    { value: 100, suffix: "%", label: "Clean Energy Vision" },
    { value: 24, suffix: "/7", label: "A Brighter Future" }
  ];

  return (
    <section className="stats-section">
      <style>{`
        .stats-section {
          position: relative;
          width: 100%;
          padding: 58px 24px 35px;
          background: #ffffff;
          border-bottom: 1px solid #e6eee8;
          overflow: hidden;
        }

        .stats-inner {
          width: min(1240px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: stretch;
        }

        .stat-item {
          position: relative;
          min-width: 0;
          padding: 12px 28px 20px;
          text-align: center;
          border-right: 1px solid #e4ece6;
        }

        .stat-item:last-child {
          border-right: 0;
        }

        .stat-item h2 {
          color: #075b32;
          font-family: inherit;
          font-size: clamp(32px, 3.5vw, 46px);
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -1.5px;
        }

        .stat-item p {
          margin-top: 10px;
          color: #5b6b61;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.5;
        }

        .stat-line {
          display: block;
          width: 32px;
          height: 3px;
          margin: 17px auto 0;
          border-radius: 5px;
          background: #a6d84b;
          transition: width 0.35s ease;
        }

        .stat-item:hover .stat-line {
          width: 65px;
        }

        .stats-disclaimer {
          margin: 10px auto 0;
          text-align: center;
          color: #91a096;
          font-size: 10px;
          line-height: 1.6;
        }

        @media (max-width: 700px) {
          .stats-section {
            padding: 35px 18px 25px;
          }

          .stats-inner {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: 20px;
          }

          .stat-item {
            padding: 14px 8px 17px;
          }

          .stat-item:nth-child(2) {
            border-right: 0;
          }

          .stat-item h2 {
            font-size: 34px;
          }

          .stat-item p {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stat-line {
            transition: none;
          }
        }
      `}</style>

      <div className="stats-inner">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <h2>
              <Counter value={stat.value} suffix={stat.suffix} />
            </h2>
            <p>{stat.label}</p>
            <span className="stat-line" />
          </div>
        ))}
      </div>

      <p className="stats-disclaimer">
        Illustrative brand metrics, not verified company performance.
      </p>
    </section>
  );
}
