import React from 'react'
import './Filter.css'

function Filter({svg,type}) {


  return (
    <div className='filterType'>
       

        
        {
            type === "Filters" && <div className='separate'>{svg} {type}</div> 
        }
        {
            type==="Rating: 4.0+"  && <div className='separate'> {type}</div>
        } 
        {
             type==="Pure Veg" && <div className='separate'>{type}</div>
        }
        {
            type==="Cuisines" && <div className='separate'>{type} {svg}</div>
        }
        {
            type==="More filters"&& <div className='separate'>{type} {svg}</div>
        }
   </div>
    
  )
}

export default Filter