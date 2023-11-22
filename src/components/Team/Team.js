import React from "react";
import * as styles from "./team.module.scss";
import "../../globalClasses.scss";

import Title from "../SubComponents/Title";
import TeamCard from "../SubComponents/TeamCard/TeamCard";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "react-i18next";

const Team = () => {
  const data = useStaticQuery(graphql`
    query getTeamImages {
      first: file(relativePath: { eq: "firstMember.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      second: file(relativePath: { eq: "secondMember.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      third: file(relativePath: { eq: "thirdMember.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      fourth: file(relativePath: { eq: "fourthMember.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  const { t } = useTranslation();

  return (
    <div id="team" className={styles.root}>
      <div className={`${styles.flex} padding-global`}>
        <div className={styles.circle}></div>
        <div className={styles.dashedArrow}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
        </div>
        <div className={styles.left}>
          <Title>{t("teamTitle")}</Title>
          <p style={{ marginTop: "2rem" }}>
            <span>{t("teamFirstText").charAt(0)}</span>
            {t("teamFirstText").slice(1)}
          </p>
          <p>
            <span>{t("teamSecondText").charAt(0)}</span>
            {t("teamSecondText").slice(1)}
          </p>
          <p>
            <span>{t("teamThirdText").charAt(0)}</span>
            {t("teamThirdText").slice(1)}
          </p>
        </div>
        <div className={styles.right}>
          <TeamCard
            img={data.first}
            linkedin="/in/bojan-martinović-172357176"
            name="Bojan Martinović"
            linkedInLink="https://www.linkedin.com/in/bojan-martinovi%C4%87-172357176/"
          />
          <TeamCard
            img={data.second}
            linkedin="/in/nikolaburic/"
            name="Nikola Burić"
            linkedInLink="https://www.linkedin.com/in/nikolaburic/"
          />
          <TeamCard
            img={data.third}
            linkedin="/in/nermin-zejnilovic-416661168/"
            name="Nermin Zejnilović"
            linkedInLink="https://www.linkedin.com/in/nermin-zejnilovic-416661168/"
          />
          <TeamCard
            img={data.fourth}
            linkedin="/in/aldin-vrskic-00082060/"
            name="Aldin Vrškić"
            linkedInLink="https://www.linkedin.com/in/aldin-vrskic-00082060/"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
