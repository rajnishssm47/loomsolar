
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  Zap,
  ShieldCheck,
  Layers,
  Activity,
  Leaf,
  CheckCircle2,
  Factory,
  Home,
  Building2,
  Settings2,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";

const products = [
  {
    id: "mono",
    number: "01",
    category: "RESIDENTIAL SOLAR",
    name: "Mono PERC Solar Modules",
    subtitle: "Reliable solar performance for everyday energy needs.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1100&q=85",
    technology: "Mono PERC",
    power: "Project dependent",
    application: "Homes & small businesses",
    features: [
      "High-efficiency cell technology",
      "Consistent energy generation",
      "Suitable for rooftop installations",
    ],
    icon: Home,
  },
  {
    id: "topcon",
    number: "02",
    category: "ADVANCED SOLAR",
    name: "N-Type TOPCon Modules",
    subtitle: "Advanced cell technology designed for modern solar projects.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1100&q=85",
    technology: "N-Type TOPCon",
    power: "Project dependent",
    application: "Residential & commercial",
    features: [
      "Advanced N-type cell design",
      "Designed for strong energy performance",
      "Suitable for modern solar projects",
    ],
    icon: Zap,
  },
  {
    id: "bifacial",
    number: "03",
    category: "UTILITY & COMMERCIAL",
    name: "Bifacial Solar Modules",
    subtitle: "Designed to capture sunlight from both sides of the module.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1100&q=85",
    technology: "Bifacial",
    power: "Project dependent",
    application: "Ground-mounted & large projects",
    features: [
      "Front and rear-side light capture",
      "Flexible project configurations",
      "Designed for large solar installations",
    ],
    icon: Factory,
  },
];

const advantages = [
  {
    icon: Activity,
    title: "Performance Focused",
    description:
      "Solar module options selected around project requirements and energy goals.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Conscious",
    description:
      "A focus on product quality, reliable components and responsible selection.",
  },
  {
    icon: Layers,
    title: "Flexible Applications",
    description:
      "Solutions for different rooftop, commercial and ground-mounted requirements.",
  },
  {
    icon: Leaf,
    title: "Clean Energy",
    description:
      "Supporting a shift towards renewable and more sustainable energy.",
  },
];

const applications = [
  {
    icon: Home,
    title: "Residential",
    description: "Solar solutions for homes and rooftop installations.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Solar modules for offices, institutions and businesses.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Scalable module options for industrial energy projects.",
  },
];

