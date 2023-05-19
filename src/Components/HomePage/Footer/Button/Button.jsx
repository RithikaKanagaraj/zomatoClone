import React from 'react'
import './Button.css'

function Button() {

    const buttonDetails=[{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684213642/Zomato/in_aqd7tt.webp",
        name:"India"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684416127/Zomato/download_ksw2ak.png",
        name:"English"
    }]

  return (
    <div className='buttons'>
            {
            buttonDetails.map((item,index)=>{
                return(
                <div className='button-div' key={index}>
                    <img className='foot-btn-image' src={item.img}></img>
                    <div className='foot-btn-text'>{item.name}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 jKmKoK"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
                </div>
                )
            })
            }
         
    </div>
  )
}

export default Button