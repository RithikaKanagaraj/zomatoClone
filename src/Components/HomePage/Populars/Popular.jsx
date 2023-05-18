import React from 'react'
import './Popular.css'

function Popular({popular}) {
  return (
    <div className='Populars'>
        <h3 className='populat-title'>Popular localities in and around <span className='city-name'>Coimbatore</span></h3>
        <div className='grid-box'>
            {
             popular.map((item,index)=>{
                return(
                    <div className='cards-grid'>
                        <div className='card-content'>
                            <div className='flex-content-column'>
                                <h5 className='place-name'>{item.name}</h5>
                                <p className='total-place'>{item.total}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 jKmKoK"><title>chevron-right</title><path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path></svg>
                        </div>
                    </div>
                )
             })
            }


        </div>
    </div>
  )
}

export default Popular