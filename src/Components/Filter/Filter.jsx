import React from 'react'
import './Filter.css'

function Filter({svg,type}) {


  return (
    <div className='filterType'>
       {svg && type ? (
        <div className='separate'>{type} {svg} </div>
      ) : (
        <div className='separate'>{type}</div>
      )}
   </div>
    
  )
}

export default Filter