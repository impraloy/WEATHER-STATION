import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/weather-details.module.css";

const WeatherDetails = (props) => {
  const { day } = useParams();
  const data = props.data[day];

  return (
    <div className={styles.container}>
      <div className={styles.weatherDetailsSection}>
        <div>
          <div className={styles.weatherDetailsHeader}>
            <div><h2>{day}</h2></div>
            <div>Favorite: <input type="checkbox" name="favorite" onChange={() => props.handleOnClickFavorite(day)} checked={props.favorites[day]}/></div>
          </div>
        </div>
        <div className={styles.outerWeatherCard}>
          {data.map((ele, index) => (
            <div key={index} className={styles.innerWeatherCard}>
              <div className={styles.cardContent}>
                <div className={styles.cardSubHeader}>
                  <div>
                    <h3 className={styles.subHeader}>{ele.daySegment}</h3>
                  </div>
                  <div>
                    <img src={ele.iconLink} alt="weather icon" />
                  </div>
                </div>
                <hr />
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Temperature:</span>{" "}
                  {ele.temperature}'C
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Temperature Desc:</span>{" "}
                  {ele.temperatureDesc}
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Humidity:</span>{" "}
                  {ele.humidity}%
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Perception:</span>{" "}
                  {ele.precipitationProbability}%
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Precipitation Desc:</span>{" "}
                  {ele.precipitationDesc}
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Wind Speed:</span>{" "}
                  {ele.windSpeed}km/h
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Wind Desc:</span>{" "}
                  {ele.windDesc}
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Humidity:</span>{" "}
                  {ele.humidity}%
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Rain Fall:</span>{" "}
                  {ele.rainFall}%
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Sky Desc:</span>{" "}
                  {ele.skyDescription}
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Description:</span>{" "}
                  {ele.description}
                </div>
                <div className={styles.cardSubHeader}>
                  <span className={styles.subHeader}>Date:</span>{" "}
                  {ele.utcTime.split("T")[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
