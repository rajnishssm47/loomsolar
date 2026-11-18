
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Users,
  Leaf,
  GraduationCap,
  MapPin,
  Clock3,
  Send,
  Sun
} from "lucide-react";

const openings = [
  {
    title: "Solar Project Engineer",
    department: "Engineering",
    location: "India",
    type: "Full Time",
    description:
      "Work on solar project planning, technical coordination and renewable energy installations."
  },
  {
    title: "Business Development Executive",
    department: "Sales & Marketing",
    location: "India",
    type: "Full Time",
    description:
      "Build customer relationships and help businesses discover the benefits of solar energy."
  },
  {
    title: "Electrical Design Engineer",
    department: "Design & Engineering",
    location: "India",
    type: "Full Time",
    description:
      "Contribute to electrical system design, technical documentation and solar solutions."
  }
];

export default function Careers() {
  return (
    <main className="loom-careers">
      <style>{`
        .loom-careers {
          --career-green: #087342;
          --career-dark: #063b27;
          --career-lime: #a6d84b;
          color: #10231a;
          background: #fff;
        }

        .career-hero {
          min-height: 470px;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          color: white;
          background:
            linear-gradient(90deg, rgba(3,35,23,.96), rgba(4,65,39,.76)),
            url("https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2000&q=85")
            center/cover;
        }

        .career-hero::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          right: 8%;
          top: 5%;
          border: 1px solid rgba(255,255,255,.17);
          border-radius: 50%;
          box-shadow: 0 0 0 55px rgba(255,255,255,.035),
                      0 0 0 110px rgba(255,255,255,.025);
          animation: careerOrbit 35s linear infinite;
          pointer-events: none;
        }

        .career-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .career-hero-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: 85px 0;
          animation: careerFadeUp .8s ease both;
        }

        .career-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          color: var(--career-lime);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .career-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: var(--career-lime);
        }

        .career-hero h1 {
          color: white;
          font-size: clamp(42px, 6vw, 68px);
          line-height: 1.12;
          letter-spacing: -2.5px;
          font-weight: 800;
        }

        .career-hero h1 span {
          color: var(--career-lime);
        }

        .career-hero p {
          max-width: 580px;
          margin-top: 22px;
          color: rgba(255,255,255,.78);
          font-size: 15px;
          line-height: 1.9;
        }

        .career-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .career-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 23px;
          border-radius: 4px;
          background: var(--career-lime);
          color: var(--career-dark);
          font-size: 12px;
          font-weight: 800;
          transition: .3s ease;
        }

        .career-btn:hover {
          transform: translateY(-4px);
          background: white;
        }

        .career-btn-outline {
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,.55);
        }

        .career-btn-outline:hover {
          background: white;
          color: var(--career-dark);
        }

        .career-intro {
          padding: 95px 0;
          background: #fff;
        }

        .career-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 75px;
        }

        .career-intro-image {
          position: relative;
          min-height: 420px;
        }

        .career-intro-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
        }

        .career-image-label {
          position: absolute;
          left: -18px;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 17px 20px;
          background: white;
          color: var(--career-dark);
          box-shadow: 0 12px 35px rgba(0,0,0,.13);
          border-left: 4px solid var(--career-green);
        }

        .career-image-label svg {
          color: var(--career-green);
        }

        .career-image-label strong,
        .career-image-label span {
          display: block;
        }

        .career-image-label strong {
          font-size: 13px;
        }

        .career-image-label span {
          margin-top: 4px;
          color: #718076;
          font-size: 10px;
        }

        .career-section-label {
          color: var(--career-green);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .career-section-title {
          margin-top: 16px;
          color: #10231a;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          font-weight: 800;
        }

        .career-section-title span {
          color: var(--career-green);
        }

        .career-intro-copy > p {
          margin-top: 19px;
          color: #65736a;
          font-size: 13px;
          line-height: 1.95;
        }

        .career-benefits {
          display: grid;
          gap: 17px;
          margin-top: 27px;
        }

        .career-benefit {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #344d3e;
          font-size: 13px;
          font-weight: 700;
        }

        .career-benefit svg {
          flex-shrink: 0;
          color: var(--career-green);
        }

        .career-values {
          padding: 85px 0;
          background: #f5f8f5;
        }

        .career-heading {
          max-width: 720px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .career-heading p {
          margin-top: 15px;
          color: #65736a;
          font-size: 13px;
          line-height: 1.9;
        }

        .career-values-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .career-value-card {
          padding: 32px 27px;
          background: white;
          border: 1px solid #e4ece6;
          border-radius: 5px;
          transition: .35s ease;
        }

        .career-value-card:hover {
          transform: translateY(-8px);
          border-color: var(--career-green);
          box-shadow: 0 18px 45px rgba(12,65,37,.10);
        }

        .career-value-icon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          margin-bottom: 23px;
          border-radius: 5px;
          color: var(--career-green);
          background: #e9f5ed;
        }

        .career-value-card h3 {
          font-size: 17px;
          font-weight: 800;
        }

        .career-value-card p {
          margin-top: 11px;
          color: #65736a;
          font-size: 12px;
          line-height: 1.9;
        }

        .career-openings {
          padding: 95px 0;
          background: white;
        }

        .career-opening-list {
          display: grid;
          gap: 16px;
        }

        .career-opening {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          padding: 25px 28px;
          border: 1px solid #e3ebe5;
          border-radius: 5px;
          transition: .3s ease;
        }

        .career-opening:hover {
          border-color: var(--career-green);
          transform: translateX(5px);
          box-shadow: 0 12px 30px rgba(12,65,37,.07);
        }

        .career-opening h3 {
          font-size: 17px;
          font-weight: 800;
        }

        .career-opening p {
          max-width: 650px;
          margin-top: 8px;
          color: #65736a;
          font-size: 12px;
          line-height: 1.8;
        }

        .career-opening-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 13px;
        }

        .career-opening-meta span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #758278;
          font-size: 10px;
          font-weight: 700;
        }

        .career-opening-meta svg {
          color: var(--career-green);
        }

        .career-apply-link {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          gap: 8px;
          color: var(--career-green);
          font-size: 12px;
          font-weight: 800;
        }

        .career-apply-link:hover {
          color: var(--career-dark);
        }

        .career-cta {
          padding: 0 0 90px;
          background: white;
        }

        .career-cta-inner {
          position: relative;
          overflow: hidden;
          padding: 55px;
          border-radius: 6px;
          color: white;
          background: linear-gradient(110deg, #063b27, #168447);
        }

        .career-cta-inner h2 {
          position: relative;
          z-index: 1;
          max-width: 650px;
          color: white;
          font-size: clamp(29px, 4vw, 43px);
          line-height: 1.2;
        }

        .career-cta-inner p {
          position: relative;
          z-index: 1;
          max-width: 570px;
          margin: 15px 0 25px;
          color: rgba(255,255,255,.75);
          font-size: 13px;
          line-height: 1.8;
        }

        .career-cta-sun {
          position: absolute;
          right: 8%;
          top: 50%;
          color: rgba(205,255,178,.23);
          transform: translateY(-50%);
          animation: careerOrbit 35s linear infinite;
        }

        @keyframes careerFadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes careerOrbit {
          to { rotate: 360deg; }
        }

        @media (max-width: 850px) {
          .career-intro-grid {
            gap: 40px;
          }

          .career-values-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .career-container {
            width: calc(100% - 34px);
          }

          .career-hero {
            min-height: 490px;
          }

          .career-hero-content {
            padding: 75px 0;
          }

          .career-hero h1 {
            font-size: clamp(39px, 10vw, 53px);
            letter-spacing: -1.5px;
          }

          .career-hero p {
            font-size: 13px;
          }

          .career-intro,
          .career-openings {
            padding: 68px 0;
          }

          .career-intro-grid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .career-intro-image {
            min-height: 320px;
            margin-left: 12px;
          }

          .career-image-label {
            left: -12px;
          }

          .career-values {
            padding: 68px 0;
          }

          .career-values-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .career-opening {
            align-items: flex-start;
            flex-direction: column;
            padding: 22px;
          }

          .career-cta {
            padding-bottom: 65px;
          }

          .career-cta-inner {
            padding: 35px 24px;
          }

          .career-cta-sun {
            right: -35px;
          }

          .career-cta-sun svg {
            width: 110px;
            height: 110px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loom-careers *,
          .loom-careers *::before,
          .loom-careers *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <section className="career-hero">
        <div className="career-container">
          <div className="career-hero-content">
            <span className="career-eyebrow">
              CAREERS AT LOOM SOLAR
            </span>

            <h1>
              Build Your Future.
              <br />
              <span>Power a Greener World.</span>
            </h1>

            <p>
              Join a team passionate about clean energy, innovation
              and creating a more sustainable tomorrow.
            </p>

            <div className="career-hero-actions">
              <a href="#career-openings" className="career-btn">
                Explore Opportunities <ArrowUpRight size={18} />
              </a>

              <Link to="/contact" className="career-btn career-btn-outline">
                Contact Our Team <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="career-intro">
        <div className="career-container career-intro-grid">
          <div className="career-intro-image">
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1100&q=85"
              alt="Renewable energy solar panels"
            />

            <div className="career-image-label">
              <Sun size={27} />
              <div>
                <strong>Work With Purpose</strong>
                <span>Be part of a cleaner future</span>
              </div>
            </div>
          </div>

          <div className="career-intro-copy">
            <span className="career-section-label">
              GROW WITH LOOM SOLAR
            </span>

            <h2 className="career-section-title">
              Your Work Can Make a
              <span> Difference.</span>
            </h2>

            <p>
              The energy transition creates opportunities to rethink
              how the world is powered. At LOOM SOLAR, our goal is to
              bring people and ideas together to support a cleaner,
              smarter energy future.
            </p>

            <p>
              We value curiosity, teamwork, responsibility and a
              willingness to keep learning.
            </p>

            <div className="career-benefits">
              <div className="career-benefit">
                <Leaf size={19} /> Purpose-driven work
              </div>
              <div className="career-benefit">
                <Users size={19} /> Collaborative environment
              </div>
              <div className="career-benefit">
                <GraduationCap size={19} /> Continuous learning
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-values">
        <div className="career-container">
          <div className="career-heading">
            <span className="career-section-label">
              LIFE AT LOOM SOLAR
            </span>

            <h2 className="career-section-title">
              A Workplace That
              <span> Moves Forward.</span>
            </h2>

            <p>
              Great work happens when people have the opportunity
              to contribute, collaborate and grow.
            </p>
          </div>

          <div className="career-values-grid">
            <div className="career-value-card">
              <div className="career-value-icon">
                <Leaf size={27} />
              </div>
              <h3>Meaningful Impact</h3>
              <p>
                Contribute to work that supports renewable energy
                and a more sustainable future.
              </p>
            </div>

            <div className="career-value-card">
              <div className="career-value-icon">
                <Users size={27} />
              </div>
              <h3>Team Collaboration</h3>
              <p>
                Share ideas, learn from others and work together
                towards common goals.
              </p>
            </div>

            <div className="career-value-card">
              <div className="career-value-icon">
                <GraduationCap size={27} />
              </div>
              <h3>Learning & Growth</h3>
              <p>
                Build your knowledge, develop new skills and
                take on meaningful challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="career-openings" id="career-openings">
        <div className="career-container">
          <div className="career-heading">
            <span className="career-section-label">
              OPPORTUNITIES
            </span>

            <h2 className="career-section-title">
              Explore Your Next
              <span> Opportunity.</span>
            </h2>

            <p>
              Explore these sample role categories and contact our
              team to discuss current opportunities.
            </p>
          </div>

          <div className="career-opening-list">
            {openings.map((job) => (
              <article className="career-opening" key={job.title}>
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>

                  <div className="career-opening-meta">
                    <span>
                      <BriefcaseBusiness size={14} />
                      {job.department}
                    </span>

                    <span>
                      <MapPin size={14} />
                      {job.location}
                    </span>

                    <span>
                      <Clock3 size={14} />
                      {job.type}
                    </span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="career-apply-link"
                >
                  Enquire Now <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-cta">
        <div className="career-container">
          <div className="career-cta-inner">
            <div className="career-cta-sun">
              <Sun size={160} strokeWidth={0.7} />
            </div>

            <h2>
              Don't See the Right Role?
              <br />
              Let's Connect.
            </h2>

            <p>
              Share your interest in working with LOOM SOLAR.
              Our team can discuss potential opportunities with you.
            </p>

            <Link to="/contact" className="career-btn">
              Get in Touch <Send size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
