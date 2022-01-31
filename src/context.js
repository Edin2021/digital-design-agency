import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";

const AppContext = React.createContext();

const transformPlaceholder = [
  { count: 0, translate: 0, scale: 1 },
  { count: 1, translate: 0, scale: 1 },
  { count: 2, translate: 0, scale: 1 },
  { count: 3, translate: 0, scale: 1 },
];

export default function AppProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("");
  const [showThemeBtn, setShowThemeBtn] = useState(true);
  const [magnetElements, setMagnetElements] = useState("");
  const [allMovableElems, setAllMovableElems] = useState("");
  const [mouseEffects, setMouseEffects] = useState("");
  const [cover, setCover] = useState({ count: 0, opacity: 0.75 });
  const [transform, setTransform] = useState(transformPlaceholder);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const toggleTheme = () => {
    if (theme === "") {
      setTheme((prevState) => "dark-theme");
    } else {
      setTheme((prevState) => "");
    }
  };

  const debounce = (fn, ms) => {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  };

  // Hide loader
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 550);
  }, []);

  // Get elements with magnet effect
  useEffect(() => {
    if (loading) return;
    let elements = [];

    if (magnetElements && magnetElements.length > 0) return;
    const mediaLinks = document.querySelectorAll(".menu aside .media-links a");
    const logoImgSvg = document.querySelector(".menu aside .logo-wrapper img");
    const themeBtn = document.querySelector(".change-theme-btn");

    elements = [...mediaLinks, logoImgSvg, themeBtn];
    setMagnetElements(elements);
  }, [loading]);

  // Get elements with slide effect
  useEffect(() => {
    if (loading) return;
    let elements = [];

    if (allMovableElems && allMovableElems.length > 0) return;
    const heroTexts = document.querySelectorAll(".hero .inner-text");
    const infoTexts = document.querySelectorAll(".info-section .text");
    const infoCircles = document.querySelector(".info-section .slider-circles");
    const bottomInfoTexts = document.querySelectorAll(".fade-only");
    const footerTextRows = document.querySelectorAll("footer .row-text");

    elements = [
      infoCircles,
      ...heroTexts,
      ...infoTexts,
      ...bottomInfoTexts,
      ...footerTextRows,
    ];
    setAllMovableElems(elements);
  }, [loading]);

  useEffect(() => {
    const root = document.getElementsByTagName("html")[0]; // '0' to assign the first (and only `HTML` tag)
    root.setAttribute("class", `${theme}`);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setMouseEffects((prevState) => false);
      } else {
        setMouseEffects((prevState) => true);
      }
    };

    if (mouseEffects === "") handleResize();

    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedHandleResize);

    return () => window.removeEventListener("resize", debouncedHandleResize);
  });

  // ************** MAGNETS **************
  useEffect(() => {
    if (loading) return;
    if (!magnetElements || magnetElements.length === 0) return;

    // The smaller the less magnetic
    let xMp = 0.3;
    let yMp = 0.5;

    const handleMagnet = (e) => {
      magnet(e, xMp, yMp);
    };

    const magnet = (e, xMp, yMp) => {
      const position = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;
      e.currentTarget.style.transform = `translate(${x * xMp}px,${y * yMp}px )`;
    };

    const handleBackToDefault = (e) => {
      backToDefault(e);
    };

    const backToDefault = (e) => {
      e.currentTarget.style.transform = `translate(0px,0px )`;
    };

    if (mouseEffects) {
      magnetElements.forEach((magnetElement) => {
        magnetElement.addEventListener("mousemove", handleMagnet);
        magnetElement.addEventListener("mouseout", handleBackToDefault);
      });
    }

    if (mouseEffects === false) {
      document.querySelector(".video-bubble-wrapper").style.transform =
        "translate(0px, 0px)";
    }

    return () => {
      magnetElements.forEach((magnetElement) => {
        magnetElement.removeEventListener("mousemove", handleMagnet);
      });
    };
  }, [mouseEffects, loading, magnetElements]);

  // ************** OTHER EFFECTS **************
  useEffect(() => {
    if (loading) return;
    const projects = document.querySelectorAll(
      ".featured-work-section > .project-wrapper"
    );

    let projectBB;
    let projectTop;
    let projectHeight;
    let darkenFromHeight;
    let darkenToHeight;
    let firstProjectTop;
    let lastProjectTop;

    const themeBtn = document.querySelector(".change-theme-btn");
    const buttonDisappearDistance = 200;
    const windowHeight = window.innerHeight;

    const handleThemeButton = () => {
      // Hide theme button when over projects
      const themeButtonTop = window.scrollY + themeBtn.offsetTop;
      if (themeButtonTop > firstProjectTop && themeButtonTop < lastProjectTop) {
        themeBtn.classList.add("hide-btn");
      } else {
        themeBtn.classList.remove("hide-btn");
      }
    };

    const handleDetectHeight = () => {
      projects.forEach((project, i) => {
        projectBB = project.getBoundingClientRect();
        projectTop = projectBB.top;
        projectHeight = project.offsetHeight;
        darkenFromHeight = Math.abs(projectTop) > 0;
        darkenToHeight = Math.abs(projectTop) < projectHeight;
        firstProjectTop = projects[0].offsetTop + buttonDisappearDistance;
        lastProjectTop =
          projects[projects.length - 1].offsetTop +
          projectHeight -
          buttonDisappearDistance;

        handleThemeButton();

        // Set fixed position of project images
        if (projectTop <= 0) {
          project.classList.add("fixed-on-scroll");
        } else {
          project.classList.remove("fixed-on-scroll");
        }

        // Darken img on scroll
        if (projectTop < 0 && darkenFromHeight && darkenToHeight) {
          let coverOpacity = (
            (projectHeight + projectTop) * 0.001 +
            0.1
          ).toFixed(2);

          const stopDarken = coverOpacity > 0.75 || coverOpacity < 0.2;
          if (stopDarken) return;

          setCover({ count: i, opacity: coverOpacity });
        }

        // Image zoom and scale effect
        const projectVisible = projectTop - windowHeight < 0;
        const projectCurrScroll = projectTop - windowHeight;
        const projectIsOffscreen =
          projectHeight * 2 < Math.abs(projectCurrScroll);

        if (projectVisible && !projectIsOffscreen) {
          const translateAmount = (projectCurrScroll * 0.005).toFixed(4);
          const scaleAmount = (Math.abs(translateAmount) / 16 + 1).toFixed(4);
          const stopTransform = Math.abs(translateAmount) > 11;
          const stopScale = scaleAmount > 1.65;

          if (stopTransform) return;
          if (stopScale) return;

          setTransform(
            transform.map((item) => {
              if (item.count === i) {
                item.translate = translateAmount;
                item.scale = scaleAmount;
              }
              return item;
            })
          );
        }
      });

      // Text slide effect
      // Video bubble element for hero texts reference
      const videoBubble = document.querySelector(".video-bubble-wrapper");

      allMovableElems.forEach((text) => {
        let textBB = text.getBoundingClientRect();
        let textTop = textBB.top;
        let slideVelocity = 0.007; // Bigger means faster

        // Elements to fade in on scroll set opacity to 0
        if (
          (!text.classList.contains("fade-in") &&
            !text.classList.contains("inner-text")) ||
          text.classList.contains("fade-only")
        ) {
          text.style.opacity = "0";
        }

        // Slide hero text when video bubble reaches ~middle of screen
        if (text.classList.contains("inner-text")) {
          textBB = videoBubble.getBoundingClientRect();
          textTop = textBB.top + 500;
        }

        if (text.classList.contains("long-slide")) {
          slideVelocity = 0.05;
        } else if (text.classList.contains("medium-slide")) {
          slideVelocity = 0.01;
        }

        const textHeight = textBB.height;
        const windowTop = textHeight * -1;
        const elementOnScreen = textTop < windowHeight && textTop > windowTop;
        const elementFullyOnScreen = textTop < windowHeight - textHeight;

        if (elementOnScreen) {
          if (elementFullyOnScreen && !text.classList.contains("inner-text")) {
            text.classList.add("fade-in");
          }

          let slideAmount = ((windowHeight - textTop) * slideVelocity).toFixed(
            4
          );
          if (text.classList.contains("reverse-slide")) {
            slideAmount *= -1;
          }
          if (!text.classList.contains("fade-only")) {
            text.style.transform = `translateX(${slideAmount}%)`;
          }
        }
      });
    };
    window.addEventListener("scroll", handleDetectHeight);

    return () => window.removeEventListener("scroll", handleDetectHeight);
  });

  if (loading) return <Loader />;

  return (
    <AppContext.Provider
      value={{
        toggleMenu,
        showMenu,
        toggleTheme,
        theme,
        showThemeBtn,
        setShowThemeBtn,
        mouseEffects,
        cover,
        setCover,
        transform,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => React.useContext(AppContext);
