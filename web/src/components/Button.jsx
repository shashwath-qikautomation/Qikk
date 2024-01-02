import React from "react";
import "../styles/Button.css";

const Buttons = ({ width, height, name, onClick, color }) => {
  return (
    <button className="button-style" onClick={onClick}>
      {name}
    </button>
  );
};

export default Buttons;
