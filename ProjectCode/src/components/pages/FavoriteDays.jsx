import React from "react";
import WeatherList from "./WeatherList.jsx";

const FavoriteDays = (props) => {
  return (
    <>
      {props.days.length <= 0 ? (
        <div
          style={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff"
          }}
        >
          <h1>Not Found</h1>
        </div>
      ) : (
        <WeatherList days={props.days} data={props.data} />
      )}
    </>
  );
};

export default FavoriteDays;
