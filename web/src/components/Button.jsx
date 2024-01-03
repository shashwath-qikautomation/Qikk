import React from "react";
import "../styles/Button.css";

const Buttons = ({ width, height, name, onClick, color }) => {
  return (
    <button style={{ width: width }} className="button-style" onClick={onClick}>
      {name}
    </button>
  );
};

export default Buttons;
