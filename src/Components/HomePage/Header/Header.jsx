import React from 'react'
import './Header.css'
import SearchBar from '../../SearchBar/SearchBar'

function Header() {
  return (
    <div>
        <div className='head'>
            <div className='background-image'>
                <img src='https://res.cloudinary.com/dhtamjbrq/image/upload/v1684326530/Zomato/download_lringq.avif'></img>
            </div>
            <div className='wrapper'>
               
               <div className='logo-image'>
                    <img className='logo-image' src='https://res.cloudinary.com/dhtamjbrq/image/upload/v1684327465/Zomato/download_ed5w2b.avif'></img>
               </div>
                <h1 className='headLine'>Discover the best food & drinks in <span className='span-text'>Delhi NCR</span> </h1>
               
                <SearchBar />
               

                
            </div>
        </div>
    </div>
  )
}

export default Header