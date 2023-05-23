import React from 'react'
import './LeftMenu.css'


function LeftMenu({heading,list}) {

  return (
    <div className='review-left-menu'>
        
       
      <h4 className='left-menu-heading'>{heading}</h4>
      <ul>
        {list.map((item, index) => (
          <li className='left-menu-list name-style' key={index}>{item}</li>
        ))}
      </ul>
 

        
    </div>
  )
}

export default LeftMenu





