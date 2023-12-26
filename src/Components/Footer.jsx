import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container w-100 mt-5'>
    <div className="footer-content d-flex justify-content-between">
      <div className="title w-25">
        <h3><i style={{height:'26px',fontSize:'25px'}} class="fa-solid fa-upload "></i> 
          Media Player</h3>
        <span>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</span> <br /> <br />
        <span>Code licensed MIT,docs CC BY 3.0.</span> <br />
        <span>Currently v5.3.2.</span>
      </div>
      <div className="links d-flex flex-column">
        <h3>Links</h3>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}><a style={{color:'white'}} className='text-decoration-none ' href="">Landing Page</a>
        </Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}}><a style={{color:'white'}} className='text-decoration-none ' href="">Home</a>
        </Link>

        <Link to={'/history'} style={{textDecoration:'none',color:'white'}}><a style={{color:'white'}} className='text-decoration-none ' href="">Watch History</a>
        </Link>
      </div>
      <div className="guides d-flex flex-column">
      <h3>Guides</h3>
        <a style={{color:'white'}} className='text-decoration-none ' href="">React</a>
        <a style={{color:'white'}} className='text-decoration-none ' href="">React Bootstrap</a>
        <a style={{color:'white'}} className='text-decoration-none ' href="">React Routing</a>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <div className='d-flex'>
          <input placeholder='Enter your mail' type="text" className='form-control' />
          <button className='btn btn-info ms-2'> <i class="fa-solid fa-arrow-right"></i> </button>

        </div>
        <div style={{color:'white'}} className='icons mt-3 d-flex justify-content-between'>
          <i style={{height:'50px'}} class='fa-solid fa-envelope fa-2x'></i>
          <i style={{height:'50px'}} class='fa-brands fa-twitter fa-2x'></i>
          <i style={{height:'50px'}} class='fa-brands fa-github fa-2x'></i>
          <i style={{height:'50px'}} class='fa-brands fa-facebook fa-2x'></i>
          <i style={{height:'50px'}} class='fa-brands fa-instagram fa-2x'></i>
          <i style={{height:'50px'}} class='fa-brands fa-linkedin fa-2x'></i>

        </div>

      </div>
    </div>
     <p className='text-center mt-4'>Copyright &copy; 2023 Media Player. Built with React</p>

    </div>
  )
}

export default Footer