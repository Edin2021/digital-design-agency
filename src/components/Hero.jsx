import React, { useEffect, useState } from "react";
import h1Img1 from "../images/hero-images-1/img1.jpeg";
import h1Img2 from "../images/hero-images-1/img2.jpg";
import h1Img3 from "../images/hero-images-1/img3.jpeg";
import h1Img4 from "../images/hero-images-1/img4.jpeg";
import h1Img5 from "../images/hero-images-1/img5.jpg";
import h1Img6 from "../images/hero-images-1/img6.jpeg";

import h2Img1 from "../images/hero-images-2/img1.jpeg";
import h2Img2 from "../images/hero-images-2/img2.jpg";
import h2Img3 from "../images/hero-images-2/img3.jpg";
import h2Img4 from "../images/hero-images-2/img4.jpeg";
import h2Img5 from "../images/hero-images-2/img5.jpeg";
import h2Img6 from "../images/hero-images-2/img6.jpeg";

import h3Img1 from "../images/hero-images-3/img1.jpeg";
import h3Img2 from "../images/hero-images-3/img2.jpg";
import h3Img3 from "../images/hero-images-3/img3.jpeg";
import h3Img4 from "../images/hero-images-3/img4.jpg";
import h3Img5 from "../images/hero-images-3/img5.jpeg";
import h3Img6 from "../images/hero-images-3/img6.jpg";

import h4Img1 from "../images/hero-images-4/img1.jpg";
import h4Img2 from "../images/hero-images-4/img2.jpeg";
import h4Img3 from "../images/hero-images-4/img3.jpeg";
import h4Img4 from "../images/hero-images-4/img4.jpeg";
import h4Img5 from "../images/hero-images-4/img5.jpeg";
import h4Img6 from "../images/hero-images-4/img6.jpeg";

import ArrowComp from "./ArrowComp";

function Hero() {
  const [count, setCount] = useState(1);

  const [imgCount1, setImgCount1] = useState(0);
  const [imgCount2, setImgCount2] = useState(0);
  const [imgCount3, setImgCount3] = useState(0);
  const [imgCount4, setImgCount4] = useState(0);

  const heroImages1 = [h1Img1, h1Img2, h1Img3, h1Img4, h1Img5, h1Img6];

  const heroImages2 = [h2Img1, h2Img2, h2Img3, h2Img4, h2Img5, h2Img6];

  const heroImages3 = [h3Img1, h3Img2, h3Img3, h3Img4, h3Img5, h3Img6];

  const heroImages4 = [h4Img1, h4Img2, h4Img3, h4Img4, h4Img5, h4Img6];

  const allEqual =
    imgCount1 === count &&
    imgCount2 === count &&
    imgCount3 === count &&
    imgCount4 === count;

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgCount1 !== count) {
        setImgCount1((prevState) => count);
      }
      if (imgCount1 === count && imgCount2 !== count) {
        setImgCount2((prevState) => count);
      }
      if (imgCount2 === count && imgCount3 !== count) {
        setImgCount3((prevState) => count);
      }
      if (imgCount3 === count && imgCount4 !== count) {
        setImgCount4((prevState) => count);
      }
    }, 500);

    // if all images are changed to the next one, increase count
    if (allEqual) {
      if (count < heroImages1.length - 1) {
        setCount((prevState) => prevState + 1);
      } else if (count === heroImages1.length - 1) {
        setCount(0);
      }
    }
    return () => clearInterval(interval);
  }, [count, imgCount1, imgCount2, imgCount3, imgCount4]);

  return (
    <section className="hero">
      <h1>
        <div className="row">
          <div className="img-wrapper">
            <img src={heroImages1[imgCount1]} alt="" />
          </div>
          <span className="text">
            <span className="inner-text medium-slide">high</span>
          </span>
        </div>
        <div className="row">
          <span className="text ">
            <span className="inner-text reverse-slide medium-slide">end</span>
          </span>
          <div className="img-wrapper">
            <img src={heroImages2[imgCount2]} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="img-wrapper">
            <img src={heroImages3[imgCount3]} alt="" />
          </div>
          <span className="text">
            <span className="inner-text reverse-slide medium-slide">
              digital
            </span>
          </span>
          <div className="img-wrapper">
            <img src={heroImages4[imgCount4]} alt="" />
          </div>
        </div>
        <div className="row">
          <span className="text">
            <span className="inner-text medium-slide">experiences</span>
          </span>
          <div className="img-wrapper">
            <ArrowComp />
          </div>
        </div>
        <div className="small-print-wrapper">
          <span className="small-print">
            <span>*</span> Great design services — without the pretentiousness.
          </span>
        </div>
      </h1>
    </section>
  );
}

export default Hero;
