import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar className=" bg-success position-fixed top-0 w-100">
    <Container>
      <Navbar.Brand >
       <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder fs-2'> 
       <i className="fa-brands fa-stack-overflow fa-bounce "></i>
        Project Fair
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header 