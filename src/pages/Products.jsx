
import { Sun, Zap, BatteryCharging, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";

const items = [
  {
    icon: Sun,
    title: "Solar Panels",
    text: "Explore photovoltaic technology designed to convert sunlight into electricity."
  },
  {
    icon: Zap,
    title: "Solar Inverters",
    text: "Discover inverter solutions for efficient solar power conversion."
  },
  {
    icon: BatteryCharging,
    title: "Solar Batteries",
    text: "Explore energy storage options for flexible power usage."
  },
  {
    icon: ShieldCheck,
    title: "Solar Accessories",
    text: "Explore components that support a complete solar installation."
  }
];

export default function Products() {
  return (
    <>
      <PageBanner
        eyebrow="OUR PRODUCTS"
        title="Smarter Solar Technology."
        description="Explore solar product categories for modern energy requirements."
      />

      <section className="section-pad">
        <div className="product-grid product-grid-four">
          {items.map(({ icon: Icon, title, text }) => (
            <article className="info-card" key={title}>
              <span className="card-icon"><Icon size={29}/></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link to="/contact" className="text-link">
                Product Enquiry →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="product-cta section-pad">
        <h2>Find The Right Solar Product.</h2>
        <p>Tell us about your energy requirements.</p>
        <Link to="/contact" className="btn-primary">Request Enquiry →</Link>
      </section>
    </>
  );
}
