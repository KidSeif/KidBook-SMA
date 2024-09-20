import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <b>KidBook</b>
      </div>

      <div className="navbar_right">
        <div className="navbar_search">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="gray" />
        </div>
        

        <button className="navbar_btn"> Create <FontAwesomeIcon icon={faSquarePlus} /> </button>

        <div className="navbar_profile_img">
        <img
         src='https://images.pexels.com/photos/27849560/pexels-photo-27849560/free-photo-of-homme-couple-amour-gens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
         alt=""
         />

        </div>
      </div> 
    </div>
  );
};

export default Navbar;
