
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  Zap,
  ShieldCheck,
  Leaf,
  Factory,
  Home as HomeIcon,
  Building2,
  CheckCircle2,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";
import AnimatedStats from "../components/AnimatedStats";

const products = [
  {
    title: "Solar PV Modules",
    category: "HIGH PERFORMANCE",
    description:
      "Advanced solar modules engineered for higher efficiency and long-term performance.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
    link: "/products",
  },
  {
    title: "Solar Inverters",
    category: "SMART TECHNOLOGY",
    description:
      "Intelligent inverter solutions designed for reliable solar energy conversion.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=85",
    link: "/products",
  },
  {
    title: "Energy Storage",
    category: "NEXT GENERATION",
    description:
      "Modern energy storage solutions for efficient power management and backup.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
    link: "/products",
  },
];

const solutions = [
  {
    title: "Residential Solar",
    description:
      "Make your home energy independent with intelligent rooftop solar solutions.",
    icon: HomeIcon,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Commercial Solar",
    description:
      "Reduce operating costs and improve energy efficiency for your business.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Industrial Solar",
    description:
      "Scalable renewable energy systems for industrial and manufacturing facilities.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=85",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Advanced Technology",
    description:
      "Modern solar solutions designed around performance and efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "A focus on quality, durability and dependable energy systems.",
  },
  {
    icon: Leaf,
    title: "Sustainable Future",
    description:
      "Supporting a cleaner energy ecosystem through renewable power.",
  },
];

const tickerItems = [
  "POWERING A GREENER PLANET",
  "RENEWABLE ENERGY",
  "BUILDING A SUSTAINABLE FUTURE",
  "THE FUTURE IS SOLAR",
];

function Home() {
  return (
    <main className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-background" />
        <div className="hero-overlay" />
        <div className="hero-sun-glow" />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />

        <div className="hero-content container">
          <ScrollReveal>
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              POWERING A BRIGHTER TOMORROW
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h1>
              Powering Today.
              <br />
              <span>Preserving Tomorrow.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            <p className="hero-description">
              Discover smarter solar energy solutions designed to create a
              cleaner, greener and more sustainable world.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                Explore Solutions <ArrowUpRight size={19} />
              </Link>

              <Link to="/contact" className="btn btn-outline-light">
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="hero-bottom container">
          <div className="hero-bottom-item">
            <Sun size={19} />
            <span>Clean Energy</span>
          </div>

          <div className="hero-bottom-item">
            <Zap size={19} />
            <span>Smart Technology</span>
          </div>

          <div className="hero-bottom-item">
            <Leaf size={19} />
            <span>Green Future</span>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* ENERGY TICKER */}
      <section className="energy-ticker" aria-label="Our mission">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="ticker-content" key={index}>
              {tickerItems.map((item, itemIndex) => (
                <React.Fragment key={`${index}-${itemIndex}`}>
                  <span>{item}</span>
                  <Sun size={19} aria-hidden="true" />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <AnimatedStats />

      {/* ABOUT INTRO */}
      <section className="section about-intro">
        <div className="container about-grid">
          <ScrollReveal>
            <div className="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1100&q=85"
                alt="Solar panels generating renewable energy"
                className="about-main-image"
                loading="lazy"
              />

              <div className="about-image-label">
                <Sun size={26} />
                <div>
                  <strong>Clean Energy</strong>
                  <span>For a better tomorrow</span>
                </div>
              </div>

              <div className="about-image-decoration" />
            </div>
          </ScrollReveal>

          <div className="about-content">
            <ScrollReveal>
              <span className="section-eyebrow">ABOUT LOOM SOLAR</span>

              <h2 className="section-title">
                A Brighter Future Begins With <span>Clean Energy.</span>
              </h2>

              <p className="section-description">
                At LOOM SOLAR, we believe in the power of renewable energy to
                transform the way the world lives and works. Our focus is on
                bringing smarter, reliable and sustainable solar solutions to
                homes, businesses and industries.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="about-check-list">
                <div>
                  <CheckCircle2 size={20} />
                  Sustainable energy solutions
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  Focus on quality and performance
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  Technology-driven approach
                </div>
              </div>

              <Link to="/about" className="text-link">
                Discover Our Story <ArrowUpRight size={19} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section products-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">OUR PRODUCTS</span>

                <h2 className="section-title">
                  Innovative Products.
                  <br />
                  <span>Powerful Possibilities.</span>
                </h2>
              </div>

              <Link to="/products" className="text-link">
                View All Products <ArrowUpRight size={19} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="product-grid">
            {products.map((product, index) => (
              <ScrollReveal key={product.title}>
                <Link
                  to={product.link}
                  className="product-card"
                  style={{ "--card-delay": `${index * 120}ms` }}
                  aria-label={`Explore ${product.title}`}
                >
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                    />

                    <span className="product-number">
                      0{index + 1}
                    </span>

                    <span className="product-arrow">
                      <ArrowUpRight size={21} />
                    </span>
                  </div>

                  <div className="product-info">
                    <span className="product-category">
                      {product.category}
                    </span>

                    <h3>{product.title}</h3>
                    <p>{product.description}</p>

                    <span className="product-read-more">
                      Explore Product <ArrowRight size={17} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section solutions-section">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="section-eyebrow">OUR SOLUTIONS</span>

              <h2 className="section-title">
                Solar Solutions For <span>Every Need.</span>
              </h2>

              <p className="section-description">
                From homes to large-scale industries, discover solar solutions
                designed for a more energy-efficient future.
              </p>
            </div>
          </ScrollReveal>

          <div className="solutions-grid">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <ScrollReveal key={solution.title}>
                  <Link
                    to="/solutions"
                    className="solution-card"
                    style={{ "--card-delay": `${index * 130}ms` }}
                    aria-label={`Discover ${solution.title}`}
                  >
                    <div className="solution-image">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        loading="lazy"
                      />

                      <div className="solution-image-overlay" />

                      <div className="solution-icon">
                        <Icon size={25} />
                      </div>
                    </div>

                    <div className="solution-info">
                      <h3>{solution.title}</h3>
                      <p>{solution.description}</p>

                      <span>
                        Discover More <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY LOOM SOLAR */}
      <section className="section why-section">
        <div className="why-background" />

        <div className="container why-grid">
          <div className="why-content">
            <ScrollReveal>
              <span className="section-eyebrow light-eyebrow">
                WHY LOOM SOLAR
              </span>

              <h2 className="section-title light-title">
                More Than Energy.
                <br />
                <span>A Better Way Forward.</span>
              </h2>

              <p className="why-description">
                We see solar energy as more than a power source. It is an
                opportunity to build a cleaner, more resilient and sustainable
                future for generations to come.
              </p>

              <Link to="/about" className="btn btn-primary">
                Know More About Us <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="benefits-list">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <ScrollReveal key={benefit.title}>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <Icon size={27} />
                    </div>

                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>

                    <span className="benefit-index">
                      0{index + 1}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT CTA */}
      <section className="section project-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="project-cta">
              <div className="project-cta-glow" />

              <div className="project-cta-content">
                <span className="section-eyebrow light-eyebrow">
                  LET'S BUILD A GREENER FUTURE
                </span>

                <h2>
                  Ready to Make the
                  <br />
                  <span>Switch to Solar?</span>
                </h2>

                <p>
                  Let's explore the right solar energy solution for your
                  home, business or industry.
                </p>

                <Link to="/contact" className="btn btn-white">
                  Talk to Our Team <ArrowUpRight size={19} />
                </Link>
              </div>

              <div className="project-cta-sun">
                <Sun size={150} strokeWidth={0.7} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default Home;
