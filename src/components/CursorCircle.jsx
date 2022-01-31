import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

function CursorCircle() {
  const { mouseEffects } = useGlobalContext();
  const [mousePos, setMousePos] = useState({});
  const [circleExpand, setCircleExpand] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let elems = document.querySelectorAll(".cursor-circle-change");
    if (mouseEffects) {
      elems.forEach((elem) => {
        elem.onmouseenter = () => {
          setCircleExpand((prevState) => true);
        };
        elem.onmouseleave = () => {
          setCircleExpand((prevState) => false);
        };
      });
    } else {
      setCircleExpand(false);
    }
  });
  useEffect(() => {
    const getMousePos = (e) => {
      setMousePos((prevState) => ({
        ...prevState,
        posX: e.clientX,
        posY: e.clientY,
      }));
      // Video bubble magnet effect
      const videoBubble = document.querySelector(".video-bubble-wrapper");
      const position = videoBubble.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;
      videoBubble.style.transform = `translate(${x * 0.04}px,${y * 0.07}px )`;
    };
    if (mouseEffects) {
      document.addEventListener("mousemove", getMousePos);
    }
    return () => {
      document.removeEventListener("mousemove", getMousePos);
    };
  });

  useEffect(() => {
    if (mouseEffects) {
      document.onmouseleave = () => {
        setHide((prevState) => true);
      };
      document.onmouseenter = () => {
        setHide((prevState) => false);
      };
    }
  });
  if (!mouseEffects) return <></>;

  return (
    <div
      className={`cursor-circle ${circleExpand ? "circle-expand" : ""} ${
        hide ? "hidden" : ""
      }`}
      style={{ left: `${mousePos.posX}px`, top: `${mousePos.posY}px` }}
    ></div>
  );
}

export default CursorCircle;
