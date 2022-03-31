import React from 'react';
import WeatherCard from "./WeatherCard.jsx";
import styles from "../styles/weather-list.module.css";
import { Link } from 'react-router-dom';

const WeatherList = (props) => {
    return (
        <div className={styles.container}>
            {props.days.map(day => 
                <Link to={`/weather-details/${day}`} key={day} style={{ textDecoration: "none" }}>
                    <WeatherCard day={day} data={props.data[day]}/>
                </Link>
            )}
        </div>
    )
}

export default WeatherList;