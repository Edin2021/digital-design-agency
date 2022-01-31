import { useRef } from "react";
import svgSmallPrintStar from "../images/svgs/svg-small-print-star.svg";

function InfoSection() {
  const sliderCirclesRef = useRef(null);

  const handleAnimationEnd = (e) => {
    e.target.classList.remove("flip");
    e.target.removeEventListener("animationend", handleAnimationEnd);
  };

  const flipCircle = (e) => {
    // console.log(sliderCirclesRef.current);

    const allCircles = e.currentTarget.children;
    for (let circle of allCircles) {
      if (circle === e.target) {
        if (!circle.classList.contains("flip")) {
          circle.classList.add("flip");
          circle.addEventListener("animationend", handleAnimationEnd);
        }
      }
    }
  };

  return (
    <section className="info-section">
      <h2>
        <div className="row">
          <span className="text reverse-slide">we'll</span>
        </div>
        <div className="row">
          <span className="text">help you</span>
        </div>
        <div className="row">
          <span className="text reverse-slide">stand out</span>
        </div>
        <div
          ref={sliderCirclesRef}
          className="slider-circles reverse-slide long-slide"
          onClick={flipCircle}
        >
          <div className="circle-round"></div>
          <div className="circle-round"></div>
          <div className="circle-round"></div>
          <div className="circle-round"></div>
          <div className="circle-stretched"></div>
          <div className="circle-round"></div>
          <div className="circle-round"></div>
          <div className="circle-round"></div>
          <div className="circle-round"></div>
          <div className="circle-round"></div>
          <div className="circle-round"></div>
          <div className="circle-round"></div>
          <div className="circle-round"></div>
        </div>
        <div className="row">
          <span className="text">&amp; make </span>
          <span className="text">all</span>
        </div>
        <div className="row">
          <span className="text">your dreams</span>
        </div>
        <div className="row">
          <span className="text reverse-slide">
            come true <span className="star">*</span>
          </span>
        </div>
      </h2>
      <div className="bottom-info-wrapper">
        <span className="small-print fade-only">
          * As long as your dreams revolve around something like; being the
          proud owner of a spectacular website.
        </span>
        <p className="fade-only">
          <span> Digital Design is a design practice</span>
          focused on digital experiences. With every <br /> single one of our
          clients, we bring forth a<br /> deep passion for creative problem
          solving
          <br /> — which is what we deliver in the form of
          <br /> custom and memorable experiences.
        </p>
      </div>
    </section>
  );
}

export default InfoSection;
