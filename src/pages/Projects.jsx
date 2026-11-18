
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageBanner from "../components/PageBanner";

const projects = [
  {
    name: "Residential Solar Concept",
    category: "Residential",
    image: "photo-1600585154340-be6161a56a0c"
  },
  {
    name: "Commercial Solar Concept",
    category: "Commercial",
    image: "photo-1486406146926-c627a92ad1ab"
  },
  {
    name: "Industrial Solar Concept",
    category: "Industrial",
    image: "photo-1497435334941-8c899ee9e8e9"
  },
  {
    name: "Renewable Energy Concept",
    category: "Renewable Energy",
    image: "photo-1509391366360-2e959784a276"
  }
];

export default function Projects() {
  return (
    <>
      <PageBanner
        eyebrow="OUR PROJECTS"
        title="Progress Powered By The Sun."
        description="Explore examples of solar applications across different sectors."
      />

      <section className="section-pad">
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <img
                src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=900&q=75`}
                alt={project.name}
                loading="lazy"
                width="900"
                height="600"
              />

              <div>
                <span>{project.category}</span>
                <h3>{project.name}</h3>
                <Link to="/contact" aria-label={`Enquire about ${project.name}`}>
                  <ArrowUpRight/>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="project-disclaimer">
          Illustrative project concepts. These are not verified completed installations.
        </p>
      </section>
    </>
  );
}
