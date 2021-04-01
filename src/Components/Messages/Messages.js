import React from "react";
import "./Messages.css";
import { BsFillReplyAllFill } from "react-icons/bs";
function Messages({ CheckMessage }) {
  return CheckMessage ? (
    <div style={{ height: "100px" }} className="notification_div">
      <h2 style={{ transition: "all 0.6s" }}> Mesaages</h2>
      <hr />
      <ul>
        <li>mesage one</li>
        <BsFillReplyAllFill size={20} className="clickk" />
        <li>message two</li>
        <BsFillReplyAllFill size={20} className="clickk" />

        <li>message three</li>
        <BsFillReplyAllFill size={20} className="clickk" />
      </ul>
    </div>
  ) : (
    <div style={{ height: "0" }} className="notification_div"></div>
  );
}
export default Messages;
