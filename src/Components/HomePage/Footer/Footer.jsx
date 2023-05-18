import React from 'react'
import Button from './Button/Button'
import './Footer.css'
import Main from './Main'

function Footer() {
  return (
    
        <div className='foot'>
            <div className='foot-head'>
                 <img className='logo' src='https://res.cloudinary.com/dhtamjbrq/image/upload/v1683874523/Zomato/download_xful86.avif'/>
                 <Button />
            </div>
                 <Main />

        </div>
  )
}

export default Footer