import React from "react";
import "./Profile.css";
import { BsFillPersonPlusFill } from "react-icons/bs";
function Profile({ CheckProfile }) {
  return CheckProfile ? (
    <div id="prof" style={{ height: "300px" }} className="notification_divv">
      <h2 style={{ transition: "all 0.6s" }}>
        {" "}
        <BsFillPersonPlusFill size={70} />
      </h2>
      <hr />
      <h3>FirstName</h3>
      <hr />
      <h3>LastName</h3>
      <button className="Save">Save Changes</button>
    </div>
  ) : (
    <div style={{ height: "0" }} className="notification_divv"></div>
  );
}
export default Profile;
