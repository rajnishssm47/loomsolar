
import { Link } from "react-router-dom";
import { Sun, ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          width: 100%;
          position: relative;
          background: #062f21;
          color: #ffffff;
          padding: 65px 24px 0;
          overflow: hidden;
        }

        .footer-top {
          width: min(1240px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 55px;
          padding-bottom: 52px;
        }

        .footer-about {
          max-width: 340px;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #ffffff;
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .footer-brand > svg {
          color: #a6d84b;
          flex-shrink: 0;
        }

        .footer-brand .brand-light {
          color: #a6d84b;
          font-weight: 500;
        }

        .footer-about p {
          margin-top: 19px;
          color: rgba(255,255,255,0.68);
          font-size: 13px;
          line-height: 1.9;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }

        .footer-column h4 {
          margin-bottom: 7px;
          color: #a6d84b;
          font-size: 13px;
          font-weight: 800;
        }

        .footer-column a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: rgba(255,255,255,0.72);
          font-size: 12px;
          line-height: 1.6;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .footer-column a:hover {
          color: #a6d84b;
          transform: translateX(4px);
        }

        .footer-column a svg {
          flex-shrink: 0;
          color: #a6d84b;
        }

        .footer-bottom {
          width: min(1240px, 100%);
          min-height: 70px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.58);
          font-size: 11px;
        }

        .footer-bottom a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #a6d84b;
          font-size: 12px;
          font-weight: 800;
          transition: gap 0.3s ease;
        }

        .footer-bottom a:hover {
          gap: 13px;
        }

        @media (max-width: 850px) {
          .footer-top {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 40px;
          }
        }

        @media (max-width: 520px) {
          .footer {
            padding: 48px 20px 0;
          }

          .footer-top {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 32px 20px;
            padding-bottom: 35px;
          }

          .footer-about {
            grid-column: 1 / -1;
            max-width: 100%;
          }

          .footer-brand {
            font-size: 23px;
          }

          .footer-about p {
            max-width: 340px;
            font-size: 12px;
          }

          .footer-column {
            gap: 12px;
          }

          .footer-column h4 {
            font-size: 12px;
          }

          .footer-column a {
            font-size: 11px;
          }

          .footer-bottom {
            min-height: 75px;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 17px 0;
            font-size: 9px;
          }
        }
      `}</style>

      <div className="footer-top">
        <div className="footer-about">
          <Link to="/" className="brand footer-brand">
            <Sun size={28} />
            <span>
              LOOM<span className="brand-light">SOLAR</span>
            </span>
          </Link>

          <p>
            Empowering a sustainable tomorrow with intelligent
            solar energy solutions for homes and businesses.
          </p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/projects">Our Projects</Link>
        </div>

        <div className="footer-column">
          <h4>Our Solutions</h4>
          <Link to="/products">Solar Panels</Link>
          <Link to="/products">Solar Inverters</Link>
          <Link to="/solutions">Solar Solutions</Link>
        </div>

        <div className="footer-column">
          <h4>Connect With Us</h4>
          <Link to="/contact">
            <Mail size={15} /> Contact Us
          </Link>
          <Link to="/contact">
            <Phone size={15} /> Business Enquiry
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Loom Solar. All rights reserved.
        </span>

        <Link to="/contact">
          Let's Talk <ArrowUpRight size={15} />
        </Link>
      </div>
    </footer>
  );
}
