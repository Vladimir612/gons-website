import React from "react";
import * as styles from "./teamCard.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { FiLinkedin } from "react-icons/fi";

const TeamCard = ({ img, name, linkedin, linkedInLink }) => {
  return (
    <div className={styles.root}>
      <GatsbyImage
        image={img.childImageSharp.gatsbyImageData}
        imgStyle={{ objectFit: "cover" }}
        loading="eager"
        alt={name}
        className={styles.imgWrapper}
      />
      <div className={styles.bottom}>
        <h3>{name}</h3>
        <div className={styles.underline}></div>
        <a href={linkedInLink} rel="noreferrer" target="_blank">
          <FiLinkedin size={18} color="#fff" /> {linkedin}
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
