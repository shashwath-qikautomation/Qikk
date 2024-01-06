import React, { useState, useEffect } from "react";
import { Card, CardBody, CardText } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import about1Svg from "../assets/images/about1.svg";
import MyModal from "./Model";
import Buttons from "./Button";

const ResponsiveCollapseCard = (props) => {
  console.log(props);
  const width = { width: "120px" };
  const [content, setContent] = useState();

  const updateContent = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setContent("Future Outlook..");
    } else if (screenWidth < 1366) {
      setContent("Future Outlook");
    } else {
      setContent(
        "QIKK AUTOMATION TECHNOLOGIES PRIVATE LIMITED is poised for rapid growth in the electronic manufacturing industry."
      );
    }
  };

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    updateContent();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateContent);

    return () => {
      window.removeEventListener("resize", updateContent);
    };
  }, []);

  return (
    <Card
      className="border border-0  mb-5 rounded text-black overflow-auto"
      style={{ backgroundImage: `url(${about1Svg})` }}
    >
      <CardBody>
        <div className="hoover rounded p-2 bottom-0 ">
          <Card.Title>
            <h5>Future Outlook</h5>
          </Card.Title>
          <Card.Text className="text-start m-2">
            <p>{content}</p>
            <Buttons
              variant="primary"
              onClick={() => setModalShow(true)}
              width={width.width}
              name={"Read More"}
            ></Buttons>
          </Card.Text>
          <CardText className="text-start m-2">
            <MyModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              title="Future Outlook"
            >
              <p>
                QIKK AUTOMATION TECHNOLOGIES PRIVATE LIMITED is poised for rapid
                growth in the electronic manufacturing industry. By leveraging
                cutting-edge technology, continuous innovation, and a
                customer-centric approach, we aim to become a global leader in
                providing integrated solutions for electronic manufacturing
                processes. As we expand our product portfolio and enhance our
                software offerings, we will remain dedicated to driving the
                industry forward through Quality, efficiency, and excellence.
                For inquiries, collaborations, or more information about QIK
                AUTOMATION, please visit our website at www.rexsatronix.com or
                contact us at info@rexsatronix.com.
              </p>
            </MyModal>
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
};

export default ResponsiveCollapseCard;
