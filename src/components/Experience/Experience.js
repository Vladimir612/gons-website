import { BsLinkedin } from "react-icons/bs";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

import "../../globalClasses.scss";

import * as styles from "./experience.module.scss";
import Title from "../SubComponents/Title";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { useState } from "react";

const Experience = () => {
  const [iframeLink, setIframeLink] = useState("");
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
    <>
      {iframeLink !== "" && (
        <div className={styles.modalParent}>
          <div className={styles.modal}>
            <AiFillCloseCircle
              size={30}
              color="#fff"
              className={styles.closeBtn}
              onClick={() => setIframeLink("")}
            />
            <iframe
              width="560"
              height="315"
              src={iframeLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div id="experience" className={`${styles.root} padding-global`}>
        <div className={styles.dashedArrow}>
          <div className={styles.first}></div>
        </div>
        <Slider {...settings}>
          <div className={styles.card}>
            <BsFillPlayFill
              className={styles.playIcon}
              size={50}
              onClick={() =>
                setIframeLink(
                  "https://www.youtube.com/embed/n9tw4tIUEoM?si=vGy_2tOVYMMErNff"
                )
              }
            />
            <GatsbyImage
              image={data.first.childImageSharp.gatsbyImageData}
              imgStyle={{ objectFit: "cover" }}
              loading="eager"
              alt="Martin Kloeti"
              className={styles.imgWrapper}
            />
            <a
              href="https://www.linkedin.com/in/kl%C3%B6ti-martin-51a61424/"
              rel="noreferrer"
              target="_blank"
            >
              <div className={styles.linkedin}>
                <h2 className={styles.name}>Martin Kloeti</h2>
                <BsLinkedin className={styles.icon} size={30} />
              </div>
            </a>
          </div>

          <div className={styles.card}>
            <BsFillPlayFill
              className={styles.playIcon}
              size={50}
              onClick={() =>
                setIframeLink(
                  "https://www.youtube.com/embed/n9tw4tIUEoM?si=vGy_2tOVYMMErNff"
                )
              }
            />
            <GatsbyImage
              image={data.first.childImageSharp.gatsbyImageData}
              imgStyle={{ objectFit: "cover" }}
              loading="eager"
              alt="Dr. Elvis Mujagić"
              className={styles.imgWrapper}
            />
            <a
              href="https://www.linkedin.com/in/elvis-mujagic/"
              rel="noreferrer"
              target="_blank"
            >
              <div className={styles.linkedin}>
                <h2 className={styles.name}>Dr. Elvis Mujagić</h2>
                <BsLinkedin className={styles.icon} size={30} />
              </div>
            </a>
          </div>
          <div className={styles.card}>
            <BsFillPlayFill
              className={styles.playIcon}
              size={50}
              onClick={() =>
                setIframeLink(
                  "https://www.youtube.com/embed/n9tw4tIUEoM?si=vGy_2tOVYMMErNff"
                )
              }
            />
            <GatsbyImage
              image={data.first.childImageSharp.gatsbyImageData}
              imgStyle={{ objectFit: "cover" }}
              loading="eager"
              alt="Martin Kloeti"
              className={styles.imgWrapper}
            />
            <a
              href="https://www.linkedin.com/in/kl%C3%B6ti-martin-51a61424/"
              rel="noreferrer"
              target="_blank"
            >
              <div className={styles.linkedin}>
                <h2 className={styles.name}>Martin Kloeti</h2>
                <BsLinkedin className={styles.icon} size={30} />
              </div>
            </a>
          </div>
          <div className={styles.card}>
            <BsFillPlayFill
              className={styles.playIcon}
              size={50}
              onClick={() =>
                setIframeLink(
                  "https://www.youtube.com/embed/n9tw4tIUEoM?si=vGy_2tOVYMMErNff"
                )
              }
            />
            <GatsbyImage
              image={data.first.childImageSharp.gatsbyImageData}
              imgStyle={{ objectFit: "cover" }}
              loading="eager"
              alt="Dr. Elvis Mujagić"
              className={styles.imgWrapper}
            />
            <a
              href="https://www.linkedin.com/in/elvis-mujagic/"
              rel="noreferrer"
              target="_blank"
            >
              <div className={styles.linkedin}>
                <h2 className={styles.name}>Dr. Elvis Mujagić</h2>
                <BsLinkedin className={styles.icon} size={30} />
              </div>
            </a>
          </div>
        </Slider>

        <div className={styles.right}>
          <Title>Experience</Title>
          <p>
            Our expertise varies from building custom e-commerce, CRM, 2-sided
            marketplace solutions and many other WEB and mobile applications,
            over financial and trading platforms and crypto exchanges, to
            creation of new blockchain tokens and web3 products.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
