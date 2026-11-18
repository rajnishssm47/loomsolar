
import { useState } from "react";
import PageBanner from "../components/PageBanner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageBanner
        eyebrow="CONTACT LOOM SOLAR"
        title="Let's Talk Solar."
        description="Tell us about your requirements and explore the right solar solution."
      />

      <section className="section-pad contact-layout">
        <div className="contact-information">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Start Your Solar Journey.</h2>
          <p>Our team is ready to hear about your solar energy requirements.</p>

          <div className="contact-detail">
            <Mail/>
            <div><strong>Email</strong><span>Replace with official email</span></div>
          </div>

          <div className="contact-detail">
            <Phone/>
            <div><strong>Phone</strong><span>Replace with official number</span></div>
          </div>

          <div className="contact-detail">
            <MapPin/>
            <div><strong>Address</strong><span>Replace with registered address</span></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send An Enquiry</h2>

          <label>Full Name
            <input required name="name" placeholder="Enter your name"/>
          </label>

          <label>Email Address
            <input required type="email" name="email" placeholder="Enter your email"/>
          </label>

          <label>Phone Number
            <input type="tel" name="phone" placeholder="Enter your phone number"/>
          </label>

          <label>Interested In
            <select name="interest">
              <option>Residential Solar</option>
              <option>Commercial Solar</option>
              <option>Industrial Solar</option>
              <option>Solar Products</option>
              <option>Other</option>
            </select>
          </label>

          <label>Message
            <textarea required name="message" rows="4" placeholder="Your requirements"/>
          </label>

          <button type="submit" className="btn-primary">
            Send Enquiry <Send size={17}/>
          </button>

          {submitted && (
            <p className="form-notice">
              Thank you! This demonstration form is not connected to a server.
              Your enquiry has not been sent.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
