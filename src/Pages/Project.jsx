import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Project() {
  return (
    <> 
      <Header/>
      <div className="projects" style={{marginTop:'100px'}} >
           <h1 className="text-center">All Projects</h1> 
           <div className="d-flex justify-content-center align-items-center w-100">
               <div className="d-flex border w-50 rounded">
                    <input type="text" className='form-control' placeholder='Search project by technology used...' />
                    <i style={{marginLeft:'-50px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
               </div>
           </div> 
           <Row className='mt-5 container-fluid'>
            <Col sm={12} md={6} lg= {4}>
              <ProjectCard/>
            </Col>
           </Row>
      </div>      
    </>
  )
}

export default Project