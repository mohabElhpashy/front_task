import React, { useState } from "react";
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

function NavBar() {
  const [notification, setnotification] = useState(false);
  const [Messages, setMessages] = useState(false);
  const [Profile, setProfile] = useState(false);

  return (
    <div>
      <nav className="NavBar">
        <ul>
          <li>
            <MdDashboard color="white" size={35} />
          </li>
          <li
            onClick={() => {
              setnotification(!notification);
              setMessages(false);
            }}
          >
            <BsFillBellFill color="white" size={35} />
          </li>
          <li
            onClick={() => {
              setMessages(!Messages);
              setnotification(false);
            }}
          >
            <BsFillChatDotsFill color="white" size={35} />
          </li>
          <li>
            <BsFillPersonFill
              onClick={() => {
                setProfile(!Profile);
              }}
              color="white"
              size={35}
            />
          </li>
        </ul>
      </nav>
      <Notfi checknoti={notification} />
      <Message CheckMessage={Messages} />
      <PRofile CheckProfile={Profile} />
    </div>
  );
}
export default NavBar;
