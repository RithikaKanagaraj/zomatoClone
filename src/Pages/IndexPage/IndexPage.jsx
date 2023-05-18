import React from 'react'
import Collections from '../../Components/HomePage/Collections/Collections'
import Footer from '../../Components/HomePage/Footer/Footer'
import Header from '../../Components/HomePage/Header/Header'
import Popular from '../../Components/HomePage/Populars/Popular'
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


  const popular=[{
    name:"RS Puram",
    total:"279 Places"
  },{
    name:"Peelamedu",
    total:"404 Places"
  },{
    name:"Race Course",
    total:"81 Places"
  },{
    name:"Saibaba Colony",
    total:"195 Places"
  },{
    name:"Gandhipuram",
    total:"232 Places"
  },{
    name:"Town Hall",
    total:"105 Places"
  },{
    name:"Ramanathapuram",
    total:"143 Places"
  },{
    name:"Kalapatti",
    total:"67 Places"
  },{
    name:"Ganapathi",
    total:"125 Places"
  },{
    name:"Thudiyalur",
    total:"110 Places"
  },{
    name:"Lakshmi Mills",
    total:"47 Places"
  },{
    name:"Vadavalli",
    total:"147 Places"
  },
  {
    name:"Nehru Stadium",
    total:"34 Places"
  },{
    name:"Singanallur",
    total:"122 Places"
  },{
    name:"Chinniayam Palayam",
    total:"15 Places"
  },{
    name:"Neelambur",
    total:"52 Places"
  },{
    name:"Kavundampalayam",
    total:"70 Places"
  },{
    name:"Sitra",
    total:"79 Places"
  },{
    name:"Ukkadam",
    total:"122 Places"
  },{
    name:"Ondipudur",
    total:"77 Places"
  },{
    name:"Podanur",
    total:"181 Places"
  },{
    name:"Sivanadha Colony",
    total:"43 Places"
  }
]


  return (
    <div>
        <div className='header'>
            <Header />
        </div>
        <div className='body-content'>
            <Service ServiceType={ServiceType}/>
            <Collections />
            <Popular popular={popular}/>
           
        </div>
        <div className='homePage-footer'>

        <Footer />
        </div>
    </div>
  )
}

export default IndexPage