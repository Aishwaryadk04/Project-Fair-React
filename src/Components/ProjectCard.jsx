import React ,{useState} from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import prjtImage from '../Assests/mediaplayer.png'

function ProjectCard() { 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
     <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" style={{height:'200px'}} src={prjtImage} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>

    {/* Modal */}

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
             <img style={{height:'200px'}} src={prjtImage} className='img-fluid' alt="project image" />
            </Col>
            <Col md={6}>
              <h2>Project Title</h2>
              <p>Project Overview : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aut error ipsa, rem pariatur ratione, minus laudantium consequuntur sit impedit unde. Pariatur hic asperiores consequatur reiciendis quas facere ratione odit.</p>
              <p>Language Used : <span className='fw-bolder'>HTML,CSS,React</span></p>
              
            </Col>
          </Row>
          <div className="mt-3">
                <a href="https://github.com/Aishwaryadk04/Media-Player-App" target='_blank' className='me-3 btn'>
                  <i className="fa-brands fa-github fa-2x"></i> 
                </a>
                <a href="https://media-player-app-opal.vercel.app/" target='_blank' className='me-3 btn'>
                  <i className="fa-solid fa-link fa-2x"></i> 
                </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard