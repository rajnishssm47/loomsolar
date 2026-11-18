
import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  Factory,
  ArrowUpRight,
  ArrowRight,
  Sun,
  Zap,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Residential Solar",
    subtitle: "POWER YOUR HOME",
    description:
      "Transform your rooftop into a clean energy source. Enjoy smarter energy consumption and move towards a more sustainable home.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
    icon: Home,
    features: ["Rooftop Solar Systems", "Smart Energy Solutions", "Long-Term Savings"],
  },
  {
    number: "02",
    title: "Commercial Solar",
    subtitle: "ENERGY FOR BUSINESS",
    description:
      "Bring renewable energy to your workplace. Explore solar solutions designed for offices, retail spaces and commercial buildings.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
    icon: Building2,
    features: ["Office & Retail Solar", "Energy Cost Optimisation", "Scalable Installations"],
  },
  {
    number: "03",
    title: "Industrial Solar",
    subtitle: "POWERING INDUSTRY",
    description:
      "Support large-scale energy requirements with scalable solar possibilities for factories, warehouses and industrial facilities.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=90",
    icon: Factory,
    features: ["Industrial Rooftop Solar", "Large-Scale Energy Systems", "Sustainable Operations"],
  },
];

const advantages = [
  {
    icon: Zap,
    title: "Smart Energy",
    text: "Explore modern solar technology for efficient energy management.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    text: "Solutions planned around reliability, quality and performance.",
  },
  {
    icon: Leaf,
    title: "Sustainable Future",
    text: "Take a step towards cleaner energy and a greener tomorrow.",
  },
];

