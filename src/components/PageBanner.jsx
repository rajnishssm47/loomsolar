
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

export default function PageBanner({ eyebrow, title, description }) {
  return (
    <section className="page-banner">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="breadcrumbs">
          <Link to="/"><Home size={14}/> Home</Link>
          <ChevronRight size={14}/>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
}
