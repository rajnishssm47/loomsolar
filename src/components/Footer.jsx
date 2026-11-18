
import { Link } from "react-router-dom";
import { Sun, ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <Link to="/" className="brand footer-brand">
            <Sun size={28} />
            <span>LOOM<span className="brand-light">SOLAR</span></span>
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
          <Link to="/contact"><Mail size={15}/> Contact Us</Link>
          <Link to="/contact"><Phone size={15}/> Business Enquiry</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Loom Solar. All rights reserved.</span>
        <Link to="/contact">Let's Talk <ArrowUpRight size={15}/></Link>
      </div>
    </footer>
  );
}
