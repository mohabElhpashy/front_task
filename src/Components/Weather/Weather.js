  import React, { useEffect, useState } from "react";
  import "./Weather.css";
  import Axios from "axios";
  import { TiWeatherPartlySunny } from "react-icons/ti";
  function Weather({ CkeckWeather }) {
    const [MaxTem, SetMaxTemp] = useState();
    const [LowTemp, SetLowTemp] = useState();
    const [City, SetCity] = useState('giza');
    const [Country, SetCountry] = useState('eg');
    const [humidity, sethumidity] = useState();
    const [loading, setLoading] = useState(false);
    const [Icon, setIcon] = useState("");
    const [description, setdescription] = useState("");

    const Api_Key = "5ff77894dfd5d8d1a3a041520439e9bb";

    useEffect(() => {
      <input onChange={(e) => SetCity(e.target.value)} />;
      Axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${Api_Key}`
      ).then((res) => {
        SetMaxTemp(res.data.main.temp_max);
        SetLowTemp(res.data.main.temp_min);
        sethumidity(res.data.main.humidity);
        setdescription(res.data.weather[0].description);

        setLoading(true);
        console.log(res.data);
      });
    }, []);
    return CkeckWeather && loading === true ? (
      <div style={{ height: "350px" }} className="Weather_div">
        <h2>
          <TiWeatherPartlySunny color="white" size={100} />
        </h2>
        <div style={{color:'white',fontSize:'40px'}}>{(humidity *100)/100}&deg;</div>
        <div className="maina">
          <div>{Math.floor(MaxTem - 273.15)}&deg;</div>
          <div>{Math.floor(LowTemp - 273.15)}&deg;</div>
        </div>
        <h2 style={{color:'white'}}>{description}</h2>
      </div>
    ) : (
      <div style={{ height: "0" }} className="Weather_div">
        {" "}
      </div>
    );
  }
  export default Weather;
  //   `http://api.weatherstack.com/current?access_key=c50ec072ab788fe0254932d3dd1b9617&query=${30.068737},${31.282093}&forecast_days=1&hourl=1`
