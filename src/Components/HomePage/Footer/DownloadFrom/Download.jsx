import React from 'react'
import './Download.css'

function Download() {


    const button=[
        {
            img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684417434/Zomato/download_f0zi8j.webp"
        },{
            img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684417415/Zomato/download_uejxhp.webp"
        }
    ]


  return (
    <div className='app-images'>
        {
            button.map((item,index)=>{
                return(
                    <div  key={index}>
                       <img className="images-download" src={item.img} alt="" />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Download