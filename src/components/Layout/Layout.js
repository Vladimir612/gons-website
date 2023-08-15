import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

import * as styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Nav />
      <div className={styles.pageContainer}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
