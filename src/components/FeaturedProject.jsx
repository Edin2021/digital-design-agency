import React, { useState } from "react";
import { useGlobalContext } from "../context";

function FeaturedProject({ img, count, name, link, opacity }) {
  const { transform } = useGlobalContext();
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const handleMouseOver = () => {
    setHoverOpacity(0.45);
  };

  const handleMouseOut = () => {
    setHoverOpacity(0);
  };

  let trasnformValues = transform.find((item) => {
    return item.count == count - 1;
  });

  return (
    <div className="project-wrapper">
      <section className="project">
        <div className="project-cover">
          <img
            src={img}
            alt=""
            style={{
              opacity,
              transform: `translateY(${trasnformValues.translate}%) scale(${trasnformValues.scale})`,
            }}
          />
        </div>
        <div
          className="project-hover-cover"
          style={{ opacity: hoverOpacity }}
        ></div>
        <a href={link}>
          <h3
            className="name cursor-circle-change"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <span className="count">{count}/4</span>
            {name}
            <span className="underline"></span>
          </h3>
        </a>
      </section>
    </div>
  );
}

export default FeaturedProject;
