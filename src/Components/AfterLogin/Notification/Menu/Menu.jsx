import React from 'react'
import '../Notification.css'

function menu({type,img}) {
  return (
   
          <div className='headerContent-navigation'>
            <img className='navigation-img' src={img}/>
            <div className='nav-app'>{type}</div>
          </div>
  )
}

export default menu