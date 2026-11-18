
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Sun,
  Zap,
  Leaf,
  Building2,
  Home,
  Factory,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Residential Solar Concept",
    category: "RESIDENTIAL",
    type: "Homes & Rooftops",
    description:
      "A look at how rooftop solar can become a natural part of modern residential architecture.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
    icon: Home,
    featured: true,
  },
  {
    number: "02",
    name: "Commercial Solar Concept",
    category: "COMMERCIAL",
    type: "Business Spaces",
    description:
      "Exploring renewable energy possibilities for contemporary commercial buildings.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=90",
    icon: Building2,
  },
  {
    number: "03",
    name: "Industrial Solar Concept",
    category: "INDUSTRIAL",
    type: "Factories & Facilities",
    description:
      "Discovering scalable solar applications for industrial and manufacturing environments.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1100&q=90",
    icon: Factory,
  },
  {
    number: "04",
    name: "Renewable Energy Concept",
    category: "RENEWABLE ENERGY",
    type: "Solar Infrastructure",
    description:
      "Visualising the role of solar energy in creating a cleaner energy ecosystem.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1100&q=90",
    icon: Sun,
  },
];

const principles = [
  {
    icon: Sun,
    title: "Clean Energy",
    description:
      "Explore solar-powered possibilities for a more sustainable tomorrow.",
  },
  {
    icon: Zap,
    title: "Smart Solutions",
    description:
      "Discover energy approaches designed around modern requirements.",
  },
  {
    icon: Leaf,
    title: "Greener Future",
    description:
      "Support the transition towards cleaner and renewable energy.",
  },
];

