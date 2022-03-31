import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import WeatherDetails from "../pages/WeatherDetails.jsx";
import FavoriteDays from "../pages/FavoriteDays.jsx";
import axios from "axios";

import data from "../../data/data.json";

const Body = () => {
  const [days, setDays] = useState([]);
  const [dailyWeather, setDailyWeather] = useState(null);
  const [favorites, setFavorites] = useState({
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
    Monday: false,
  });

  const handleOnClickFavorite = (day) => {
    setFavorites({
      ...favorites,
      [day]: !favorites[day],
    });
  };

  const organizedWeatherData = (data) => {

    const dataMap = {
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
      Monday: [],
    };

    // [ "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday" ]
    setDays(Object.keys(dataMap));


    data.map((ele) => {
      // dataMap["Tuesday"].push({Eventing})
      /* dataMap  = {
        Tuesday: [{ Afternoon } { Evening }, { Night }]
      }
      */
      dataMap[ele.weekday].push(ele);
    });
    setDailyWeather(dataMap);
  };

  useEffect(async () => {
    //  HERE Destination Weather API
    const apiKey = "Z6DsT5UovJHdIfAYt6Saln7k3ZOzyPGThOigdEUAHU8";
    const city = "Toronto";
    const endPoint = `https://weather.ls.hereapi.com/weather/1.0/report.json?product=forecast_7days&name=${city}&apiKey=${apiKey}`;
    try {
      const response = await axios.get(endPoint);
      if (response.status == 200) {
        const actualData = response.data.forecasts.forecastLocation.forecast;
        organizedWeatherData(actualData);
      } else {
        console.log("request successfull but can not load the data");
      }
    } catch (error) {
      console.log("something went wrong, fallback to local json data");
      organizedWeatherData(data.forecasts.forecastLocation.forecast);
    }
  }, []);

  return (
    <>
      {dailyWeather && (
        <Routes>
          <Route path="/Weather-Station" element={<Home days={days} data={dailyWeather} />} />
          <Route
            path="/weather-details/:day"
            element={
              <WeatherDetails
                data={dailyWeather}
                handleOnClickFavorite={handleOnClickFavorite}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/favorite-days"
            element={
              <FavoriteDays
                days={Object.keys(favorites).filter(
                  (ele) => favorites[ele] == true
                )}
                data={dailyWeather}
              />
            }
          />
        </Routes>
      )}
    </>
  );
};

export default Body;
