import { BsLinkedin } from "react-icons/bs";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillPlayFill } from "react-icons/bs";

import "../../globalClasses.scss";

import * as styles from "./experience.module.scss";
import Title from "../SubComponents/Title";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

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

  const data = useStaticQuery(graphql`
    query getExperienceImages {
      first: file(relativePath: { eq: "test.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      second: file(relativePath: { eq: "test.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      third: file(relativePath: { eq: "test.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      fourth: file(relativePath: { eq: "test.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return (
    <div id="experience" className={`${styles.root} padding-global`}>
      <div className={styles.dashedArrow}>
        <div className={styles.first}></div>
      </div>
      <Slider {...settings}>
        <div className={styles.card}>
          <BsFillPlayFill className={styles.playIcon} size={50} />
          <GatsbyImage
            image={data.first.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "cover" }}
            loading="eager"
            alt="Marko Markic"
            className={styles.imgWrapper}
          />
          <a
            href="https://www.linkedin.com/in/vladimir-lazarevic/"
            rel="noreferrer"
            target="_blank"
          >
            <div className={styles.linkedin}>
              <h2 className={styles.name}>Pera Peric</h2>
              <BsLinkedin className={styles.icon} size={30} />
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <BsFillPlayFill className={styles.playIcon} size={50} />
          <GatsbyImage
            image={data.first.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "cover" }}
            loading="eager"
            alt="Marko Markic"
            className={styles.imgWrapper}
          />
          <a
            href="https://www.linkedin.com/in/vladimir-lazarevic/"
            rel="noreferrer"
            target="_blank"
          >
            <div className={styles.linkedin}>
              <h2 className={styles.name}>Konstantin Kole</h2>
              <BsLinkedin className={styles.icon} size={30} />
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <BsFillPlayFill className={styles.playIcon} size={50} />
          <GatsbyImage
            image={data.first.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "cover" }}
            loading="eager"
            alt="Marko Markic"
            className={styles.imgWrapper}
          />
          <a
            href="https://www.linkedin.com/in/vladimir-lazarevic/"
            rel="noreferrer"
            target="_blank"
          >
            <div className={styles.linkedin}>
              <h2 className={styles.name}>Marko Markic</h2>
              <BsLinkedin className={styles.icon} size={30} />
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <BsFillPlayFill className={styles.playIcon} size={50} />
          <GatsbyImage
            image={data.first.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "cover" }}
            loading="eager"
            alt="Marko Markic"
            className={styles.imgWrapper}
          />
          <a
            href="https://www.linkedin.com/in/vladimir-lazarevic/"
            rel="noreferrer"
            target="_blank"
          >
            <div className={styles.linkedin}>
              <h2 className={styles.name}>Iva Po</h2>
              <BsLinkedin className={styles.icon} size={30} />
            </div>
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
