import React from "react";
import styles from "../styles/layout.module.css";
import bg from "../../assets/background.jpg";

const Layout = (props) => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${bg})` }}>
      {props.children}
    </div>
  );
};

export default Layout;
