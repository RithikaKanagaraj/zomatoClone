import React from 'react'
import './Collections.css'

function GridContainer({collections}) {
  return (
    <div className='content-Container'>
          {
            collections.map((item,index)=>{
             return(
              <div className='grid-card' key={index}>
                <div className='grid-image-background'> 
                        <img className="grid-image" src={item.img}></img>
                    <div className='bg'>
                        <section className='image-bottom'>
                            <p className='image-name'>{item.name}</p>
                            <div className='place-svg'>
                                <p className='image-place'>{item.place}</p>
                                {item.svg}
                            </div>
                        </section>
                    </div>
                </div>
              </div>
             )
              
            })

          }

        </div>
  )
}

export default GridContainer