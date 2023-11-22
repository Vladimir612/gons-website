import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Slider from "react-slick";
import Title from "../SubComponents/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../globalClasses.scss";

import * as styles from "./ourServices.module.scss";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <div id="services" className={styles.root}>
      <Title padding={true}>{t("servicesTitle")}</Title>
      <Slider {...settings}>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <div className={styles.left}>
            <h2 className={styles.heading}>{t("servicesFirstTitle")}</h2>
            <div className={styles.underline}></div>
            <p className={styles.text}>{t("servicesFirstText")}</p>
          </div>

          <GatsbyImage
            image={data.prOut.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "contain", objectPosition: "left" }}
            loading="eager"
            alt={t("servicesFirstTitle")}
            className={styles.imgWrapper}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <div className={styles.left}>
            <h2 className={styles.heading}>{t("servicesSecondTitle")}</h2>
            <div className={styles.underline}></div>
            <p className={styles.text}>{t("servicesSecondText")}</p>
          </div>

          <GatsbyImage
            image={data.teamOut.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "contain", objectPosition: "left" }}
            loading="eager"
            alt={t("servicesSecondTitle")}
            className={styles.imgWrapper}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <div className={styles.left}>
            <h2 className={styles.heading}>{t("servicesThirdTitle")}</h2>
            <div className={styles.underline}></div>
            <p className={styles.text}>{t("servicesThirdText")}</p>
          </div>

          <GatsbyImage
            image={data.staffing.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "contain", objectPosition: "left" }}
            loading="eager"
            alt={t("servicesThirdTitle")}
            className={styles.imgWrapper}
          />
        </div>
      </Slider>
    </div>
  );
};

export default OurServices;
