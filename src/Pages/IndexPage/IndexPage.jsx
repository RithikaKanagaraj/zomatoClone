import React from 'react'
import Header from '../../Components/HomePage/Header/Header'
import Service from '../../Components/HomePage/ServiceType/Service'
import './IndexPage.css'

function IndexPage() {


  const ServiceType=[{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684326544/Zomato/download_pvckvk.avif",
    name:"Order Online",
    description:"Stay home and order to your doorstep"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684326558/Zomato/download_eop43s.avif",
    name:"Dining",
    description:"View the city's favourite dining venues"
  }]




  return (
    <div>
        <div className='header'>
            <Header />
        </div>
        <div className='body-content'>
            <Service ServiceType={ServiceType}/>
        </div>
    </div>
  )
}

export default IndexPage