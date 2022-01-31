import { useGlobalContext } from "../context";
import Nav from "./Nav";
import svgLogo from "../images/svgs/svg-logo.svg";
import svgInstagram from "../images/svgs/svg-instagram.svg";
import svgTwitter from "../images/svgs/svg-twitter.svg";
import svgAwards from "../images/svgs/svg-awards.svg";
import svgWebflow from "../images/svgs/svg-webflow.svg";

function Menu() {
  const { showMenu } = useGlobalContext();

  return (
    <div className={`menu ${showMenu ? "show" : ""}`}>
      <Nav />
      <aside>
        <div className="contact">
          <div className="cursor-circle-change">
            <span className="visually-hidden">phone number</span>
            123-345-6789
          </div>
          <div className="cursor-circle-change">
            <span className="visually-hidden">email address</span>
            agency@digitaldesign.com
          </div>
        </div>
        <div className="media-links">
          <a href="#" className="cursor-circle-change">
            <span className="visually-hidden">instagram link</span>
            <img src={svgInstagram} alt="" className="link-1" />
          </a>
          <a href="#" className="cursor-circle-change">
            <span className="visually-hidden">twitter link</span>
            <img src={svgTwitter} alt="" className="link-2" />
          </a>
          <a href="#" className="cursor-circle-change">
            <span className="visually-hidden">awards link</span>
            <img src={svgAwards} alt="" className="link-3" />
          </a>
          <a href="#" className="cursor-circle-change">
            <span className="visually-hidden">webflow link</span>
            <img src={svgWebflow} alt="" className="link-4" />
          </a>
        </div>
        <div className="logo-wrapper cursor-circle-change">
          <img src={svgLogo} alt="" />
        </div>
      </aside>
    </div>
  );
}

export default Menu;
