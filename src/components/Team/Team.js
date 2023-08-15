import React from "react";
import * as styles from "./team.module.scss";
import "../../globalClasses.scss";

import Title from "../SubComponents/Title";
import TeamCard from "../SubComponents/TeamCard/TeamCard";
import { graphql, useStaticQuery } from "gatsby";

const Team = () => {
  const data = useStaticQuery(graphql`
    query getTeamImages {
      first: file(relativePath: { eq: "firstMember.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      second: file(relativePath: { eq: "firstMember.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      third: file(relativePath: { eq: "firstMember.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      fourth: file(relativePath: { eq: "firstMember.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return (
    <div id="team" className={styles.root}>
      <div className={`${styles.flex} padding-global`}>
        <div className={styles.circle}></div>
        <div className={styles.dashedArrow}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
        </div>
        <div className={styles.left}>
          <Title>Our team</Title>
          <p style={{ marginTop: "2rem" }}>
            <span>W</span>e are the team of experienced experts who joined
            together sharing the vision to offer premium service to Swiss and EU
            companies helping them to access the huge potential of talents from
            the Balkans in the right way.
          </p>
          <p>
            <span>O</span>ur core value lies in the experience allowing us to
            find the best match between the project needs and the nearshoring
            party, combined with the strong network of reliable partners that we
            have built during the past 15 years.
          </p>
          <p>
            <span>W</span>e are lead by principles of transparency, reliability
            proactivity and professionalism.
          </p>
        </div>
        <div className={styles.right}>
          <TeamCard
            img={data.first}
            linkedin="/in/marko-petrovic-marketing"
            name="Marko Petrovic"
            linkedInLink="#"
          />
          <TeamCard
            img={data.second}
            linkedin="/in/marko-petrovic-marketing"
            name="Marko Petrovic"
            linkedInLink="#"
          />
          <TeamCard
            img={data.third}
            linkedin="/in/marko-petrovic-marketing"
            name="Marko Petrovic"
            linkedInLink="#"
          />
          <TeamCard
            img={data.fourth}
            linkedin="/in/marko-petrovic-marketing"
            name="Marko Petrovic"
            linkedInLink="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
