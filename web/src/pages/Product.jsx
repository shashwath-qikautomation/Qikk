import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "../styles/Product.css";
import productImg from "../assets/images/product.svg";
import { useState } from "react";
import pdfUrl from "../assets/QIK-500CC.pdf";
import MyModal from "../components/Model";
import Cards from "../components/Cards";
import "animate.css";


 function Product() {
    const [showModal, setShowModal] = useState(false);

  const handleShowModal = () =>  setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPageNumber(1);
  };

  return (
    <div >
         <Container >
            <Row className="d-flex justify-content-center mt-5 mb-5 animate__animated animate__fadeInUp">
                   <h1 style={{fontWeight:'800', color:'#2124b1'}}>Product and Solution</h1>
            </Row>
            <Row className="d-flex justify-content-center">
                    <Col lg={12}>
                        <div className='mt-5'>
                        <h5 style={{color:'#2124b1'}} className="animate__animated animate__fadeInUp">Our Services</h5>
                        <h1 className="animate__animated animate__fadeInUp">What Solutions We Provide</h1>
                        </div>
                    </Col>
            </Row>

            <Row  className='mt-5'>
                <Col lg={12} sm={12} md={12} >
                <p className='d-flex justify-content-start text-justify animate__animated animate__fadeInUp'>We are India's first smart factory solution provider in addressing the challenges of the electronics manufacturing industry particularly, in traceability, material handling and production execution. We offer end-to-end solutions and enable electronic manufacturers to significantly improve their overall productivity, production efficiency and help our clients to elevate their journey of automation. We carry the pride of our Solutions to be of high Quality, 
                Intelligent and Creative along with an exclusive alignment to Industry 4.0.</p>
                </Col>
            </Row>

            <Row className='mt-4 animate__animated animate__fadeInUp'>
                <Col lg={12} sm={12} md={12}>
                    <h4 style={{textAlign:'start',color:'#2124b1'}}>Product</h4>
                    <ul  className='mt-4' style={{textAlign:'start'}}>
                        <li>Smart Inventory Management</li>
                        <li>Smart Reel Storage System</li>
                        <li>Automated Storage and Retrieval System (ASRS)</li>
                        <li>Autonomous Mobile Robots (AMR)</li>
                        <li>SMT Material Handling Systems
                            <ul>
                                <li>Link Conveyors</li>
                                <li>Inspection Conveyors</li>
                                <li>Cooling Conveyors</li>
                                <li>PCB Loaders</li>
                                <li>PCB Unloaders</li>
                            </ul>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className='mt-4 animate__animated animate__fadeInUp'>
              <Col lg={12} sm={12} md={12}>
                    <h4 style={{textAlign:'start',color:'#2124b1'}}>Solution</h4>
                    <ul  className='mt-4' style={{textAlign:'start'}}>
                        <li>Total Manufacturing Execution Software</li>
                        <li>MES/MOM o Traceability</li>
                        <li>Machine Maintenance o Data Analytics </li>
                    </ul>
                </Col>        
            </Row>
            <Row className='mt-4 animate__animated animate__fadeInUp'>
                <Col sm={12} md={4} lg={4}>
                    <Cards title="Single Lane Conveyor Series 0.5 M Cooling Conveyor QIK-500CC " text="PCB (Printed Circuit Board) conveyors are essential 
                    equipment within the Surface Mount Technology (SMT) assembly...." productImg={productImg} onClick={handleShowModal}/>
                </Col>
                    
                <Col sm={12} md={4}>
                   <Cards title="Single Lane Conveyor Series 0.5 M Inspection Conveyor QIK-500IC " text="PCB (Printed Circuit
                     Board) conveyors are essential equipment within the Surface Mount Technology (SMT)..." productImg={productImg} onClick={handleShowModal}/>
                </Col>
                
                <Col sm={12} md={4}>
                    <Cards title="Single Lane Conveyor Series 0.5 M Link Conveyor QIK-500LC "  text="PCB (Printed Circuit Board) conveyors
                     are essential equipment within the Surface Mount Technology (SMT) assembly... " productImg={productImg} onClick={handleShowModal}/>
            
                </Col>

                <Col sm={12} md={4}>
                    <Cards title="Single Lane Conveyor Series 1 M Inspection Conveyor QIK-1000IC " text="PCB (Printed Circuit Board) conveyors 
                    are essential equipment within the Surface Mount Technology " productImg={productImg} onClick={handleShowModal}/>
                </Col>
                <Col sm={12} md={4}>
                    <Cards title="Single Lane Conveyor Series 1 M Cooling Conveyor QIK-1000CC " text="PCB (Printed Circuit Board) conveyors
                    are essential equipment within the Surface Mount Technology (SMT)... " productImg={productImg} onClick={handleShowModal}/>
                   
                </Col>
                <Col sm={12} md={4}>
                    <Cards title=" Single Lane Conveyor Series 1 M Link Conveyor QIK-1000LC " text="PCB (Printed Circuit Board) conveyors 
                    are essential equipment within the Surface Mount Technology (SMT) assembly.... " productImg={productImg} onClick={handleShowModal}/>
                </Col>
                <Col sm={12} md={4}>
                    <Cards title=" Single Lane Series Magazine Loader QIK-ML "  text="PCB (Printed Circuit Board) loaders are an 
                    integral part of the Surface Mount Technology (SMT) assembly process.... " productImg={productImg} onClick={handleShowModal}/>
                </Col>
                <Col sm={12} md={4}>
                    <Cards title="Single Lane Series Magazine Unloader QIK-MUL " text="PCB (Printed Circuit Board) 
                    unloaders play a crucial role in the Surface Mount Technology (SMT)... "  productImg={productImg} onClick={handleShowModal}/>
                </Col>
                <Col sm={12} md={4}>
                    <Cards title="Smart Storage Series Smart Component Incoming System QIK-SCIS " text="A Smart Incoming SMT System
                     Stream lines the process of receiving and inspection electronics component... "  productImg={productImg} onClick={handleShowModal}/>
                </Col>
                <Col sm={12} md={4}>
                    <Cards title="Smart Storage Series Smart Reel Storage System QIK-SRSS " text="Our Storage system is equipped 
                    with features to improve component management, reduce errors... " productImg={productImg} onClick={handleShowModal}/>
                </Col>
                
            </Row>
         </Container> 
      <MyModal
        show={showModal}
        fullscreen={true}
        onHide={handleCloseModal}
        className="modal-pdf"
      >
        <div className="pdf-frame">
          <iframe
            src={pdfUrl}
            title="pdf"
            style={{ width: "100%", height: "100vh" }}
          ></iframe>
        </div>
      </MyModal>
    </div>
  );
}

export default Product;
