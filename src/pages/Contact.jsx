
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Sun,
  Clock,
  CheckCircle2,
  MessageSquare,
  Leaf,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Residential Solar",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitted) setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const contactItems = [
    {
      icon: Mail,
      title: "Email Us",
      value: "Official email to be added",
      description: "For enquiries and business communication",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "Official phone number to be added",
      description: "Connect with our team",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Registered address to be added",
      description: "Our official business location",
    },
  ];

  const whatsappLink =
    "https://wa.me/918744816548?text=Hello%20LOOM%20SOLAR%2C%20I%20want%20to%20enquire%20about%20solar%20solutions.";

  return (
    <main className="loom-contact">
      <style>{`
        .loom-contact {
          --contact-green: #168447;
          --contact-dark: #092d20;
          --contact-muted: #68776e;
          background: #fff;
          color: var(--contact-dark);
          overflow: hidden;
        }

        .loom-contact * {
          box-sizing: border-box;
        }

        .contact-container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* HERO */

        .contact-hero {
          min-height: 390px;
          display: flex;
          align-items: center;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          color: white;
          background: #082d20;
        }

        .contact-hero-image {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image:
            linear-gradient(
              90deg,
              rgba(3, 29, 19, .94),
              rgba(4, 48, 29, .75) 55%,
              rgba(4, 48, 29, .34)
            ),
            url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=90");
          background-size: cover;
          background-position: center 52%;
          animation: contactHeroZoom 22s ease-in-out infinite alternate;
        }

        .contact-hero-glow {
          position: absolute;
          z-index: -1;
          width: 400px;
          height: 400px;
          right: 7%;
          top: -20%;
          border-radius: 50%;
          background: rgba(166,216,75,.16);
          filter: blur(70px);
          animation: contactGlow 6s ease-in-out infinite alternate;
        }

        .contact-hero-content {
          padding: 75px 0 85px;
          max-width: 760px;
          animation: contactReveal .8s ease both;
        }

        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: #b8ed9f;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2.3px;
          margin-bottom: 21px;
        }

        .contact-eyebrow::before {
          content: "";
          width: 29px;
          height: 2px;
          background: #a6d84b;
        }

        .contact-hero h1 {
          color: white;
          font-size: clamp(42px, 6vw, 69px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -2.5px;
          margin: 0 0 18px;
        }

        .contact-hero h1 span {
          color: #a6d84b;
        }

        .contact-hero p {
          max-width: 570px;
          color: rgba(255,255,255,.8);
          font-size: 15px;
          line-height: 1.9;
          margin: 0;
        }

        .contact-hero-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          min-height: 55px;
          display: flex;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,.18);
          background: rgba(3,29,19,.32);
          backdrop-filter: blur(10px);
        }

        .contact-hero-bottom-inner {
          display: flex;
          align-items: center;
          gap: 30px;
          color: rgba(255,255,255,.85);
          font-size: 11px;
          font-weight: 700;
        }

        .contact-hero-bottom-inner span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .contact-hero-bottom-inner svg {
          color: #a6d84b;
        }

        /* MAIN SECTION */

        .contact-main {
          padding: 100px 0;
          background: #f7faf7;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 65px;
          align-items: start;
        }

        /* CONTACT INFORMATION */

        .contact-information {
          padding-top: 12px;
        }

        .contact-section-label {
          display: inline-block;
          color: var(--contact-green);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2.1px;
          margin-bottom: 16px;
        }

        .contact-information h2 {
          color: var(--contact-dark);
          font-size: clamp(31px, 4vw, 43px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -1.5px;
          margin: 0 0 16px;
        }

        .contact-information h2 span {
          color: var(--contact-green);
        }

        .contact-information > p {
          color: var(--contact-muted);
          font-size: 13px;
          line-height: 1.9;
          margin: 0 0 32px;
          max-width: 400px;
        }

        .contact-detail-list {
          display: grid;
          gap: 15px;
        }

        .contact-detail {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 21px 19px;
          background: white;
          border: 1px solid #e6eee7;
          border-radius: 7px;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .contact-detail:hover {
          transform: translateX(5px);
          box-shadow: 0 12px 30px rgba(12,65,37,.07);
        }

        .contact-detail-icon {
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 6px;
          background: #e9f5ed;
          color: var(--contact-green);
        }

        .contact-detail-text strong {
          display: block;
          color: var(--contact-dark);
          font-size: 14px;
          margin-bottom: 6px;
        }

        .contact-detail-text span {
          display: block;
          color: #53665a;
          font-size: 12px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .contact-detail-text small {
          display: block;
          color: #95a198;
          font-size: 10px;
          margin-top: 5px;
        }

        .contact-side-note {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin-top: 25px;
          padding: 19px;
          background: #eaf5ec;
          border-left: 3px solid var(--contact-green);
          border-radius: 3px;
        }

        .contact-side-note svg {
          flex-shrink: 0;
          color: var(--contact-green);
        }

        .contact-side-note p {
          color: #496151;
          font-size: 11px;
          line-height: 1.8;
          margin: 0;
        }

        /* FORM */

        .contact-form {
          padding: 39px;
          background: white;
          border: 1px solid #e5ece6;
          border-radius: 9px;
          box-shadow: 0 15px 45px rgba(12,65,37,.06);
        }

        .contact-form-heading {
          margin-bottom: 28px;
          padding-bottom: 23px;
          border-bottom: 1px solid #edf1ed;
        }

        .contact-form-heading span {
          display: inline-block;
          color: var(--contact-green);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .contact-form-heading h2 {
          color: var(--contact-dark);
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -.8px;
          margin: 0 0 8px;
        }

        .contact-form-heading p {
          color: var(--contact-muted);
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .contact-field {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .contact-field-full {
          grid-column: 1 / -1;
        }

        .contact-field label {
          color: #263f30;
          font-size: 12px;
          font-weight: 750;
        }

        .contact-field label span {
          color: #df5d5d;
          margin-left: 3px;
        }

        .contact-field input,
        .contact-field select,
        .contact-field textarea {
          width: 100%;
          min-width: 0;
          padding: 13px 14px;
          border: 1px solid #dfe8e0;
          border-radius: 5px;
          background: #fbfdfb;
          color: #183627;
          font-size: 12px;
          outline: none;
          transition: border-color .25s ease, box-shadow .25s ease, background .25s ease;
        }

        .contact-field input,
        .contact-field select {
          height: 47px;
        }

        .contact-field textarea {
          min-height: 125px;
          resize: vertical;
          line-height: 1.7;
        }

        .contact-field input::placeholder,
        .contact-field textarea::placeholder {
          color: #a0aaa2;
        }

        .contact-field input:focus,
        .contact-field select:focus,
        .contact-field textarea:focus {
          border-color: var(--contact-green);
          background: white;
          box-shadow: 0 0 0 3px rgba(22,132,71,.09);
        }

        .contact-submit {
          width: 100%;
          min-height: 51px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 11px;
          margin-top: 22px;
          border: 1px solid var(--contact-green);
          border-radius: 5px;
          background: var(--contact-green);
          color: white;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition: .3s ease;
        }

        .contact-submit:hover {
          background: #075b32;
          border-color: #075b32;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(22,132,71,.2);
        }

        .contact-form-footnote {
          margin: 14px 0 0;
          color: #95a198;
          font-size: 10px;
          line-height: 1.7;
          text-align: center;
        }

        .contact-success {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 15px;
          margin-top: 18px;
          border: 1px solid #cce8d2;
          border-radius: 5px;
          background: #eef9f0;
          color: #17643a;
          font-size: 12px;
          line-height: 1.7;
        }

        .contact-success svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* BOTTOM CTA */

        .contact-bottom {
          padding: 58px 0;
          background: #073b27;
          color: white;
        }

        .contact-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .contact-bottom h2 {
          color: white;
          font-size: clamp(23px, 3vw, 32px);
          line-height: 1.25;
          margin: 0 0 9px;
          letter-spacing: -.8px;
        }

        .contact-bottom p {
          color: rgba(255,255,255,.72);
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
        }

        .contact-bottom-link {
          flex-shrink: 0;
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 20px;
          background: #a6d84b;
          border: 1px solid #a6d84b;
          border-radius: 4px;
          color: #123c25;
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
          transition: .3s ease;
        }

        .contact-bottom-link:hover {
          background: white;
          border-color: white;
          transform: translateY(-3px);
        }

        /* FLOATING WHATSAPP */

        .whatsapp-float {
          position: fixed;
          right: 25px;
          bottom: 25px;
          z-index: 99999;
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 50px;
          background: #25d366;
          color: white;
          text-decoration: none;
          box-shadow: 0 5px 22px rgba(37,211,102,.35);
          transition: width .3s ease, background .3s ease, transform .3s ease;
          animation: whatsappPulse 2.2s infinite;
        }

        .whatsapp-float svg {
          width: 31px;
          height: 31px;
          flex-shrink: 0;
        }

        .whatsapp-float span {
          display: none;
          white-space: nowrap;
          font-size: 13px;
          font-weight: 750;
        }

        .whatsapp-float:hover {
          width: 165px;
          background: #128c7e;
          transform: translateY(-3px);
        }

        .whatsapp-float:hover span {
          display: inline;
        }

        @keyframes whatsappPulse {
          0%, 100% {
            box-shadow: 0 5px 22px rgba(37,211,102,.35);
          }
          50% {
            box-shadow: 0 5px 30px rgba(37,211,102,.65);
          }
        }

        /* ANIMATIONS */

        @keyframes contactReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactHeroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        @keyframes contactGlow {
          from {
            opacity: .5;
            transform: scale(.9);
          }
          to {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        /* TABLET */

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .contact-information {
            max-width: 700px;
          }

          .contact-detail-list {
            grid-template-columns: repeat(3, 1fr);
          }

          .contact-detail {
            flex-direction: column;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .contact-container {
            width: calc(100% - 34px);
          }

          .contact-hero {
            min-height: 390px;
          }

          .contact-hero-image {
            background-position: 60% center;
          }

          .contact-hero-content {
            padding: 75px 0 90px;
          }

          .contact-hero h1 {
            font-size: 43px;
            letter-spacing: -1.8px;
          }

          .contact-hero p {
            font-size: 13px;
          }

          .contact-hero-bottom-inner {
            gap: 17px;
            flex-wrap: wrap;
            font-size: 10px;
          }

          .contact-main {
            padding: 65px 0;
          }

          .contact-layout {
            gap: 35px;
          }

          .contact-information h2 {
            font-size: 34px;
          }

          .contact-detail-list {
            grid-template-columns: 1fr;
          }

          .contact-detail {
            flex-direction: row;
          }

          .contact-form {
            padding: 25px 20px;
          }

          .contact-form-heading h2 {
            font-size: 25px;
          }

          .contact-form-grid {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .contact-field-full {
            grid-column: auto;
          }

          .contact-bottom {
            padding: 43px 0;
          }

          .contact-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .whatsapp-float {
            right: 16px;
            bottom: 18px;
            width: 58px;
            height: 58px;
          }

          .whatsapp-float:hover {
            width: 58px;
          }

          .whatsapp-float:hover span {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loom-contact *,
          .loom-contact *::before,
          .loom-contact *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-image" />
        <div className="contact-hero-glow" />

        <div className="contact-container">
          <div className="contact-hero-content">
            <div className="contact-eyebrow">
              <Sun size={15} />
              CONTACT LOOM SOLAR
            </div>

            <h1>
              Let's Talk
              <span>Solar.</span>
            </h1>

            <p>
              Every great energy journey begins with a conversation.
              Tell us what you need and let's explore the possibilities
              of clean solar energy together.
            </p>
          </div>
        </div>

        <div className="contact-hero-bottom">
          <div className="contact-container contact-hero-bottom-inner">
            <span><Sun size={17} /> Clean Energy</span>
            <span><Leaf size={17} /> Sustainable Future</span>
            <span><MessageSquare size={17} /> Let's Connect</span>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="contact-main">
        <div className="contact-container contact-layout">

          <div className="contact-information">
            <span className="contact-section-label">
              GET IN TOUCH
            </span>

            <h2>
              Start Your
              <br />
              <span>Solar Journey.</span>
            </h2>

            <p>
              Have a question or planning a solar project? Share your
              requirements with us. Our team looks forward to hearing
              from you.
            </p>

            <div className="contact-detail-list">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="contact-detail" key={item.title}>
                    <div className="contact-detail-icon">
                      <Icon size={22} />
                    </div>

                    <div className="contact-detail-text">
                      <strong>{item.title}</strong>
                      <span>{item.value}</span>
                      <small>{item.description}</small>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-side-note">
              <Clock size={21} />
              <p>
                Share your requirements through the enquiry form.
                Official contact details can be added once confirmed
                by the LOOM SOLAR team.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <span>LET'S CONNECT</span>
              <h2>Send An Enquiry</h2>
              <p>
                Fill in your details and tell us what kind of solar
                solution you are looking for.
              </p>
            </div>

            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Full Name <span>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email Address <span>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-interest">
                  Interested In
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option>Residential Solar</option>
                  <option>Commercial Solar</option>
                  <option>Industrial Solar</option>
                  <option>Solar Products</option>
                  <option>Energy Storage</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-message">
                  Your Requirements <span>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your location, energy needs and project requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="contact-submit">
              Send Enquiry <Send size={17} />
            </button>

            <p className="contact-form-footnote">
              Your information is collected for enquiry demonstration only.
            </p>

            {submitted && (
              <div className="contact-success" role="status">
                <CheckCircle2 size={20} />
                <span>
                  Thank you, {formData.name}! Your form has been
                  validated successfully. This is a demonstration form
                  and is not connected to a server, so your enquiry
                  has not actually been sent.
                </span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contact-bottom">
        <div className="contact-container contact-bottom-inner">
          <div>
            <h2>Let's Build A Greener Tomorrow.</h2>
            <p>
              Explore the possibilities of solar energy with LOOM SOLAR.
            </p>
          </div>

          <Link to="/solutions" className="contact-bottom-link">
            Explore Our Solutions <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* FLOATING WHATSAPP CHAT */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with LOOM SOLAR on WhatsApp"
        title="Chat with LOOM SOLAR"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M16 3.2C8.9 3.2 3.2 8.8 3.2 15.8c0 2.3.6 4.5 1.8 6.4L3.2 28.8l6.8-1.8c1.8 1 3.9 1.5 6 1.5h.1c7.1 0 12.8-5.7 12.8-12.7 0-3.4-1.3-6.5-3.7-8.9A12.7 12.7 0 0 0 16 3.2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12.2 10.2c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.5 1.5-1.5 3.6s1.5 4.2 1.7 4.5c.2.3 2.9 4.6 7.1 6.2 3.5 1.4 4.2 1.1 5 .9.8-.1 2.6-1.1 2.9-2.1.4-1 .4-1.9.2-2.1-.1-.2-.4-.3-.8-.5l-2.7-1.3c-.4-.2-.7-.2-1 .2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.3-1.2-2.2-2.7-2.5-3.1-.3-.4 0-.7.2-.9.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7l-1.2-2.7Z"
            fill="currentColor"
          />
        </svg>

        <span>Chat with us</span>
      </a>
    </main>
  );
}
