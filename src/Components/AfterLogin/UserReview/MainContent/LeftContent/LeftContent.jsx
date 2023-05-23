import React from 'react'
import LeftMenu from './LeftMenu'
import './LeftContent.css'
import Suggested from './Suggested/Suggested'

function LeftContent() {

  const menus=[{
    heading:"Activity",
    list:[
      "Reviews",
      "Photos",
      "Followers",
      "Recently Viewed",
      "Bookmarks",
      "Blog Posts",
    ]
  },{
    heading:"Online Ordering",
    list:[
      "Order History",
      "My addresses",
      "Favourite Orders"
    ]
  },{
    heading:"Payments",
    list:[
      "Zomato Credits",
      "Manage Wallets",
      "Manage Cards"
    ]
  },{
    heading:"Table Booking",
    list:[
      "Your Bookings"
    ]
  }]
  return (
    <div className='left-menu-div'>
        <div className='select-background'></div>
        
      {
        menus.map((item,index)=>{
          return <LeftMenu key={index} heading={item.heading} list={item.list} />
        })
      }
      <div className='review-left-menu'> 
      <Suggested />
      </div>
    </div>
    
  )
}

export default LeftContent