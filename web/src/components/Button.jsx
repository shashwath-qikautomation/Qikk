import React from "react";
import "../styles/Button.css";

const Buttons = ({ width, height, name, btnClick, color }) => {
  return (
    <button className="button-style" onClick={onclick}>
      {name}
    </button>
  );
};

export default Buttons;
