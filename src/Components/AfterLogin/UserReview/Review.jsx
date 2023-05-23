import React from 'react'
import './Review.css'
import Navbar from '../../Navbar/Navbar'
import UserReview from './UserReview'

function Review() {
  return (
    <div>
        <div className="nav-review">
        <Navbar />
        </div>
        <UserReview  />
    </div>
  )
}

export default Review