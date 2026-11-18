
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const duration = 1600;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(value * eased));

        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      observer.disconnect();
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>;
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
      <div className="stats-inner">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <h2>
              <Counter value={stat.value} suffix={stat.suffix}/>
            </h2>
            <p>{stat.label}</p>
            <span className="stat-line"/>
          </div>
        ))}
      </div>
      <p className="stats-disclaimer">
        Illustrative brand metrics, not verified company performance.
      </p>
    </section>
  );
}
