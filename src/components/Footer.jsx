import { useRef } from "react";
import ArrowComp from "./ArrowComp";

function Footer() {
  const footerRef = useRef(null);

  const handleElems = (amount) => {
    const elem = (
      <>
        <span className="text">about</span>
        <ArrowComp />
      </>
    );
    const elems = [];
    for (let i = 0; i < amount; i++) {
      elems.push(elem);
    }
    return elems;
  };

  return (
    <footer ref={footerRef}>
      <div className="slider-about cursor-circle-change">
        <a href="#about">
          <div className="row row-text long-slide">{handleElems(6)}</div>
          <div className="row row-text reverse-slide long-slide">
            {handleElems(9)}
          </div>
        </a>
      </div>
      <div className="bubble-about">
        <a href="#about">about</a>
      </div>
      <div className="footer-branding">
        <div className="row">
          <span className="text"> branding</span>
          <span className="amplified-and-mark">&amp;</span>
          <span className="text"> digital experiences</span>
        </div>
        <div className="copyright-policies">
          <span>
            {" "}
            &copy;{new Date().getFullYear()} agency design inc. - all rights
            reserved
          </span>
          <a href="#privacy-policy">privacy policiy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