export default function Solutions() {
  return (
    <main className="premium-solutions">
      <style>{`
        .premium-solutions {
          --sol-green: #078746;
          --sol-dark: #092b20;
          --sol-text: #193b2d;
          --sol-muted: #6d7c73;
          background: #fff;
          color: var(--sol-text);
          overflow: hidden;
        }

        .premium-solutions * {
          box-sizing: border-box;
        }

        .sol-container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .sol-hero {
          min-height: 530px;
          position: relative;
          display: flex;
          align-items: center;
          isolation: isolate;
          overflow: hidden;
          background: #08291e;
          color: #fff;
        }

        .sol-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -3;
          background-image:
            linear-gradient(90deg, rgba(3,25,17,.94) 0%, rgba(3,31,21,.78) 48%, rgba(3,31,21,.24) 100%),
            url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=90");
          background-size: cover;
          background-position: center 54%;
          animation: solHeroZoom 18s ease-in-out infinite alternate;
        }

        .sol-hero-glow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          right: 4%;
          top: -20%;
          background: rgba(36, 209, 115, .12);
          filter: blur(75px);
          z-index: -2;
          animation: solGlow 7s ease-in-out infinite alternate;
        }

        .sol-hero-content {
          position: relative;
          z-index: 2;
          padding: 90px 0 110px;
          max-width: 750px;
          animation: solFadeUp .9s ease both;
        }

        .sol-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.4px;
          color: #8ce6ad;
          margin-bottom: 24px;
        }

        .sol-eyebrow::before {
          content: "";
          width: 32px;
          height: 2px;
          background: #40d889;
        }

        .sol-hero h1 {
          color: #fff;
          font-size: clamp(42px, 6vw, 76px);
          line-height: 1.08;
          letter-spacing: -2.7px;
          font-weight: 800;
          margin: 0 0 23px;
        }

        .sol-hero h1 span {
          display: block;
          color: #65e49c;
        }

        .sol-hero-description {
          color: rgba(255,255,255,.82);
          font-size: 17px;
          line-height: 1.85;
          max-width: 570px;
          margin: 0 0 32px;
        }

        .sol-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .sol-btn {
          min-height: 52px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 11px;
          padding: 0 23px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 750;
          transition: .3s ease;
        }

        .sol-btn-primary {
          background: #119452;
          color: white;
          border: 1px solid #119452;
        }

        .sol-btn-primary:hover {
          background: #16ad62;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(10, 181, 96, .25);
        }

        .sol-btn-outline {
          color: white;
          border: 1px solid rgba(255,255,255,.55);
          background: rgba(255,255,255,.07);
        }

        .sol-btn-outline:hover {
          background: white;
          color: #103c29;
          transform: translateY(-3px);
        }

        .sol-hero-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          border-top: 1px solid rgba(255,255,255,.17);
          background: rgba(4,29,20,.38);
          backdrop-filter: blur(12px);
        }

        .sol-hero-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 66px;
        }

        .sol-hero-point {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,.88);
          font-size: 13px;
          font-weight: 650;
        }

        .sol-hero-point svg {
          color: #6de5a0;
        }

        .sol-intro {
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
          padding: 100px 0 54px;
        }

        .sol-section-label {
          color: var(--sol-green);
          display: inline-block;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2.3px;
          margin-bottom: 15px;
        }

        .sol-intro h2 {
          color: var(--sol-dark);
          font-size: clamp(31px, 4vw, 48px);
          line-height: 1.18;
          letter-spacing: -1.5px;
          margin: 0 0 17px;
          font-weight: 800;
        }

        .sol-intro h2 span {
          color: var(--sol-green);
        }

        .sol-intro p {
          color: var(--sol-muted);
          font-size: 15px;
          line-height: 1.85;
          margin: 0;
        }

        .sol-cards-section {
          padding: 0 0 105px;
        }

        .sol-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
          align-items: stretch;
        }

        .sol-card {
          min-width: 0;
          background: white;
          border-radius: 13px;
          overflow: hidden;
          border: 1px solid #e7eee9;
          box-shadow: 0 10px 35px rgba(14, 51, 33, .055);
          transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease;
          animation: solFadeUp .8s ease both;
        }

        .sol-card:nth-child(2) {
          animation-delay: .13s;
        }

        .sol-card:nth-child(3) {
          animation-delay: .26s;
        }

        .sol-card:hover {
          transform: translateY(-11px);
          border-color: rgba(7,135,70,.35);
          box-shadow: 0 22px 55px rgba(14, 51, 33, .13);
        }

        .sol-card-image {
          height: 250px;
          position: relative;
          overflow: hidden;
          background: #dfe9e1;
        }

        .sol-card-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .7s cubic-bezier(.2,.7,.2,1);
        }

        .sol-card:hover .sol-card-image img {
          transform: scale(1.09);
        }

        .sol-card-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 35%, rgba(3,31,20,.65));
        }

        .sol-card-number {
          position: absolute;
          top: 17px;
          left: 17px;
          z-index: 2;
          color: white;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 8px 12px;
          background: rgba(4, 36, 23, .55);
          border: 1px solid rgba(255,255,255,.3);
          backdrop-filter: blur(8px);
          border-radius: 4px;
        }

        .sol-card-icon {
          position: absolute;
          bottom: 19px;
          left: 20px;
          z-index: 2;
          width: 53px;
          height: 53px;
          display: grid;
          place-items: center;
          color: white;
          border: 1px solid rgba(255,255,255,.45);
          background: rgba(12, 133, 70, .83);
          border-radius: 10px;
          backdrop-filter: blur(8px);
        }

        .sol-card-body {
          padding: 26px 24px 25px;
        }

        .sol-card-subtitle {
          color: var(--sol-green);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.7px;
        }

        .sol-card-body h3 {
          color: var(--sol-dark);
          font-size: 23px;
          letter-spacing: -.6px;
          margin: 10px 0 12px;
          font-weight: 800;
        }

        .sol-card-body > p {
          color: var(--sol-muted);
          font-size: 13px;
          line-height: 1.8;
          min-height: 70px;
          margin: 0 0 19px;
        }

        .sol-feature-list {
          list-style: none;
          display: grid;
          gap: 11px;
          padding: 0;
          margin: 0 0 23px;
        }

        .sol-feature-list li {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #42584b;
          font-size: 12px;
          font-weight: 600;
        }

        .sol-feature-list svg {
          color: var(--sol-green);
          flex-shrink: 0;
        }

        .sol-card-link {
          padding-top: 17px;
          border-top: 1px solid #edf1ed;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--sol-green);
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
        }

        .sol-card-link svg {
          transition: transform .3s ease;
        }

        .sol-card-link:hover svg {
          transform: translate(4px, -4px);
        }

        .sol-advantages {
          padding: 85px 0;
          background: #f4f8f4;
          position: relative;
          overflow: hidden;
        }

        .sol-advantages::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          right: -180px;
          top: -200px;
          background: rgba(22, 156, 85, .08);
          filter: blur(25px);
        }

        .sol-advantages-heading {
          text-align: center;
          margin-bottom: 43px;
          position: relative;
        }

        .sol-advantages-heading h2 {
          color: var(--sol-dark);
          font-size: clamp(30px, 4vw, 43px);
          letter-spacing: -1.4px;
          margin: 0;
          font-weight: 800;
        }

        .sol-advantages-heading h2 span {
          color: var(--sol-green);
        }

        .sol-advantages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          position: relative;
        }

        .sol-advantage {
          background: white;
          padding: 29px 25px;
          border: 1px solid #e5eee6;
          border-radius: 10px;
          transition: .3s ease;
        }

        .sol-advantage:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(14, 51, 33, .09);
        }

        .sol-advantage-icon {
          width: 49px;
          height: 49px;
          display: grid;
          place-items: center;
          background: #e7f6eb;
          color: var(--sol-green);
          border-radius: 9px;
          margin-bottom: 18px;
        }

        .sol-advantage h3 {
          font-size: 17px;
          color: var(--sol-dark);
          margin: 0 0 9px;
        }

        .sol-advantage p {
          font-size: 13px;
          line-height: 1.8;
          color: var(--sol-muted);
          margin: 0;
        }

        .sol-cta-section {
          padding: 95px 0;
        }

        .sol-cta {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          padding: 57px 60px;
          background:
            radial-gradient(circle at 90% 10%, rgba(95, 229, 151, .2), transparent 32%),
            linear-gradient(120deg, #073b27, #087c43 70%, #0b9651);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          color: white;
        }

        .sol-cta-content {
          max-width: 670px;
          position: relative;
          z-index: 2;
        }

        .sol-cta .sol-section-label {
          color: #a1f1bd;
        }

        .sol-cta h2 {
          color: white;
          font-size: clamp(29px, 4vw, 45px);
          line-height: 1.17;
          letter-spacing: -1.4px;
          margin: 0 0 15px;
        }

        .sol-cta p {
          color: rgba(255,255,255,.8);
          font-size: 14px;
          line-height: 1.8;
          margin: 0 0 25px;
        }

        .sol-cta .sol-btn {
          background: white;
          color: #087a43;
          border: 1px solid white;
        }

        .sol-cta .sol-btn:hover {
          background: #dff8e8;
          transform: translateY(-3px);
        }

        .sol-cta-decoration {
          color: rgba(255,255,255,.16);
          flex-shrink: 0;
          animation: solRotate 30s linear infinite;
        }

        @keyframes solFadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes solHeroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.07); }
        }

        @keyframes solGlow {
          from { opacity: .55; transform: scale(.9); }
          to { opacity: 1; transform: scale(1.12); }
        }

        @keyframes solRotate {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .sol-hero { min-height: 500px; }
          .sol-cards-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sol-card:last-child { grid-column: 1 / -1; max-width: 560px; width: 100%; justify-self: center; }
          .sol-advantages-grid { grid-template-columns: 1fr; }
          .sol-cta { padding: 45px 35px; }
        }

        @media (max-width: 600px) {
          .sol-container { width: min(100% - 34px, 1200px); }
          .sol-hero { min-height: 590px; align-items: flex-start; }
          .sol-hero-bg {
            background-position: 58% center;
            background-image:
              linear-gradient(90deg, rgba(3,25,17,.91), rgba(3,31,21,.64)),
              url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85");
          }
          .sol-hero-content { padding: 95px 0 120px; }
          .sol-hero h1 { font-size: 43px; letter-spacing: -1.8px; }
          .sol-hero-description { font-size: 14px; }
          .sol-hero-bottom-inner {
            justify-content: flex-start;
            flex-wrap: wrap;
            padding: 13px 0;
            gap: 12px 22px;
          }
          .sol-hero-point { font-size: 11px; }
          .sol-hero-point svg { width: 16px; }
          .sol-intro { padding: 70px 0 38px; }
          .sol-intro h2 { font-size: 32px; }
          .sol-intro p { font-size: 13px; }
          .sol-cards-section { padding-bottom: 70px; }
          .sol-cards-grid { grid-template-columns: 1fr; gap: 20px; }
          .sol-card:last-child { grid-column: auto; max-width: none; }
          .sol-card-image { height: 230px; }
          .sol-card-body { padding: 23px 21px; }
          .sol-card-body > p { min-height: 0; }
          .sol-advantages { padding: 65px 0; }
          .sol-advantages-grid { gap: 13px; }
          .sol-advantage { padding: 23px 20px; }
          .sol-cta-section { padding: 65px 0; }
          .sol-cta { padding: 36px 24px; border-radius: 12px; }
          .sol-cta-decoration { display: none; }
          .sol-cta h2 { font-size: 32px; }
          .sol-btn { min-height: 48px; padding: 0 17px; font-size: 12px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-solutions *,
          .premium-solutions *::before,
          .premium-solutions *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* PREMIUM HERO */}
      <section className="sol-hero">
        <div className="sol-hero-bg" />
        <div className="sol-hero-glow" />

        <div className="sol-container">
          <div className="sol-hero-content">
            <div className="sol-eyebrow">
              <Sparkles size={15} />
              LOOM SOLAR SOLUTIONS
            </div>

            <h1>
              Clean Energy.
              <span>Infinite Possibilities.</span>
            </h1>

            <p className="sol-hero-description">
              From your home to large-scale industries, discover intelligent
              solar possibilities designed to power a cleaner and more
              sustainable tomorrow.
            </p>

            <div className="sol-hero-actions">
              <a href="#explore-solutions" className="sol-btn sol-btn-primary">
                Explore Solutions <ArrowUpRight size={19} />
              </a>

              <Link to="/contact" className="sol-btn sol-btn-outline">
                Talk to Our Team <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="sol-hero-bottom">
          <div className="sol-container sol-hero-bottom-inner">
            <div className="sol-hero-point">
              <Sun size={19} /> Cleaner Energy
            </div>
            <div className="sol-hero-point">
              <Zap size={19} /> Smart Technology
            </div>
            <div className="sol-hero-point">
              <Leaf size={19} /> Sustainable Future
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="sol-container">
        <div className="sol-intro" id="explore-solutions">
          <span className="sol-section-label">OUR SOLUTIONS</span>
          <h2>
            Solar Energy For <span>Every Space.</span>
          </h2>
          <p>
            Every space has different energy needs. Explore our residential,
            commercial and industrial solar possibilities to discover an
            approach that works for you.
          </p>
        </div>
      </section>

      {/* SOLUTION CARDS */}
      <section className="sol-container sol-cards-section">
        <div className="sol-cards-grid">
          {solutions.map((item) => {
            const Icon = item.icon;

            return (
              <article className="sol-card" key={item.number}>
                <div className="sol-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <span className="sol-card-number">
                    SOLUTION {item.number}
                  </span>

                  <div className="sol-card-icon">
                    <Icon size={26} />
                  </div>
                </div>

                <div className="sol-card-body">
                  <span className="sol-card-subtitle">
                    {item.subtitle}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <ul className="sol-feature-list">
                    {item.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="sol-card-link">
                    Discuss Requirements
                    <ArrowUpRight size={19} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="sol-advantages">
        <div className="sol-container">
          <div className="sol-advantages-heading">
            <span className="sol-section-label">THE LOOM SOLAR APPROACH</span>
            <h2>
              Designed Around <span>Your Future.</span>
            </h2>
          </div>

          <div className="sol-advantages-grid">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <article className="sol-advantage" key={item.title}>
                  <div className="sol-advantage-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="sol-container sol-cta-section">
        <div className="sol-cta">
          <div className="sol-cta-content">
            <span className="sol-section-label">
              LET'S CREATE SOMETHING BETTER
            </span>

            <h2>
              Your Solar Journey
              <br />
              Starts Right Here.
            </h2>

            <p>
              Tell us about your energy requirements. Let's explore the right
              solar possibilities for your home, business or industry.
            </p>

            <Link to="/contact" className="sol-btn">
              Get In Touch <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="sol-cta-decoration">
            <Sun size={190} strokeWidth={0.65} />
          </div>
        </div>
      </section>
    </main>
  );
}
