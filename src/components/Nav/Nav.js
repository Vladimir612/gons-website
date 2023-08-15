import React, { useState } from "react";
import * as styles from "./nav.module.scss";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import "../../globalClasses.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <div className="global-wrapper bg-blue">
      <nav className={`${styles.nav} padding-global`}>
        <Link to="/">
          <StaticImage
            src="../../images/logo.png"
            alt="Gons logo"
            className={styles.logo}
          />
        </Link>
        <div
          className={
            menuOpen ? `${styles.links} ${styles.active}` : styles.links
          }
        >
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <AnchorLink to="/#whyUs" activeStyle={{ color: "#B4FF00" }}>
              Why us
            </AnchorLink>
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <AnchorLink to="/#services" activeStyle={{ color: "#B4FF00" }}>
              Services
            </AnchorLink>
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <AnchorLink to="/#experience" activeStyle={{ color: "#B4FF00" }}>
              Experience
            </AnchorLink>
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <AnchorLink to="/#team" activeStyle={{ color: "#B4FF00" }}>
              Team
            </AnchorLink>
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <AnchorLink to="/#contact" activeStyle={{ color: "#B4FF00" }}>
              Contact us
            </AnchorLink>
          </button>
        </div>
        <button
          className={styles.hamburgerMenu}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setShouldAnimate(true);
          }}
        >
          <motion.div
            className={styles.line}
            animate={
              shouldAnimate && {
                y: menuOpen
                  ? ["0rem", "0.4rem", "0.4rem"]
                  : ["0.4rem", "0.4rem", "0rem"],
                rotate: menuOpen ? [0, 0, 45] : [45, 0, 0],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className={styles.line}
            animate={
              shouldAnimate && {
                opacity: menuOpen ? [1, 0, 0] : [0, 0, 1],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className={styles.line}
            animate={
              shouldAnimate && {
                y: menuOpen
                  ? ["0rem", "-0.4rem", "-0.4rem"]
                  : ["-0.4rem", "-0.4rem", "0rem"],
                rotate: menuOpen ? [0, 0, -45] : [-45, 0, 0],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
