import React from 'react'
import Filter from '../Filter/Filter'
import HeroContent from '../HeroContent/HeroContent'
import './NightOut.css'

function NightOut() {

  const filter=[{
    svg : <svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>filter</title><path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path></svg>,
    type:"Filters"
  },
  {
  svg : <svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><path d="M9.9,14.8l-2.3,2.3V9c0-0.5-0.4-0.8-0.8-0.8S5.9,8.5,5.9,9v8.2l-2.3-2.3c0,0,0,0,0,0c-0.3-0.3-0.9-0.3-1.2,0 c-0.3,0.3-0.3,0.8,0,1.2l3.7,3.7c0.3,0.3,0.8,0.3,1.2,0l3.7-3.7c0.2-0.2,0.2-0.4,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6 C10.8,14.5,10.3,14.5,9.9,14.8z"></path><path d="M17.6,4l-3.7-3.7c-0.3-0.3-0.8-0.3-1.2,0L8.9,4C8.7,4.1,8.6,4.4,8.7,4.6c0,0.2,0.1,0.4,0.2,0.6c0.3,0.3,0.8,0.3,1.2,0 l2.3-2.3V11c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8V2.9l2.3,2.3c0,0,0,0,0,0c0.3,0.3,0.9,0.3,1.2,0C17.9,4.8,17.9,4.3,17.6,4 z"></path></svg>,
  type:"Distance"
  },
  {
  type : "Rating: 4.0+"
  },
  {
  type:"Pubs & Bars"
  }]

  const bestFood=[{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636377/Zomato/download_suizxr.avif",
    name:"Sherlock's - Lounge & Kitchen",
    rating:"4.1",
    foodItems:"Cuisine Varies, Chinese, Continental, Bar Food, Oriental, Pizza, Pasta, Biryani",
    price:"₹2,000 for two",
    location:"Brookefields Mall, RS Puram, Coimbatore",
    distance:"1.8 km"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636389/Zomato/download_cjex3s.avif",
    name:"The Cavern @312",
    rating:"4.4",
    location:"Gandhipuram, Coimbatore",
    distance:"272 m",
    foodItems:"Modern Indian, Continental",
    price:"₹1300 for two",
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636400/Zomato/download_b0kc15.avif",
    name:"10 Downing Street",
    rating:"4.3",
    distance:"8.6 km",
    location:"Sitra, Coimbatore",
    foodItems:"South Indian, Chinese, Street Food, North Indian, Sandwich, Desserts, Beverages, Shake",
    price:"₹800 for two",
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636411/Zomato/download_u3hmwd.avif",
    name:"Func - #6 Hotels",
    rating:"4.9",
    foodItems:"South Indian, North Indian, Chinese",
    price:"₹1500 for two",
    distance:"2.5 km",
    location:"Saibaba Colony, Coimbatore",
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636470/Zomato/download_zt3kid.avif",
    name:"Global Barbeque",
    rating:"4.2",
    foodItems:"South Indian, North Indian, Chinese",
    price:"₹1200 for two",
    distance:"2.8 km",
    location:"Vijay Elanza Central, Peelamedu, Coimbatore",
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636429/Zomato/download_ce03wr.avif",
    name:"Black Box  - The Arcadia Hotel",
    rating:"4.3",
    foodItems:"Finger Food, Chinese",
    price:"₹1100 for two",
    distance:"8.3 km",
    location:"Chinniayam palayam, Coimbatore"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636421/Zomato/download_l0g9g9.avif",
    name:"Hush Bar - Radisson Blu",
    rating:"4.3",
    foodItems:"Finger Food, Bar Food, North Indian",
    price:"₹1500 for two",
    distance:"2.2 km",
    location:"Radisson Blu, Peelamedu, Coimbatore"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636451/Zomato/download_zbqstj.avif",
    name:"Spice It by IBIS",
    rating:"4.3",
    foodItems:"Continental, Healthy Food, North Indian, Fast Food, Finger Food, Desserts, Beverages",
    price:"₹1000 for two",
    distance:"1.7 km",
    location:"Lakshmi Mills, Coimbatore"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636459/Zomato/download_pog5ao.avif",
    name:"Latitude 11 - Le Meridien",
    rating:"4.2",
    foodItems:"Finger Food",
    price:"₹2,200 for two",
    distance:"12 km",
    location:"Le Meridien, Neelambur, Coimbatore"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636487/Zomato/download_pcmpnr.avif",
    name:"Tease - Vivanta Coimbatore",
    rating:"4.4",
    foodItems:"Finger Food, North Indian",
    price:"₹4,000 for two",
    distance:"1.8 km",
    location:"Vivanta Coimbatore, Race Course, Coimbatore"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636495/Zomato/download_xcr8y9.avif",
    name:"Shooters Bar And Rooftop Dine",
    rating:"4.0",
    foodItems:"Mughlai, North Indian, BBQ, Bar Food, Beverages",
    price:"₹1,900 for two",
    distance:"8.6 km",
    location:"Sitra, Coimbatore"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636504/Zomato/download_dykxve.avif",
    name:"The Cotton Bar - ITC Hotels",
    rating:"4.6",
    foodItems:"Finger Food",
    price:"₹1,500 for two",
    distance:"2.4 km",
    location:"Race Course, Coimbatore"
  }
]

  return (
    <div>
      <div className='filter'>
            {
              filter.map((val,index) => {
                return <Filter svg={val.svg} type={val.type} key={index} />
              })
            }
      </div>

          <div className='nightOut-body'>

            <div className='nightOut-body-content'>
              <img className='img-nightout' src='https://res.cloudinary.com/dhtamjbrq/image/upload/v1688636353/Zomato/download_dcrlfo.avif'></img>
            </div>
            <h3 className="heading">Nightlife Restaurants in Coimbatore</h3>

            <div className='dinning-grid'>           
              {
                bestFood.map((item,index)=>{
                  return <HeroContent key={index} img={item.img} 
                        
                                  offer={item.offer} 
                                  name={item.name} 
                                  rating={item.rating} 
                                  foodItems={item.foodItems}
                                  trending={item.trending}
                                  price={item.price} 
                                  distance={item.distance}
                                  location={item.location}/>
                })
              }
              
              </div>
          </div>



    </div>
  )
}

export default NightOut