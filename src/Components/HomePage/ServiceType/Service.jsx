import React from 'react'
import './Service.css' 

function Service({ServiceType}) {
  return (
    <div className='service-type'>

        
        {
            ServiceType.map((item,index)=>{
                return(
                    <div className='specific-card'>
                        <img className="service-img" src={item.img}></img>
                        <div className='service-bottom'>
                            <p className='service-title'>{item.name}</p>
                            <p className='service-subtitle'>{item.description}</p>

                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Service