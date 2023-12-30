import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import style from '../styles/Product.css'
import Buttons from '../components/Button';
import productImg from '../assets/images/product.svg'
import { useState } from 'react';
import { Modal } from 'bootstrap';

function Product() {
    const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);




  return (
    <div>
        <Container >
            <Row className="d-flex justify-content-center mt-5 mb-5">
                   <h1 style={{fontWeight:'800', color:'#2124b1'}}>Product and Solution</h1>
            </Row>
            <Row className="d-flex justify-content-center">
                    <Col lg={8}>
                        <div className='mt-5'>
                        <h5 style={{color:'#2124b1'}}>Our Services</h5>
                        <h1>What Solutions We Provide</h1>
                        </div>
                    </Col>
            </Row>

            <Row   style={{color:'#888'}} className='mt-5'>
                <Col lg={10} sm={12} md={10} >
                <p className='d-flex justify-content-start'>We are India's first smart factory solution provider in addressing the challenges of the electronics manufacturing industry particularly, in traceability, material handling and production execution. We offer end-to-end solutions and enable electronic manufacturers to significantly improve their overall productivity, production efficiency and help our clients to elevate their journey of automation. We carry the pride of our Solutions to be of high Quality, 
                Intelligent and Creative along with an exclusive alignment to Industry 4.0.</p>
                </Col>
            </Row>

            <Row className='mt-4'>
                <Col lg={5} sm={12} md={5}>
                    <h4 style={{textAlign:'start',color:'#2124b1'}}>Product</h4>
                    <ul  className='mt-4' style={{textAlign:'start',color:'#888'}}>
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
            <Row className='mt-4 '>
              <Col lg={5} sm={12} md={5}>
                    <h4 style={{textAlign:'start',color:'#2124b1'}}>Solution</h4>
                    <ul  className='mt-4' style={{textAlign:'start',color:'#888'}}>
                        <li>Total Manufacturing Execution Software</li>
                        <li>MES/MOM o Traceability</li>
                        <li>Machine Maintenance o Data Analytics </li>
                    </ul>
                </Col>        
            </Row>
            <Row className='mt-4 '>
              <Col sm={6} md={4}>
                <Card className="shadow-lg  p-4 mb-5 bg-white rounded" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={productImg} style={{height:'70px'}}/>
                    <Card.Title> Single Lane Conveyor Series 0.5 M Cooling Conveyor QIK-500CC</Card.Title>
                    <Card.Text>PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly....</Card.Text>
                    <center><Buttons btnClick={handleShowModal} style={{alignItems:'center'}} height="35px" width="105px" color='rgb(239, 43, 145)' name='Read More'/>   </center>
                </Card>
            </Col>
            <Col sm={6} md={4}>
                <Card className="shadow-lg  h-90 p-4 mb-5 bg-white rounded " style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={productImg} style={{height:'70px'}}/>
                    <Card.Title> Single Lane Conveyor Series 0.5 M Inspection Conveyor QIK-500IC</Card.Title>
                    <Card.Text>PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT)...</Card.Text>
                    <center><Buttons  style={{alignItems:'center'}} height="35px" width="105px" color='rgb(239, 43, 145)' name='Read More'/>   </center>
                </Card>
            </Col>
            <Col sm={6} md={4}>
              <div style={style} className='cards'>
                <Card className="shadow-lg p-4 mb-5 bg-white rounded" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={productImg} style={{height:'70px'}}/>
                    <Card.Title> Single Lane Conveyor Series 0.5 M Link Conveyor QIK-500LC</Card.Title>
                    <Card.Text>PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...</Card.Text>
                    <center><Buttons  btnClick={handleShowModal} style={{alignItems:'center'}} height="35px" width="105px" color='rgb(239, 43, 145)' name='Read More'/>  </center> 
                </Card>
               </div> 
            </Col>
            <Col sm={6} md={4}>
                <Card className="shadow-lg p-4 mb-5 bg-white rounded" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={productImg} style={{height:'70px'}}/>
                    <Card.Title> Single Lane Conveyor Series 1 M Inspection Conveyor QIK-1000IC</Card.Title>
                    <Card.Text>PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly....</Card.Text>
                    <center><Buttons  style={{alignItems:'center'}} height="35px" width="105px" color='rgb(239, 43, 145)' name='Read More'/>  </center> 
                </Card>
            </Col>
            <Col sm={6} md={4}>
                <Card className="shadow-lg p-4 mb-5 bg-white rounded" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={productImg} style={{height:'70px'}}/>
                    <Card.Title>Single Lane Conveyor Series 1 M Cooling Conveyor QIK-1000CC</Card.Title>
                    <Card.Text>PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT)...</Card.Text>
                    <center><Buttons  style={{alignItems:'center'}} height="35px" width="105px" color='rgb(239, 43, 145)' name='Read More'/>  </center> 
                </Card>
            </Col>
            <Col sm={6} md={4}>
                <Card className="shadow-lg p-4 mb-5 bg-white rounded" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={productImg} style={{height:'70px'}}/>
                    <Card.Title> Single Lane Conveyor Series 1 M Link Conveyor QIK-1000LC</Card.Title>
                    <Card.Text>PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly....</Card.Text>
                    <center><Buttons  style={{alignItems:'center'}} height="35px" width="105px" color='rgb(239, 43, 145)' name='Read More'/>  </center> 
                </Card>
            </Col>
            <Col sm={6} md={4}>
                <Card className="shadow-lg p-4 mb-5 bg-white rounded" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={productImg} style={{height:'70px'}}/>
                    <Card.Title> Single Lane Series Magazine Loader QIK-ML</Card.Title>
                    <Card.Text>PCB (Printed Circuit Board) loaders are an integral part of the Surface Mount Technology (SMT) assembly process....</Card.Text>
                    <center><Buttons  style={{alignItems:'center'}} height="35px" width="105px" color='rgb(239, 43, 145)' name='Read More'/>  </center> 
                </Card>
            </Col>
            <Col sm={6} md={4}>
                <Card className="shadow-lg p-4 mb-5 bg-white rounded" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={productImg} style={{height:'70px'}}/>
                    <Card.Title>Single Lane Series Magazine Unloader QIK-MUL</Card.Title>
                    <Card.Text>PCB (Printed Circuit Board) unloaders play a crucial role in the Surface Mount Technology (SMT)...</Card.Text>
                    <center><Buttons  style={{alignItems:'center'}} height="35px" width="105px" color='rgb(239, 43, 145)' name='Read More'/>  </center> 
                </Card>
            </Col>
            <Col sm={6} md={4}>
                <Card className="shadow-lg p-4 mb-5 bg-white rounded" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={productImg} style={{height:'70px'}}/>
                    <Card.Title> Smart Storage Series Smart Component Incoming System QIK-SCIS</Card.Title>
                    <Card.Text>A Smart Incoming SMT System Stream lines the process of receiving and inspection electronics component...</Card.Text>
                    <center><Buttons  style={{alignItems:'center'}} height="35px" width="105px" color='rgb(239, 43, 145)' name='Read More'/>  </center> 
                </Card>
            </Col>
            <Col sm={6} md={4}>
                <Card className="shadow-lg p-4 mb-5 bg-white rounded" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={productImg} style={{height:'70px'}}/>
                    <Card.Title>Smart Storage Series Smart Reel Storage System QIK-SRSS</Card.Title>
                    <Card.Text>Our Storage system is equipped with features to improve component management, reduce errors...</Card.Text>
                    <center><Buttons  style={{alignItems:'center'}} height="35px" width="105px" color='rgb(239, 43, 145)' name='Read More'/>  </center> 
                </Card>
            </Col>
            </Row>
        </Container>




        {/* <Modal show={handleShowModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Buttons variant="secondary" onClick={handleCloseModal}>
            Close
          </Buttons>
        </Modal.Footer>
      </Modal> */}


    </div>
  )
}

export default Product