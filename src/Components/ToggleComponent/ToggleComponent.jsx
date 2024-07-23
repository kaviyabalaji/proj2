import React, { useState } from "react";
import "./ToggleComponent.css";

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="small">
      <div className="large">
        <img
          src="src\assets\kaviya.jpg"
          alt="Image"
        ></img>
        <h3>Name:Kaviya</h3>
        <h5>Registration number:212221040079</h5>
        <div className="btn">
          <button className="click" onClick={toggleDetails}>
            {isVisible ? "Hide Details" : "Show Details"}
          </button>
        </div>
        {isVisible && (
          <div className="content">
            <p>Dept: Computer Science and Engineering</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleComponent;