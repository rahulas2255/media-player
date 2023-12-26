import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand className='fw-bolder' style={{color:'white',fontSize:'25px'}}>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
            <i style={{height:'26px'}} class="fa-solid fa-upload "></i> 
            Media Player
            </Link>
          
          
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header