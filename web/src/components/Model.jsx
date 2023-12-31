import React from "react";
import Modal from "react-bootstrap/Modal";

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-light">
        <h5>{props.title}</h5>
      </Modal.Header>
      <Modal.Body className="bg-light">{props.children}</Modal.Body>
    </Modal>
  );
}

export default MyModal;
