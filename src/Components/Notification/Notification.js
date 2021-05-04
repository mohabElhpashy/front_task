import React from "react";
import "./Notification.css";
function Notification({ checknoti }) {
  return checknoti ? (
    <div style={{ height: "100px" }} className="notification_div_">
      <h2 style={{ transition: "all 0.6s" }}> Notifiaction</h2>
      <hr />
    </div>
  ) : (
    <div style={{ height: "0" }} className=""></div>
  );
}
export default Notification;
