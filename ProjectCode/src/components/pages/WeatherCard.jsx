import React from "react";
import styles from "../styles/weather-card.module.css";

const WeatherCard = (props) => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.cardHeader}>{props.day}</div>
      {props.data.map((ele, index) => (
        <div key={index}>
          <div className={styles.cardContent}>
            <div className={styles.cardSubHeader}>
              <div>
                <p className={styles.subHeader}>{ele.daySegment}</p>
              </div>
              <div>
                <img src={ele.iconLink} alt="weather icon" />
              </div>
            </div>
            <div>
              <span className={styles.subHeader}>Temperature:</span>{" "}
              {ele.temperature}'C
            </div>
            <div>
              <span className={styles.subHeader}>Description:</span>{" "}
              {ele.description}
            </div>
          </div>
          {props.data.length - 1 != index ? <hr /> : ""}
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;
