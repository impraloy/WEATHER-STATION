import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/header.module.css";
import weatherAppLogo from "../../assets/logo.png";

const Header = () => {
  const [currentRoute, setCurrentRoute] = useState("/");

  return (
    <nav>
      <ul id={styles.navItem}>
        <li className={styles.logo}>
          <Link
            to="/"
            className={currentRoute == "/" ? styles.active : ""}
            onClick={() => setCurrentRoute("/")}
          >
            <img src={weatherAppLogo} height="48px" alt="weather app logo" />
          </Link>
        </li>
        <li className={styles.navItemList}>
          <Link
            className={
              currentRoute == "/"
                ? [styles.navItemLink, styles.active].join(" ")
                : styles.navItemLink
            }
            to="/"
            onClick={() => setCurrentRoute("/")}
          >
            Home
          </Link>
        </li>
        <li className={styles.navItemList}>
          <Link
            className={
              currentRoute == "/favorite-days"
                ? [styles.navItemLink, styles.active].join(" ")
                : styles.navItemLink
            }
            to="/favorite-days"
            onClick={() => setCurrentRoute("/favorite-days")}
          >
            Favorite
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
