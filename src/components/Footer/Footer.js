import React from "react";
import * as styles from "./footer.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className={`${styles.footer} padding-global`}>
      <div className={styles.circle}></div>
      <div className={styles.left}>
        <StaticImage
          src="../../images/logoWhite.png"
          alt="Gons logo white"
          className={styles.logo}
        />
      </div>
      <div>
        <p className={styles.text}>Copyright &copy; 2023 Gons</p>
      </div>
    </footer>
  );
};

export default Footer;
