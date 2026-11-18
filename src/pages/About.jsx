
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  Leaf,
  Target,
  Eye,
  ShieldCheck,
  Lightbulb,
  Users,
  Zap,
  CheckCircle2,
  Globe2,
  Factory,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "We believe dependable energy solutions begin with a strong commitment to quality and performance.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace evolving technology to make solar energy smarter, more accessible and efficient.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We support a cleaner energy ecosystem and encourage responsible use of natural resources.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We believe every customer deserves solutions that match their individual energy requirements.",
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Smart Energy Approach",
    description:
      "Thoughtfully designed solar solutions focused on energy efficiency and practical performance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Driven",
    description:
      "A consistent focus on quality, reliability and long-term value.",
  },
  {
    icon: Globe2,
    title: "Sustainable Thinking",
    description:
      "Promoting renewable energy choices that contribute to a cleaner environment.",
  },
];

export default function About() {
  return (
    <main className="about-page">

      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="about-hero-image" />
        <div className="about-hero-overlay" />

        <div className="container about-hero-content">
          <ScrollReveal>
            <div className="about-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>

            <span className="about-hero-label">
              <span /> WHO WE ARE
            </span>

            <h1>
              Energy With Purpose.
              <br />
              <span>Progress With Passion.</span>
            </h1>

            <p>
              Discover our commitment to making renewable energy a smarter
              choice for homes, businesses and industries.
            </p>
          </ScrollReveal>
        </div>

        <div className="about-hero-bottom">
          <span>LOOM SOLAR</span>
          <span>BUILDING A GREENER TOMORROW</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section about-story">
        <div className="container about-story-grid">

          <ScrollReveal>
            <div className="about-story-visual">
              <div className="about-story-main-image">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1100&q=85"
                  alt="Solar panels in a renewable energy installation"
                />
              </div>

              <div className="about-story-small-image">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=85"
                  alt="Solar photovoltaic panels"
                />
              </div>

              <div className="about-story-stamp">
                <Sun size={30} />
                <span>THE POWER OF</span>
                <strong>RENEWABLE ENERGY</strong>
              </div>
            </div>
          </ScrollReveal>

          <div className="about-story-content">
            <ScrollReveal>
              <span className="section-eyebrow">OUR STORY</span>

              <h2 className="section-title">
                A Vision Driven By
                <span> The Power Of The Sun.</span>
              </h2>

              <p className="section-description">
                At LOOM SOLAR, we believe renewable energy has the power to
                shape a better future. Solar energy offers an opportunity to
                rethink how we generate, use and manage electricity.
              </p>

              <p className="about-story-paragraph">
                Our vision is to make solar energy solutions more accessible
                through technology, thoughtful planning and a commitment to
                quality. We aim to support residential, commercial and
                industrial energy needs with a sustainable approach.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="about-story-points">
                <div>
                  <CheckCircle2 size={19} />
                  <span>Renewable energy focused</span>
                </div>
                <div>
                  <CheckCircle2 size={19} />
                  <span>Technology-driven solutions</span>
                </div>
                <div>
                  <CheckCircle2 size={19} />
                  <span>Customer-centric approach</span>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary">
                Connect With Us <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="about-purpose-section">
        <div className="container">
          <ScrollReveal>
            <div className="about-purpose-heading">
              <span className="section-eyebrow">OUR PURPOSE</span>
              <h2 className="section-title">
                What Drives <span>Us Forward.</span>
              </h2>
              <p>
                Our purpose is rooted in responsible energy choices,
                continuous improvement and a sustainable future.
              </p>
            </div>
          </ScrollReveal>

          <div className="about-purpose-grid">
            <ScrollReveal>
              <article className="purpose-card mission-card">
                <div className="purpose-icon">
                  <Target size={30} />
                </div>
                <span className="purpose-number">01</span>
                <span className="purpose-label">OUR MISSION</span>
                <h3>Making Clean Energy More Accessible.</h3>
                <p>
                  To promote practical, reliable and efficient solar energy
                  solutions that help people and businesses move towards
                  sustainable energy choices.
                </p>
                <div className="purpose-decoration">
                  <Sun size={100} />
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="purpose-card vision-card">
                <div className="purpose-icon">
                  <Eye size={30} />
                </div>
                <span className="purpose-number">02</span>
                <span className="purpose-label">OUR VISION</span>
                <h3>A World Powered By Cleaner Energy.</h3>
                <p>
                  To contribute to a future where renewable energy becomes
                  an integral part of everyday life and responsible
                  development.
                </p>
                <div className="purpose-decoration">
                  <Globe2 size={100} />
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section about-values-section">
        <div className="container">

          <ScrollReveal>
            <div className="about-values-heading">
              <span className="section-eyebrow">WHAT WE BELIEVE IN</span>
              <h2 className="section-title">
                Our Values Shape <span>Our Direction.</span>
              </h2>
              <p className="section-description">
                The principles that guide our approach to technology,
                sustainability and customer relationships.
              </p>
            </div>
          </ScrollReveal>

          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <ScrollReveal key={value.title}>
                  <article className="about-value-card">
                    <div className="about-value-top">
                      <div className="about-value-icon">
                        <Icon size={27} />
                      </div>
                      <span>0{index + 1}</span>
                    </div>

                    <h3>{value.title}</h3>
                    <p>{value.description}</p>

                    <div className="about-value-line" />
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHY LOOM SOLAR */}
      <section className="about-why-section">
        <div className="about-why-image" />

        <div className="container about-why-grid">
          <div className="about-why-heading">
            <ScrollReveal>
              <span className="section-eyebrow light-eyebrow">
                THE LOOM SOLAR APPROACH
              </span>

              <h2 className="section-title light-title">
                Designed Around
                <span> A Better Energy Future.</span>
              </h2>

              <p>
                We focus on combining renewable energy thinking with
                technology, quality and customer needs.
              </p>

              <Link to="/solutions" className="btn btn-white">
                Explore Our Solutions <ArrowUpRight size={18} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="about-reasons-list">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <ScrollReveal key={reason.title}>
                  <div className="about-reason-item">
                    <div className="about-reason-icon">
                      <Icon size={25} />
                    </div>

                    <div>
                      <span>0{index + 1}</span>
                      <h3>{reason.title}</h3>
                      <p>{reason.description}</p>
                    </div>

                    <ArrowUpRight className="about-reason-arrow" size={21} />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section about-industries">
        <div className="container">
          <ScrollReveal>
            <div className="about-industries-heading">
              <span className="section-eyebrow">WHERE SOLAR MAKES A DIFFERENCE</span>
              <h2 className="section-title">
                Energy Solutions For <span>Every Sector.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="about-industries-grid">
            <ScrollReveal>
              <div className="industry-item">
                <Sun size={29} />
                <h3>Residential</h3>
                <p>Smarter energy choices for modern homes.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="industry-item">
                <Building2Icon />
                <h3>Commercial</h3>
                <p>Efficient renewable energy for businesses.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="industry-item">
                <Factory size={29} />
                <h3>Industrial</h3>
                <p>Scalable solutions for industrial energy needs.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-final-cta">
        <div className="container">
          <ScrollReveal>
            <div className="about-final-cta-inner">
              <div>
                <span className="about-cta-label">LET'S MOVE FORWARD</span>
                <h2>
                  Let's Create A
                  <span> Cleaner Tomorrow.</span>
                </h2>
                <p>
                  Have a solar energy project in mind? Let's start a
                  conversation.
                </p>
              </div>

              <Link to="/contact" className="btn btn-white">
                Get In Touch <ArrowUpRight size={19} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}

function Building2Icon() {
  return <Factory size={29} />;
}
