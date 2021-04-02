import React from "react";
import "./DashBoard.css";
// import { BsFillPersonPlusFill } from "react-icons/bs";
import { Consumer } from "../../hooks/Provider";
function DashBoard({ CheckDash }) {
  return CheckDash ? (
    <div id="prof" style={{ width: "300px" }} className="notification_divvv">
      <h2>DashBoard</h2>
      <hr />
      <Consumer>
        {(dta) => {
          return (
            <ul>
              <li>Users</li>
              <li onClick={() => dta.myfun()}>Analysis</li>
              <li>Latest Activities </li>
              <li>Settings</li>
            </ul>
          );
        }}
      </Consumer>
    </div>
  ) : (
    <div style={{ width: "0" }} className="notification_divvv"></div>
  );
}
export default DashBoard;