export default function Projects() {
  const featured = projects[0];
  const FeaturedIcon = featured.icon;

  return (
    <main className="loom-projects">
      <style>{`
        .loom-projects {
          --project-green: #168447;
          --project-dark: #092d20;
          --project-muted: #68776e;
          color: var(--project-dark);
          background: #fff;
          overflow: hidden;
        }

        .loom-projects * {
          box-sizing: border-box;
        }

        .project-container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* HERO */

        .project-hero {
          min-height: 560px;
          position: relative;
          display: flex;
          align-items: center;
          isolation: isolate;
          overflow: hidden;
          color: white;
          background: #082d20;
        }

        .project-hero-image {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image:
            linear-gradient(
              90deg,
              rgba(3, 28, 19, .93) 0%,
              rgba(4, 43, 28, .77) 48%,
              rgba(4, 43, 28, .23) 100%
            ),
            url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=90");
          background-position: center;
          background-size: cover;
          animation: projectHeroZoom 22s ease-in-out infinite alternate;
        }

        .project-hero-glow {
          position: absolute;
          z-index: -1;
          width: 470px;
          height: 470px;
          right: 5%;
          top: -12%;
          border-radius: 50%;
          background: rgba(166, 216, 75, .16);
          filter: blur(75px);
          animation: projectGlow 6s ease-in-out infinite alternate;
        }

        .project-hero-content {
          max-width: 790px;
          padding: 100px 0 120px;
          animation: projectReveal .9s ease both;
        }

        .project-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: #b7ec9c;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2.5px;
          margin-bottom: 24px;
        }

        .project-eyebrow::before {
          content: "";
          width: 30px;
          height: 2px;
          background: #a6d84b;
        }

        .project-hero h1 {
          color: white;
          font-size: clamp(43px, 6vw, 75px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -2.7px;
          margin: 0 0 22px;
        }

        .project-hero h1 span {
          display: block;
          color: #a6d84b;
        }

        .project-hero-description {
          max-width: 600px;
          color: rgba(255,255,255,.8);
          font-size: 15px;
          line-height: 1.9;
          margin: 0 0 32px;
        }

        .project-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .project-btn {
          min-height: 51px;
          padding: 0 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: .3s ease;
        }

        .project-btn-primary {
          background: #168447;
          border: 1px solid #168447;
          color: white;
        }

        .project-btn-primary:hover {
          background: #0b6337;
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,.2);
        }

        .project-btn-outline {
          color: white;
          border: 1px solid rgba(255,255,255,.55);
          background: rgba(255,255,255,.07);
        }

        .project-btn-outline:hover {
          background: white;
          color: #075b32;
          transform: translateY(-4px);
        }

        .project-hero-footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          border-top: 1px solid rgba(255,255,255,.2);
          background: rgba(3, 30, 20, .38);
          backdrop-filter: blur(12px);
        }

        .project-hero-footer-inner {
          min-height: 65px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .project-hero-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,.88);
          font-size: 12px;
          font-weight: 700;
        }

        .project-hero-feature svg {
          color: #a6d84b;
        }

        /* INTRO */

        .project-intro {
          padding: 100px 0 50px;
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }

        .project-section-label {
          display: inline-block;
          color: var(--project-green);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2.3px;
          margin-bottom: 16px;
        }

        .project-intro h2 {
          font-size: clamp(32px, 4vw, 48px);
          color: var(--project-dark);
          line-height: 1.17;
          letter-spacing: -1.6px;
          font-weight: 800;
          margin: 0 0 18px;
        }

        .project-intro h2 span {
          color: var(--project-green);
        }

        .project-intro p {
          color: var(--project-muted);
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        /* FEATURED PROJECT */

        .project-featured-section {
          padding: 0 0 95px;
        }

        .project-featured {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          min-height: 430px;
          background: #f4f8f4;
          border-radius: 9px;
          overflow: hidden;
          border: 1px solid #e5ede6;
        }

        .project-featured-image {
          min-height: 430px;
          overflow: hidden;
          position: relative;
        }

        .project-featured-image img {
          width: 100%;
          height: 100%;
          min-height: 430px;
          object-fit: cover;
          display: block;
          transition: transform .8s ease;
        }

        .project-featured:hover .project-featured-image img {
          transform: scale(1.045);
        }

        .project-featured-badge {
          position: absolute;
          top: 22px;
          left: 22px;
          background: #168447;
          color: white;
          padding: 10px 15px;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.5px;
          border-radius: 3px;
        }

        .project-featured-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 45px;
        }

        .project-featured-content h3 {
          color: var(--project-dark);
          font-size: clamp(25px, 3vw, 35px);
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 13px 0 15px;
        }

        .project-featured-content p {
          color: var(--project-muted);
          font-size: 13px;
          line-height: 1.9;
          margin: 0 0 23px;
        }

        .project-featured-meta {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #168447;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 1.2px;
        }

        .project-featured-content .project-btn {
          margin-top: 8px;
        }

        /* PROJECT GRID */

        .project-gallery-section {
          background: #f6f9f6;
          padding: 95px 0 100px;
        }

        .project-gallery-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 25px;
          margin-bottom: 42px;
        }

        .project-gallery-heading h2 {
          color: var(--project-dark);
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.15;
          letter-spacing: -1.5px;
          margin: 0;
        }

        .project-gallery-heading h2 span {
          color: var(--project-green);
        }

        .project-gallery-heading p {
          max-width: 390px;
          color: var(--project-muted);
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
        }

        .project-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .project-gallery-card {
          background: white;
          border: 1px solid #e4ebe5;
          border-radius: 7px;
          overflow: hidden;
          transition: transform .4s ease, box-shadow .4s ease;
          animation: projectReveal .8s ease both;
        }

        .project-gallery-card:nth-child(2) {
          animation-delay: .12s;
        }

        .project-gallery-card:nth-child(3) {
          animation-delay: .24s;
        }

        .project-gallery-card:nth-child(4) {
          animation-delay: .36s;
        }

        .project-gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(12,65,37,.12);
        }

        .project-gallery-image {
          position: relative;
          height: 300px;
          overflow: hidden;
          background: #e1e9e2;
        }

        .project-gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .8s cubic-bezier(.2,.7,.3,1);
        }

        .project-gallery-card:hover .project-gallery-image img {
          transform: scale(1.09);
        }

        .project-gallery-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            rgba(3,32,20,.45),
            transparent 55%
          );
          pointer-events: none;
        }

        .project-gallery-number {
          position: absolute;
          z-index: 2;
          top: 17px;
          left: 18px;
          padding: 9px 12px;
          color: white;
          background: rgba(5, 40, 25, .65);
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 3px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
          backdrop-filter: blur(8px);
        }

        .project-gallery-icon {
          position: absolute;
          z-index: 2;
          bottom: 18px;
          left: 19px;
          width: 47px;
          height: 47px;
          display: grid;
          place-items: center;
          border-radius: 5px;
          background: #a6d84b;
          color: #075b32;
        }

        .project-gallery-body {
          padding: 25px 26px 27px;
        }

        .project-gallery-category {
          color: var(--project-green);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.8px;
        }

        .project-gallery-body h3 {
          color: var(--project-dark);
          font-size: 21px;
          letter-spacing: -.5px;
          margin: 10px 0;
        }

        .project-gallery-body p {
          color: var(--project-muted);
          font-size: 12px;
          line-height: 1.85;
          margin: 0 0 20px;
        }

        .project-gallery-link {
          padding-top: 16px;
          border-top: 1px solid #e9eee9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--project-green);
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }

        .project-gallery-link svg {
          transition: transform .3s ease;
        }

        .project-gallery-link:hover svg {
          transform: translate(4px, -4px);
        }

        /* PRINCIPLES */

        .project-principles {
          padding: 95px 0;
          background: white;
        }

        .project-principles-heading {
          text-align: center;
          margin-bottom: 43px;
        }

        .project-principles-heading h2 {
          color: var(--project-dark);
          font-size: clamp(30px, 4vw, 43px);
          letter-spacing: -1.5px;
          margin: 0;
        }

        .project-principles-heading h2 span {
          color: var(--project-green);
        }

        .project-principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .project-principle {
          padding: 30px 26px;
          border: 1px solid #e5ece6;
          border-radius: 7px;
          background: #fff;
          transition: .35s ease;
        }

        .project-principle:hover {
          transform: translateY(-7px);
          border-color: #b4d8bf;
          box-shadow: 0 15px 35px rgba(12,65,37,.08);
        }

        .project-principle-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          color: #168447;
          background: #e9f5ed;
          border-radius: 6px;
          margin-bottom: 18px;
        }

        .project-principle h3 {
          color: var(--project-dark);
          font-size: 16px;
          margin: 0 0 9px;
        }

        .project-principle p {
          color: var(--project-muted);
          font-size: 12px;
          line-height: 1.85;
          margin: 0;
        }

        /* DISCLAIMER */

        .project-disclaimer {
          max-width: 1200px;
          width: calc(100% - 48px);
          margin: 0 auto;
          padding: 19px 0 0;
          color: #839087;
          font-size: 11px;
          line-height: 1.7;
        }

        /* CTA */

        .project-cta-section {
          padding: 0 0 100px;
        }

        .project-cta {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding: 57px 60px;
          min-height: 300px;
          border-radius: 9px;
          background:
            radial-gradient(circle at 90% 10%, rgba(166,216,75,.22), transparent 30%),
            linear-gradient(115deg, #063b27, #168447);
          color: white;
        }

        .project-cta-content {
          max-width: 660px;
          position: relative;
          z-index: 2;
        }

        .project-cta .project-section-label {
          color: #c5ed9d;
        }

        .project-cta h2 {
          color: white;
          font-size: clamp(30px, 4vw, 45px);
          line-height: 1.16;
          letter-spacing: -1.5px;
          margin: 0 0 14px;
        }

        .project-cta p {
          color: rgba(255,255,255,.78);
          font-size: 13px;
          line-height: 1.9;
          margin: 0 0 24px;
        }

        .project-cta .project-btn {
          color: #075b32;
          background: white;
          border: 1px solid white;
        }

        .project-cta .project-btn:hover {
          background: #e9f5ed;
          transform: translateY(-4px);
        }

        .project-cta-sun {
          color: rgba(220,255,190,.2);
          flex-shrink: 0;
          animation: projectRotate 35s linear infinite;
        }

        /* ANIMATIONS */

        @keyframes projectReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes projectHeroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        @keyframes projectGlow {
          from {
            opacity: .5;
            transform: scale(.9);
          }
          to {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        @keyframes projectRotate {
          to { transform: rotate(360deg); }
        }

        /* TABLET */

        @media (max-width: 900px) {
          .project-featured {
            grid-template-columns: 1fr;
          }

          .project-featured-image,
          .project-featured-image img {
            min-height: 350px;
            height: 350px;
          }

          .project-featured-content {
            padding: 35px;
          }

          .project-gallery-image {
            height: 250px;
          }

          .project-principles-grid {
            grid-template-columns: 1fr;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .project-container {
            width: calc(100% - 34px);
          }

          .project-hero {
            min-height: 620px;
          }

          .project-hero-image {
            background-position: 60% center;
            background-image:
              linear-gradient(
                90deg,
                rgba(3,28,19,.92),
                rgba(4,43,28,.68)
              ),
              url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85");
          }

          .project-hero-content {
            padding: 100px 0 125px;
          }

          .project-hero h1 {
            font-size: 44px;
            letter-spacing: -1.8px;
          }

          .project-hero-description {
            font-size: 13px;
          }

          .project-hero-footer-inner {
            justify-content: flex-start;
            flex-wrap: wrap;
            padding: 13px 0;
            gap: 12px 20px;
          }

          .project-hero-feature {
            font-size: 10px;
          }

          .project-hero-feature svg {
            width: 16px;
          }

          .project-intro {
            padding: 70px 0 38px;
          }

          .project-intro h2 {
            font-size: 32px;
          }

          .project-intro p {
            font-size: 13px;
          }

          .project-featured-section {
            padding-bottom: 65px;
          }

          .project-featured-image,
          .project-featured-image img {
            min-height: 250px;
            height: 250px;
          }

          .project-featured-content {
            padding: 27px 22px;
          }

          .project-featured-content h3 {
            font-size: 27px;
          }

          .project-gallery-section {
            padding: 70px 0;
          }

          .project-gallery-heading {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
            margin-bottom: 28px;
          }

          .project-gallery-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .project-gallery-image {
            height: 235px;
          }

          .project-gallery-body {
            padding: 22px;
          }

          .project-principles {
            padding: 70px 0;
          }

          .project-principles-grid {
            gap: 13px;
          }

          .project-principle {
            padding: 24px 21px;
          }

          .project-disclaimer {
            width: calc(100% - 34px);
          }

          .project-cta-section {
            padding-bottom: 65px;
          }

          .project-cta {
            padding: 37px 23px;
            min-height: 0;
          }

          .project-cta h2 {
            font-size: 32px;
          }

          .project-cta-sun {
            display: none;
          }

          .project-btn {
            min-height: 47px;
            padding: 0 17px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loom-projects *,
          .loom-projects *::before,
          .loom-projects *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="project-hero">
        <div className="project-hero-image" />
        <div className="project-hero-glow" />

        <div className="project-container">
          <div className="project-hero-content">
            <div className="project-eyebrow">
              <Sparkles size={15} />
              LOOM SOLAR PROJECTS
            </div>

            <h1>
              Progress Powered
              <span>By The Sun.</span>
            </h1>

            <p className="project-hero-description">
              Explore inspiring solar applications across residential,
              commercial and industrial spaces. Discover how clean energy
              possibilities can shape a brighter tomorrow.
            </p>

            <div className="project-hero-actions">
              <a
                href="#project-gallery"
                className="project-btn project-btn-primary"
              >
                Explore Projects <ArrowUpRight size={19} />
              </a>

              <Link
                to="/contact"
                className="project-btn project-btn-outline"
              >
                Discuss Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="project-hero-footer">
          <div className="project-container project-hero-footer-inner">
            <div className="project-hero-feature">
              <Sun size={18} /> Renewable Energy
            </div>
            <div className="project-hero-feature">
              <Zap size={18} /> Smart Applications
            </div>
            <div className="project-hero-feature">
              <Leaf size={18} /> Sustainable Future
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="project-container">
        <div className="project-intro">
          <span className="project-section-label">
            EXPLORE OUR PORTFOLIO
          </span>

          <h2>
            Ideas That Inspire
            <span> A Greener Tomorrow.</span>
          </h2>

          <p>
            Solar energy can make a difference in many different environments.
            Explore these illustrative concepts to see the possibilities
            across different sectors.
          </p>
        </div>
      </section>

      {/* FEATURED CONCEPT */}
      <section className="project-container project-featured-section">
        <article className="project-featured">
          <div className="project-featured-image">
            <img
              src={featured.image}
              alt="Modern residential architecture representing a solar project concept"
              loading="lazy"
            />
            <span className="project-featured-badge">
              FEATURED CONCEPT
            </span>
          </div>

          <div className="project-featured-content">
            <span className="project-featured-meta">
              <FeaturedIcon size={17} />
              {featured.category}
            </span>

            <h3>{featured.name}</h3>

            <p>{featured.description}</p>

            <Link to="/contact" className="project-btn project-btn-primary">
              Discuss Your Requirements <ArrowUpRight size={18} />
            </Link>
          </div>
        </article>
      </section>

      {/* PROJECT GALLERY */}
      <section className="project-gallery-section" id="project-gallery">
        <div className="project-container">
          <div className="project-gallery-heading">
            <div>
              <span className="project-section-label">
                PROJECT SHOWCASE
              </span>
              <h2>
                Explore Our <span>Concepts.</span>
              </h2>
            </div>

            <p>
              Different spaces. Different energy needs. One shared vision
              of a cleaner and more sustainable future.
            </p>
          </div>

          <div className="project-gallery-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  className="project-gallery-card"
                  key={project.number}
                >
                  <div className="project-gallery-image">
                    <img
                      src={project.image}
                      alt={`${project.name} illustrative photography`}
                      loading="lazy"
                    />

                    <span className="project-gallery-number">
                      PROJECT {project.number}
                    </span>

                    <div className="project-gallery-icon">
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="project-gallery-body">
                    <span className="project-gallery-category">
                      {project.category}
                    </span>

                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    <Link
                      to="/contact"
                      className="project-gallery-link"
                      aria-label={`Enquire about ${project.name}`}
                    >
                      Discuss Requirements
                      <ArrowUpRight size={19} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="project-disclaimer">
            Note: Images and project descriptions are illustrative concepts
            for presentation purposes. They do not represent verified
            completed LOOM SOLAR installations.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="project-principles">
        <div className="project-container">
          <div className="project-principles-heading">
            <span className="project-section-label">
              OUR APPROACH
            </span>

            <h2>
              Building Towards <span>A Better Future.</span>
            </h2>
          </div>

          <div className="project-principles-grid">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article className="project-principle" key={item.title}>
                  <div className="project-principle-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="project-container project-cta-section">
        <div className="project-cta">
          <div className="project-cta-content">
            <span className="project-section-label">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's Make Your
              <br />
              Solar Vision Real.
            </h2>

            <p>
              Tell us about your energy requirements and explore the
              possibilities of solar energy for your space.
            </p>

            <Link to="/contact" className="project-btn">
              Start a Conversation <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="project-cta-sun">
            <Sun size={185} strokeWidth={0.7} />
          </div>
        </div>
      </section>
    </main>
  );
}
