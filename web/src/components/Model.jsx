import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-light">
        {props.title}
      </Modal.Header>
      <Modal.Body className="bg-light">{props.children}</Modal.Body>
    </Modal>
  );
}

export default MyModal;
