import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='container'>
      <div className="row align-items-center m-5">
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'> Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow us to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionality.</p>
          <Link to={'/home'} className='btn btn-info mt-3 fw-bolder'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid' src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
        </div>
      </div>
      <div className="features mb-5">
        <h3 className='text-center'>Features</h3>
        <div className="cards mt-5 d-flex justify-content-between">
        <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'350px'} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          User can upload,view and remove videos
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'350px'} variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          User can categorize the videos according to their preference using drag and drop features
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'350px'} variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          User are able to see the history of watched videos.
        </Card.Text>
      </Card.Body>
    </Card>

        </div>
      </div>
      <div className="row mt-5 border rounded align-items-center p-5 mb-5">
        <div className="col-lg-6">
          <h2 className='text-warning mb-5'>Simple,Fast and Powerful</h2>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem excepturi saepe ipsam sunt ea iste debitis doloribus eos. Vero fugit dolore hic. Reprehenderit a eligendi nemo deserunt. Sint, fuga debitis.</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Categorise Videos</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem excepturi saepe ipsam sunt ea iste debitis doloribus eos. Vero fugit dolore hic. Reprehenderit a eligendi nemo deserunt. Sint, fuga debitis.</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Managing History</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem excepturi saepe ipsam sunt ea iste debitis doloribus eos. Vero fugit dolore hic. Reprehenderit a eligendi nemo deserunt. Sint, fuga debitis.</p>
        </div>
        <div className="col-lg-6">
        <iframe width="688" height="387" src="https://www.youtube.com/embed/8ZZc39Khers" title="Malaikottai Vaaliban (Kannada) - Teaser | Mohanlal | Lijo Jose Pellissery | 25th Jan 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>

      </div>
      
    </div>
  )
}

export default LandingPage