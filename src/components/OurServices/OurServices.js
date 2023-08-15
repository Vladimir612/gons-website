import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Slider from "react-slick";
import Title from "../SubComponents/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../globalClasses.scss";

import * as styles from "./ourServices.module.scss";

const OurServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "16px",
    dotsClass: "custom-slick-dots",
    className: "custom-slick-slider",
    arrows: false,
    swipeToSlide: true,
    customPaging: () => <div></div>,
  };

  const data = useStaticQuery(graphql`
    query getServicesImages {
      prOut: file(relativePath: { eq: "projectOutsourcing.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      teamOut: file(relativePath: { eq: "teamOutsourcing.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      staffing: file(relativePath: { eq: "staffing.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return (
    <div id="services" className={styles.root}>
      <Title padding={true}>Our services</Title>
      <Slider {...settings}>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <div className={styles.left}>
            <h2 className={styles.heading}>Team outsourcing</h2>
            <div className={styles.underline}></div>
            <p className={styles.text}>
              In this model, based on the specification of roles in an entire
              team, we recruit, onboard and manage the entire team matching
              skillset defined or optimizing the team capabilities to match
              project requirements specified by documentation.
            </p>
          </div>

          <GatsbyImage
            image={data.prOut.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "contain", objectPosition: "left" }}
            loading="eager"
            alt="Project outsourcing"
            className={styles.imgWrapper}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <div className={styles.left}>
            <h2 className={styles.heading}>Team outsourcing</h2>
            <div className={styles.underline}></div>
            <p className={styles.text}>
              In this model, based on the specification of roles in an entire
              team, we recruit, onboard and manage the entire team matching
              skillset defined or optimizing the team capabilities to match
              project requirements specified by documentation.
            </p>
          </div>

          <GatsbyImage
            image={data.teamOut.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "contain", objectPosition: "left" }}
            loading="eager"
            alt="Appelo kalendar"
            className={styles.imgWrapper}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <div className={styles.left}>
            <h2 className={styles.heading}>Team outsourcing</h2>
            <div className={styles.underline}></div>
            <p className={styles.text}>
              In this model, based on the specification of roles in an entire
              team, we recruit, onboard and manage the entire team matching
              skillset defined or optimizing the team capabilities to match
              project requirements specified by documentation.
            </p>
          </div>

          <GatsbyImage
            image={data.staffing.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "contain", objectPosition: "left" }}
            loading="eager"
            alt="Appelo kalendar"
            className={styles.imgWrapper}
          />
        </div>
      </Slider>
    </div>
  );
};

export default OurServices;
