import React from "react";
import * as styles from "./whyUs.module.scss";
import "../../globalClasses.scss";
import WhyCard from "../SubComponents/WhyCard";
import Title from "../SubComponents/Title";
import { useTranslation } from "react-i18next";
import { graphql, useStaticQuery } from "gatsby";

const WhyUs = () => {
  const data = useStaticQuery(graphql`
    query getImagesWhySection {
      puzzle: file(relativePath: { eq: "puzzle.svg" }) {
        publicURL
      }
      savings: file(relativePath: { eq: "savings.svg" }) {
        publicURL
      }
      handshake: file(relativePath: { eq: "handshake.svg" }) {
        publicURL
      }
    }
  `);

  const { t } = useTranslation();

  return (
    <div
      id="whyUs"
      className={styles.root + " padding-global"}
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <Title>{t("whyTitle")}</Title>
      <div className={styles.cards}>
        <div className={styles.dashedArrow}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
        </div>
        <WhyCard
          img={data.puzzle.publicURL}
          title={t("firstCardTitle")}
          text={t("firstCardText")}
        />
        <WhyCard
          img={data.savings.publicURL}
          title={t("secondCardTitle")}
          text={t("secondCardText")}
        />
        <WhyCard
          img={data.handshake.publicURL}
          title={t("thirdCardTitle")}
          text={t("thirdCardText")}
        />
      </div>
    </div>
  );
};

export default WhyUs;
