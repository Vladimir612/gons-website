import React from "react";
import * as styles from "./hero.module.scss";
import "../../globalClasses.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.parent}>
        <video autoPlay loop muted playsInline>
          <source src="/videos/heroVideo.mp4" type="video/mp4" />
          Vaš pretraživač ne podržava prikazivanje videa.
        </video>
        <div className={styles["topLayer"] + " padding-global"}>
          <p className={styles.first}>Swiss based nearshoring provider for</p>
          <h1>PREMIUM IT SOLUTIONS</h1>
          <p>Go nearshoring and book a discovery</p>
          <div style={{ position: "relative" }}>
            <AnchorLink to="/#contact">
              <button>Contact us</button>
            </AnchorLink>

            <div className={styles.dashedArrow}>
              <div className={styles.first}></div>
              <div className={styles.second}></div>
            </div>
          </div>
          <div className={styles.flexRow}>
            <span>Trusted by </span>
            <div className={styles.companies}>
              <div className={styles.circle}>
                <img src="images/first.svg" alt="swiss" />
              </div>
              <div className={styles.circle}>
                <img src="images/second.svg" alt="swiss" />
              </div>
              <div className={styles.circle}>
                <img src="images/third.svg" alt="swiss" />
              </div>
              <div className={styles.circle}>
                <img src="images/fourth.svg" alt="swiss" />
              </div>
            </div>
            <span> and dozens of other companies</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
