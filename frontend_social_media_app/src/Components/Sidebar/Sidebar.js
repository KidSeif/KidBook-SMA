import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faImage,
  faNewspaper,
  faUser,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_menu">
        <a className="active">
          {" "}
          <FontAwesomeIcon icon={faHouse} className="me_3" /> <b>Home</b>
        </a>
        <a>
          {" "}
          <FontAwesomeIcon icon={faUsers} className="me_3" /> <b>People</b>{" "}
        </a>
        <a>
          {" "}
          <FontAwesomeIcon icon={faImage} className="me_3" /> <b>Photos</b>
        </a>
        <a>
          {" "}
          <FontAwesomeIcon icon={faNewspaper} className="me_3" />{" "}
          <b>New's Feed</b>{" "}
        </a>
        <a>
          {" "}
          <FontAwesomeIcon icon={faUser} className="me_3" /> <b>Profile</b>
        </a>
        <a>
          {" "}
          <FontAwesomeIcon icon={faSliders} className="me_3" /> <b>Settings</b>{" "}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
