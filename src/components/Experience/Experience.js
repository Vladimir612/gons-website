import { BsLinkedin } from "react-icons/bs";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../globalClasses.scss";

import * as styles from "./experience.module.scss";
import Title from "../SubComponents/Title";

const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dotsClass: "custom-slick-dots",
    className: "custom-slick-slider-exp",
    arrows: false,
    customPaging: () => <div></div>,
  };

  return (
    <div id="experience" className={`${styles.root} padding-global`}>
      <div className={styles.dashedArrow}>
        <div className={styles.first}></div>
      </div>
      <Slider {...settings}>
        <div className={styles.card}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qyHyFsT7Hig?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <a
            href="https://www.linkedin.com/in/vladimir-lazarevic/"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin size={40} className={styles.linkedin} color="#ED1B34" />
          </a>
        </div>
        <div className={styles.card}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qyHyFsT7Hig?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <a
            href="https://www.linkedin.com/in/vladimir-lazarevic/"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin size={40} className={styles.linkedin} color="#ED1B34" />
          </a>
        </div>
        <div className={styles.card}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qyHyFsT7Hig?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <a
            href="https://www.linkedin.com/in/vladimir-lazarevic/"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin size={40} className={styles.linkedin} color="#ED1B34" />
          </a>
        </div>
        <div className={styles.card}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qyHyFsT7Hig?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <a
            href="https://www.linkedin.com/in/vladimir-lazarevic/"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin size={40} className={styles.linkedin} color="#ED1B34" />
          </a>
        </div>
      </Slider>

      <div className={styles.right}>
        <Title>Experience</Title>
        <p>
          Our expertise varies from building custom e-commerce, CRM, 2-sided
          marketplace solutions and many other WEB and mobile applications, over
          financial and trading platforms and crypto exchanges, to creation of
          new blockchain tokens and web3 products.
        </p>
      </div>
    </div>
  );
};

export default Experience;
