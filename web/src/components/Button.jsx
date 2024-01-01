import React from "react";
import Button from "react-bootstrap/Button";

const Buttons = ({ width, height, name, btnClick, color }) => {
  return (
    <Button
      style={{
        width: width,
        height: height,
        backgroundColor: color,
      }}
      variant="primary"
      onClick={btnClick}
    >
      {name}
    </Button>
  );
};

export default Buttons;
