import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="nav_item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav_item">
          <Link to="#">About Us</Link>
        </div>
        <div className="nav_item">
          <Link to="/service">Services</Link>
        </div>
        <div className="nav_item">
          <Link to="#">Our Work</Link>
        </div>
        <div className="nav_item">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
