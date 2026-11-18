
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Sun, Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Solutions", "/solutions"],
  ["Projects", "/projects"],
  ["Careers", "/careers"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon"><Sun size={29} /></span>
          <span>LOOM<span className="brand-light">SOLAR</span></span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Get a Quote <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
