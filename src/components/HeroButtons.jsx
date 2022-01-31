import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function HeaderButtons() {
  const [lettersDisplayed, setLetterDisplayed] = useState(false);

  const { toggleMenu, toggleTheme, theme, showThemeBtn } = useGlobalContext();

  const showLetters = () => {
    setLetterDisplayed(true);
  };

  const hideLetters = () => {
    setLetterDisplayed(false);
  };

  const handleChars = (chars) => {
    if (chars === true || !chars || chars === "" || chars === " ") return;
    const transformAmount = 100;
    const splitChars = chars.split("");
    const mapedChars = splitChars.map((char, i) => (
      <span
        style={{
          transform: `translateY(${i === 0 ? 0 : transformAmount * i + 5}%)`,
        }}
      >
        {char}
      </span>
    ));
    return mapedChars;
  };

  return (
    <>
      <Link
        to="/"
        className={`agency-name cursor-circle-change ${
          lettersDisplayed ? "show-letters" : ""
        }`}
        onMouseEnter={showLetters}
        onMouseLeave={hideLetters}
      >
        <div className="first">{handleChars("digital")}</div>
        <div className="last">{handleChars("design")}</div>
      </Link>
      <button
        className={`menu-btn cursor-circle-change ${
          lettersDisplayed ? "show-letters" : ""
        }`}
        onMouseEnter={showLetters}
        onMouseLeave={hideLetters}
        onClick={toggleMenu}
      >
        {handleChars("menu")}
      </button>

      <button
        className={`change-theme-btn cursor-circle-change ${theme && theme} ${
          !showThemeBtn ? "hide-btn" : ""
        }`}
        onClick={toggleTheme}
      >
        <span className="visually-hidden">change theme button</span>
        <span className="circle"></span>
      </button>
    </>
  );
}

export default HeaderButtons;
