import data from "../data";
import FeaturedProject from "./FeaturedProject";
import { useGlobalContext } from "../context";

function FeaturedWorkSection() {
  const { cover } = useGlobalContext();

  return (
    <section className="featured-work-section">
      <h2 className="fade-only">
        <span>featured</span>
        <span>work</span>
      </h2>
      {data.map((item, i) => (
        <FeaturedProject
          key={i}
          {...item}
          opacity={cover.count === i ? cover.opacity : 0.75}
        />
      ))}
    </section>
  );
}

export default FeaturedWorkSection;
