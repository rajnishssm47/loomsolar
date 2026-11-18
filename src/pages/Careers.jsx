
import { Link } from "react-router-dom";
import { Users, Lightbulb, Leaf, ArrowUpRight } from "lucide-react";
import PageBanner from "../components/PageBanner";

export default function Careers() {
  return (
    <>
      <PageBanner
        eyebrow="CAREERS AT LOOM SOLAR"
        title="Grow With A Greener Future."
        description="Be part of a journey towards a cleaner energy landscape."
      />

      <section className="section-pad">
        <div className="section-heading">
          <span className="eyebrow">OUR CULTURE</span>
          <h2>Build Something <span>Meaningful.</span></h2>
          <p>
            Explore a workplace built around innovation,
            sustainability and collaboration.
          </p>
        </div>

        <div className="solution-grid">
          <article className="info-card">
            <Users/><h3>Teamwork</h3>
            <p>Collaborate and grow with a shared purpose.</p>
          </article>

          <article className="info-card">
            <Lightbulb/><h3>Innovation</h3>
            <p>Explore ideas that support cleaner energy.</p>
          </article>

          <article className="info-card">
            <Leaf/><h3>Impact</h3>
            <p>Contribute to a more sustainable future.</p>
          </article>
        </div>

        <div className="careers-cta">
          <h2>Interested In Joining Us?</h2>
          <p>Contact our team to enquire about career opportunities.</p>
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowUpRight/>
          </Link>
        </div>
      </section>
    </>
  );
}
