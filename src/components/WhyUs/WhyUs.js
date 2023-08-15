import React from "react";
import * as styles from "./whyUs.module.scss";
import "../../globalClasses.scss";
import WhyCard from "../SubComponents/WhyCard";
import Title from "../SubComponents/Title";

const WhyUs = () => {
  return (
    <div
      id="whyUs"
      className={styles.root + " padding-global"}
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <Title>Why Us?</Title>
      <div className={styles.cards}>
        <div className={styles.dashedArrow}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
        </div>
        <WhyCard
          img="puzzle"
          title="Perfect match on demand"
          text="keep flexibility engaged team according to your current needs and scale it up or down as your project grows."
        />
        <WhyCard
          img="savings"
          title="Cost-efficiency"
          text="keep high quality development standards while optimizing costs based on remote work and geolocation"
        />
        <WhyCard
          img="handshake"
          title="Leverage on reliable partners"
          text="build long-term connections with nearshoring partner matching your values who already has a strong network of talents"
        />
      </div>
    </div>
  );
};

export default WhyUs;
