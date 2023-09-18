import React from "react";
import "./Home.css";
import Lunch from "./Lunch";
import Favorite from "./Favorite";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-text-content">
          <h1 className="home-title">Vietnamese cuisine</h1>
          <p className="sub">Upptäck vår menyerbjudande</p>
          <div className="home-link-nexticon">
            <Link className="home-link" style={{ fontSize: "20px" }} to="/meny">
              {" "}
              MENY
            </Link>

            <FaChevronRight className="nexticon" size={18} />
          </div>
        </div>
        {/* <div className ='home-image'>
      <img src='images/home.png' alt='nudelsoppa'/>
      </div>*/}
      </div>
      

      <Favorite />
      <Lunch/>
      
    </div>
  );
}

export default Home;
