import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/header.module.css";
import weatherAppLogo from "../../assets/logo.png";

const Header = () => {
  const [currentRoute, setCurrentRoute] = useState("/Weather-Station");

  return (
    <nav>
      <ul id={styles.navItem}>
        <li className={styles.logo}>
          <Link
            to="/Weather-Station"
            className={currentRoute == "/Weather-Station" ? styles.active : ""}
            onClick={() => setCurrentRoute("/Weather-Station")}
          >
            <img src={weatherAppLogo} height="48px" alt="weather app logo" />
          </Link>
        </li>
        <li className={styles.navItemList}>
          <Link
            className={
              currentRoute == "/Weather-Station"
                ? [styles.navItemLink, styles.active].join(" ")
                : styles.navItemLink
            }
            to="/Weather-Station"
            onClick={() => setCurrentRoute("/Weather-Station")}
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
