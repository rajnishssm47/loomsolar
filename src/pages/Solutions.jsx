
import { Link } from "react-router-dom";
import { Home, Building2, Factory, ArrowUpRight } from "lucide-react";
import PageBanner from "../components/PageBanner";

const data = [
  {
    icon: Home,
    title: "Residential Solar",
    text: "Explore solar energy possibilities for homes and residential buildings."
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    text: "Solar energy options for offices, shops and commercial spaces."
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    text: "Explore scalable solar energy options for industrial facilities."
  }
];

export default function Solutions() {
  return (
    <>
      <PageBanner
        eyebrow="SOLAR SOLUTIONS"
        title="Clean Energy For Every Space."
        description="Renewable energy possibilities for homes, businesses and industries."
      />

      <section className="section-pad">
        <div className="solution-grid">
          {data.map(({ icon: Icon, title, text }) => (
            <article className="solution-card" key={title}>
              <Icon size={42}/>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link to="/contact">
                Discuss Requirements <ArrowUpRight size={16}/>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
