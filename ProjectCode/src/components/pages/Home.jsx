import React from 'react';
import WeatherList from "./WeatherList.jsx";

const Home = (props) => {
    return (
        <div>
            <WeatherList days={props.days} data={props.data}/>
        </div>
    )
}

export default Home;