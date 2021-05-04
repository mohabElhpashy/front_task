  // import React, { useEffect, useState } from "react";
  // import "./Weather.css";
  // import Axios from "axios";
  // import { TiWeatherPartlySunny } from "react-icons/ti";
  // function Weather({ CkeckWeather }) {
  //   const [MaxTem, SetMaxTemp] = useState();
  //   const [LowTemp, SetLowTemp] = useState();
  //   const [Country, SetCountry] = useState({City:'Giza',Coun:'eg'});
  //   const [humidity, sethumidity] = useState();
  //   const [loading, setLoading] = useState(false);
  //   const [description, setdescription] = useState("");
  //   const [changeareabutt,setchangearebutt]=useState({City:'Giza',Coun:'eg'})



  //   const Api_Key = "5ff77894dfd5d8d1a3a041520439e9bb";
  //   const ChangeArea=()=>{
  //     setchangearebutt(Country)
  //   }
  //   if('serviceWorker' in navigator){
  //     console.log('it is done')
  //   }
  //   else{
  //     console.log('kskks')
  //   }

  //   useEffect(() => {
  //     Axios.get(
  //       //call open wether api
  //       `http://api.openweathermap.org/data/2.5/weather?q=${changeareabutt.City},${changeareabutt.Coun}&appid=${Api_Key}`
  //     ).then((res) => {
  //       SetMaxTemp(res.data.main.temp_max);
  //       SetLowTemp(res.data.main.temp_min);
  //       sethumidity(res.data.main.humidity);
  //       setdescription(res.data.weather[0].description);

  //       setLoading(true);
  //       console.log(res.data);
  //     });
      
  //   }, [changeareabutt]);
  //   // const Change=()=>{
  //   //   SetCountry(ChangeAr)
  //   // }
  //   return CkeckWeather && loading === true ? (
  //     <div style={{ height: "400px" }} className="Weather_div">
      
  //        <div className="div_hava_input">
  //          <input type='text' value={Country.City}  onChange={e=>SetCountry({City:e.target.value})} 
  //           style={{backgroundColor:'transparent'}} placeholder='City'/>,,
  //         <input  type='text' value={Country.Coun} onChange={e=>SetCountry({Coun:e.target.value})} 
  //          style={{backgroundColor:'transparent'}} placeholder='Country'/>
  //         <button onClick={ChangeArea}>Get Weather</button>
  //         </div>

  //       {/* <hr/> */}
  //       <h2>
  //         <TiWeatherPartlySunny color="white" size={100} />
  //       </h2>
  //       <div style={{color:'white',fontSize:'40px',fontStyle:'italic',fontWeight:'bold'}}>{humidity }%</div>
  //       <div className="maina">
  //         <div>{Math.floor(MaxTem - 273.15)}&deg;<span >max</span></div>
  //         <div>{Math.floor(LowTemp - 273.15)}&deg; <span >min</span></div>
  //       </div>
  //       <h2 style={{color:'white',fontSize:'30px',fontStyle:'italic',fontWeight:'bold'}}>{description}</h2>
  //     </div>
  //   ) : (
  //     <div style={{ height: "0" }} >
  //       {" "}
  //     </div>
  //   );
  // }
  // export default Weather;
