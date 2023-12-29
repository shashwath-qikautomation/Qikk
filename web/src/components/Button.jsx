import React from "react";
import Button from "react-bootstrap/Button";

const Buttons = ({ color, width, height, name, btnClick }) => {
  return (
    <Button
      style={{ backgroundColor: color, width: width, height: height }}
      variant="primary"
      onClick={btnClick}
    >
      {name}
    </Button>
  );
};

export default Buttons;
