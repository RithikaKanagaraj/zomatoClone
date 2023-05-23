import React from 'react'
import './Review.css'
import Navbar from '../../Navbar/Navbar'
import UserReview from './UserReview'
import MainContent from './MainContent/MainContent'
import Footer from '../../HomePage/Footer/Footer'

function Review() {
  return (
    <div>
        <div className="nav-review">
        <Navbar />
        </div>
        <div className='review-main'>

        <UserReview  />
        <MainContent />
        </div>
        <Footer/>
    </div>
  )
}

export default Review