export default function Products() {
  return (
    <main className="products-page">

      {/* HERO */}
      <section className="products-hero">
        <div className="products-hero-image" />
        <div className="products-hero-overlay" />

        <div className="container products-hero-content">
          <ScrollReveal>
            <div className="products-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Products</span>
            </div>

            <span className="products-eyebrow">
              <span /> SOLAR TECHNOLOGY
            </span>

            <h1>
              Powering Progress
              <br />
              <span>With Solar Innovation.</span>
            </h1>

            <p>
              Explore solar module technologies designed to support
              residential, commercial and industrial energy requirements.
            </p>

            <div className="products-hero-actions">
              <a href="#product-range" className="btn btn-primary">
                Explore Products <ArrowRight size={18} />
              </a>
              <Link to="/contact" className="products-hero-link">
                Talk to our team <ArrowUpRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="products-hero-bottom">
          <span>LOOM SOLAR</span>
          <span>ENGINEERED FOR A BRIGHTER FUTURE</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="section products-intro">
        <div className="container products-intro-grid">
          <ScrollReveal>
            <div>
              <span className="section-eyebrow">OUR PRODUCT RANGE</span>
              <h2 className="section-title">
                The Right Technology
                <span> For Every Solar Need.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="section-description products-intro-description">
              Every solar project has different requirements. Explore
              different solar module technologies and find the right
              direction for your energy goals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="products-range-section" id="product-range">
        <div className="container">
          <div className="products-range-heading">
            <ScrollReveal>
              <span className="section-eyebrow">EXPLORE OUR TECHNOLOGIES</span>
              <h2 className="section-title">
                Solar Modules <span>Made For Possibility.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="products-grid">
            {products.map((product) => {
              const ProductIcon = product.icon;

              return (
                <ScrollReveal key={product.id}>
                  <article className="solar-product-card">
                    <div className="solar-product-image">
                      <img src={product.image} alt={product.name} />

                      <span className="solar-product-number">
                        {product.number}
                      </span>

                      <span className="solar-product-category">
                        {product.category}
                      </span>

                      <div className="solar-product-image-overlay" />
                    </div>

                    <div className="solar-product-body">
                      <div className="solar-product-icon">
                        <ProductIcon size={24} />
                      </div>

                      <h3>{product.name}</h3>
                      <p className="solar-product-subtitle">
                        {product.subtitle}
                      </p>

                      <div className="solar-product-specs">
                        <div>
                          <span>Technology</span>
                          <strong>{product.technology}</strong>
                        </div>
                        <div>
                          <span>Power rating</span>
                          <strong>{product.power}</strong>
                        </div>
                        <div>
                          <span>Application</span>
                          <strong>{product.application}</strong>
                        </div>
                      </div>

                      <div className="solar-product-features">
                        {product.features.map((feature) => (
                          <div key={feature}>
                            <CheckCircle2 size={15} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="solar-product-link"
                        aria-label={`Enquire about ${product.name}`}
                      >
                        Enquire About Product
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT ADVANTAGES */}
      <section className="section products-advantages-section">
        <div className="container">
          <ScrollReveal>
            <div className="products-advantages-heading">
              <span className="section-eyebrow">WHY SOLAR TECHNOLOGY MATTERS</span>
              <h2 className="section-title">
                More Than Panels. <span>A Smarter Energy Choice.</span>
              </h2>
              <p className="section-description">
                Product selection should consider performance, installation
                conditions and long-term project requirements.
              </p>
            </div>
          </ScrollReveal>

          <div className="products-advantages-grid">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal key={item.title}>
                  <article className="products-advantage-card">
                    <div className="products-advantage-top">
                      <div className="products-advantage-icon">
                        <Icon size={26} />
                      </div>
                      <span>0{index + 1}</span>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="products-advantage-line" />
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="products-applications-section">
        <div className="container">
          <ScrollReveal>
            <div className="products-applications-heading">
              <span className="section-eyebrow">SOLAR FOR EVERY SECTOR</span>
              <h2 className="section-title">
                One Sun. <span>Many Possibilities.</span>
              </h2>
              <p>
                Solar module technology can support a wide range of energy
                applications, from individual rooftops to large-scale projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="products-applications-grid">
            {applications.map((item) => {
              const Icon = item.icon;

              return (
                <ScrollReveal key={item.title}>
                  <article className="products-application-card">
                    <div className="products-application-icon">
                      <Icon size={29} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <ArrowUpRight size={20} />
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT SELECTION */}
      <section className="products-selection-section">
        <div className="container products-selection-grid">
          <ScrollReveal>
            <div className="products-selection-image">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1100&q=85"
                alt="Solar panels installed across a large renewable energy site"
              />
              <div className="products-selection-image-caption">
                <Sun size={22} />
                <span>MAKE THE SUN WORK FOR YOU</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="products-selection-content">
            <ScrollReveal>
              <span className="section-eyebrow">NEED HELP CHOOSING?</span>
              <h2 className="section-title">
                Find The Right
                <span> Solar Solution.</span>
              </h2>
              <p>
                Choosing the right solar module depends on your available
                space, energy needs, installation conditions and project
                objectives.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="products-selection-points">
                <div>
                  <CheckCircle2 size={18} />
                  <span>Understand your energy requirements</span>
                </div>
                <div>
                  <CheckCircle2 size={18} />
                  <span>Compare suitable solar technologies</span>
                </div>
                <div>
                  <CheckCircle2 size={18} />
                  <span>Discuss your installation requirements</span>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary">
                Request Product Guidance <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="products-final-cta">
        <div className="container">
          <ScrollReveal>
            <div className="products-final-cta-inner">
              <div>
                <span>YOUR SOLAR JOURNEY STARTS HERE</span>
                <h2>
                  Ready To Explore
                  <strong> Solar Possibilities?</strong>
                </h2>
                <p>
                  Tell us about your project and connect with the LOOM SOLAR
                  team.
                </p>
              </div>

              <Link to="/contact" className="btn btn-white">
                Get a Quote <ArrowUpRight size={19} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
