import React from "react";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">USB</h1>
            <span>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Chairs</h1>
            <span>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Monitors</h1>
            <span>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Multi Media</h1>
            <span>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Printers</h1>
            <span>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
