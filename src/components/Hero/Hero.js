import React from "react";
import * as styles from "./hero.module.scss";
import "../../globalClasses.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useTranslation } from "react-i18next";
import { graphql, useStaticQuery } from "gatsby";

export default function Hero() {
  const data = useStaticQuery(graphql`
    query getCompaniesLogos {
      first: file(relativePath: { eq: "first.svg" }) {
        publicURL
      }
      second: file(relativePath: { eq: "second.svg" }) {
        publicURL
      }
      third: file(relativePath: { eq: "third.svg" }) {
        publicURL
      }
      fourth: file(relativePath: { eq: "fourth.svg" }) {
        publicURL
      }
    }
  `);
  const { t } = useTranslation();

  console.log(data);

  return (
    <main className={styles.hero}>
      <div className={styles.parent}>
        <video autoPlay loop muted playsInline>
          <source src="/videos/heroVideo.mp4" type="video/mp4" />
          Your browser doesn't support videos
        </video>
        <div className={styles["topLayer"] + " padding-global"}>
          <p className={styles.first}>{t("heroPreHeading")}</p>
          <h1>{t("heroHeading")}</h1>
          <p>{t("heroAfterHeading")}</p>
          <div style={{ position: "relative" }}>
            <AnchorLink to="#contact">
              <button>{t("heroButton")}</button>
            </AnchorLink>

            <div className={styles.dashedArrow}>
              <div className={styles.first}></div>
              <div className={styles.second}></div>
            </div>
          </div>
          <div className={styles.flexRow}>
            <span>{t("heroAfterButtonFist")} </span>
            <div className={styles.companies}>
              <div className={styles.circle}>
                <img src={data.first.publicURL} alt="company 1" />
              </div>
              <div className={styles.circle}>
                <img src={data.second.publicURL} alt="company 2" />
              </div>
              <div className={styles.circle}>
                <img src={data.third.publicURL} alt="company 3" />
              </div>
              <div className={styles.circle}>
                <img src={data.fourth.publicURL} alt="company 4" />
              </div>
            </div>
            <span> {t("heroAfterButtonSecond")}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
