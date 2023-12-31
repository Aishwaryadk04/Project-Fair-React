import React from 'react'
import { Row , Col } from 'react-bootstrap'
import titleImage from '../Assests/title image.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
function Home() {
  return (

    <>
    {/* landing section */}
      <div className='bg-success container-fluid rounded' style={{width:'100%',height:'100vh'}}>
        <Row className='align-items-center p-5'>
           <Col sm={12} md={6}  >
           <h1 className='fw-bolder text-light mb-5' style={{fontSize:'80px'}}>     <i className="fa-brands fa-stack-overflow fa-bounce "></i> Project Fair   </h1>

           <p> One stop destination for all Software Development Projects. Where user can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!! </p>

           <Link to={'/login'} className='btn btn-warning '>Start to explore <i className="fa-solid fa-right-long fa-beat ms-2"></i></Link>
           </Col>
           <Col sm={12} md={6}  >
              <img style={{marginTop:'100px'}} className='w-80' src={titleImage} alt="" />
           </Col>
        </Row>

      </div>
    {/* all projects */}  
    <div className="allprojects mt-5">
      <h1 className="text-center mb-5">Explore Our Projects</h1>
      <marquee scrollAmount={25}>
        <div className='d-flex justify-content-between'>
          <div style={{width:'500px'}}>
            <ProjectCard/>
          </div>
          
          
        </div>
      </marquee>
      <div className="text-center"> <Link to={'/project'}> View More Projects</Link></div>
    </div>
    </>
  )
}

export default Home