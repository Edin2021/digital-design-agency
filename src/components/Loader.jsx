import React from "react";
import svgLogo from "../images/svgs/svg-logo.svg";

function Loader() {
  return (
    <div className="loader">
      <img src={svgLogo} alt="" />
    </div>
  );
}

export default Loader;
