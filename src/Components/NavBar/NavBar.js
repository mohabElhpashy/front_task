    import React, { useState, useEffect } from "react";
    import "./NavBar.css";
    import {
      BsFillBellFill,
      BsFillPersonFill,
      BsFillChatDotsFill,
    } from "react-icons/bs";
    import { MdDashboard } from "react-icons/md";
    import Notfi from "../Notification/Notification";
    import Message from "../Messages/Messages";
    import PRofile from "../Profile/Profile";
    import DaShBoard from "../DashBoard/Dashboard";
    // import Weeather from "../Weather/Weather";

    import Aos from "aos";
    import "aos/dist/aos.css";
    import { Provider } from "../../hooks/Provider";

    function NavBar({ checkMainState }) {
      const [notification, setnotification] = useState(false);
      const [Messages, setMessages] = useState(false);
      const [Profile, setProfile] = useState(false);
      const [DashBoard, setDashBoard] = useState(false);
      // const [Weather, setWeather] = useState(false);

      const CloseProvider = () => {
        setDashBoard(false);
        // setWeather(true);
      };
      useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

      return (
        <div>
          <nav data-aos="fade-bottom" className="NavBar">
            <ul>
              <li
                onClick={() => {
                  setDashBoard(!DashBoard);
                  setProfile(false);
                  setMessages(false);
                  setnotification(false);
                  // setWeather(false);
                }}
              >
                {DashBoard ? (
                  <MdDashboard color="blue" size={35} />
                ) : (
                  <MdDashboard color="white" size={35} />
                )}
                <span className='spaaan'>Dashboard</span>
              </li>
              <li
                onClick={() => {
                  setnotification(!notification);
                  setMessages(false);
                  setProfile(false);
                  setDashBoard(false);
                  // setWeather(false);

                  //   document.getElementById("two").style.color = "blue";
                }}
              >
                {notification ? (
                  <BsFillBellFill color="blue" size={35} />
                ) : (
                  <BsFillBellFill color="white" size={35} />
                )}
                            <span className='spaaan'>notification</span>

              </li>
              <li
                onClick={() => {
                  setMessages(!Messages);
                  setnotification(false);
                  setProfile(false);
                  setDashBoard(false);
                  // setWeather(false);

                }}
              >
                {Messages ? (
                  <><BsFillChatDotsFill color="blue" size={35}  />
                  </>
                ) : (
                  <BsFillChatDotsFill color="white" size={35} />
                )}
              <span className='spaaan'>Messages</span>
              <span style={{position:'absolute',textAlign:'center',width:'25px',borderRadius:'100%',
            backgroundColor:'red',color:'white'}}>3</span>


              </li>
              <li>
                {Profile ? (
                  <BsFillPersonFill
                    onClick={() => {
                      setProfile(!Profile);
                      setMessages(false);
                      setDashBoard(false);
                      // setWeather(false);

                      setnotification(false);
                    }}
                    color="blue"
                    size={35}
                  />
                ) : (
                  <BsFillPersonFill
                    onClick={() => {
                      setProfile(!Profile);
                      setMessages(false);
                      setnotification(false);
                      // setWeather(false);

                    }}
                    color="white"
                    size={35}
                  />
                )}
          <span className='spaaan'>Profile</span>

              </li>
            </ul>
          </nav>
          <Notfi checknoti={notification} />
          <Message CheckMessage={Messages} />
          <PRofile CheckProfile={Profile} />
          <Provider value={{ DAshState: "DashBoard", myfun: CloseProvider }}>
            <DaShBoard CheckDash={DashBoard} />
          </Provider>
          {/* <Weeather CkeckWeather={Weather} /> */}
        </div>
      );
    }
    export default NavBar;
