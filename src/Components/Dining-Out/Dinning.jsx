import React from 'react'
import './Dinning.css'
import Collections from '../HomePage/Collections/Collections'
import Filter from '../Filter/Filter'
import HeroContent from '../HeroContent/HeroContent'

function Dinning() {
  const bestFood=[{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128487/Zomato/385b3b6ebb1e16a08bcd4644fbc801e7_o2_featured_v2_xgqits.avif",
    time:"24 min",
    offer:"50% OFF up to 100",
    name:"Sri Ganapathy Mess",
    rating:"3.8",
    foodItems:"South Indian, Fast Food, Chinese, Sichuan",
    price:"₹200 for one",
    trending:"2250+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128451/Zomato/af48bade3b6565f40be493865d80bc88_o2_featured_v2_pyzofc.avif",
    time:"26 min",
    offer:"50% OFF up to 100",
    name:"Sri Krishna Iyer Mess",
    rating:"4.3",
    foodItems:"",
    price:"₹200 for one",
    trending:"600+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128327/Zomato/330a4967b61928346b74c63c087f4cf7_o2_featured_v2_xbcovz.avif",
    time:"23 min",
    offer:"50% OFF up to 100",
    name:"Shree Aksshayam",
    rating:"4.0",
    foodItems:"South Indian, Chinese, Street Food, North Indian, Sandwich, Desserts, Beverages, Shake",
    price:"₹200 for one",
    trending:"8475+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128484/Zomato/25bc1546c51e66948b5fb1bb40c37ffc_o2_featured_v2_rhkvlr.avif",
    time:"25 min",
    offer:"50% OFF up to 100",
    name:"Burma Bhai Hotel",
    rating:"4.0",
    foodItems:"South Indian, North Indian, Chinese",
    price:"₹200 for one",
    trending:"6325+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128434/Zomato/d3814341a7d4ad8a87d836f19f9a1ce9_o2_featured_v2_clor5r.avif",
    time:"23 min",
    offer:"50% OFF up to 100",
    name:"FB Cakes",
    rating:"3.9",
    foodItems:"Bakery",
    price:"₹150 for one",
    trending:"775+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128374/Zomato/5dffc4cfcd818c5efe39444d72a5627c_o2_featured_v2_pzde8c.avif",
    time:"29 min",
    offer:"50% OFF up to 100",
    name:"Guru Amuthas",
    rating:"3.9",
    foodItems:"South Indian, North Indian, Chinese",
    price:"₹150 for one",
    trending:"7025+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128317/Zomato/3324b499f276e654a972d1325b1736a2_o2_featured_v2_ltmjye.avif",
    time:"21 min",
    offer:"50% OFF up to 100",
    name:"RHR Restaurant",
    rating:"4.0",
    foodItems:"South Indian, Chinese, North Indian, Fast Food",
    price:"₹50 for one",
    trending:"2575+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128441/Zomato/1c96e3a37aea05ad338671dec5248d8c_o2_featured_v2_triy7t.avif",
    time:"35 min",
    offer:"50% OFF up to 100",
    name:"Night Lion By Madhampatty Pakashala",
    rating:"3.5",
    foodItems:"South Indian",
    price:"₹300 for one",
    trending:"7625+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128311/Zomato/a67239e7f0a96f17e2b376ddf1c52b62_o2_featured_v2_ntnprg.avif",
    time:"28 min",
    offer:"50% OFF up to 100",
    name:"Geetha Cafe",
    rating:"4.2",
    foodItems:"South Indian, Desserts, Healthy Food",
    price:"₹100 for one",
    trending:"1875+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128257/Zomato/a9538d7eb5b3c98ff7504df8c247c83c_o2_featured_v2_hkpnbr.avif",
    time:"18 min",
    offer:"50% OFF up to 100",
    name:"Geetha Canteen",
    rating:"4.0",
    foodItems:"South Indian, Chinese",
    price:"₹300 for one",
    trending:"5425+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128249/Zomato/9ee324958cfd5d1f2c8637a0227885bc_o2_featured_v2_lyadfq.avif",
    time:"23 min",
    offer:"50% OFF up to 100",
    name:"Hotel Maa",
    rating:"3.9",
    foodItems:"South Indian, Fast Food, Street Food, Beverages",
    price:"₹100 for one",
    trending:"8700+ orders placed from here recently"
  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684128279/Zomato/edc92b9e7877ea851a3d6f1190d1580f_o2_featured_v2_tcavun.avif",
    time:"31 min",
    offer:"50% OFF up to 100",
    name:"Pizza Hut",
    rating:"3.8",
    foodItems:"Pizza, Fast Food, Desserts, Beverages",
    price:"₹100 for one",
    trending:"2400+ orders placed from here recently"
  }]


    const filter=[{
        svg : <svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>filter</title><path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path></svg>,
        type:"Filters"
      },
      {
      type : "Rating: 4.0+"
      },{
        type:"Outdoor Seating"
      },{
        type:"Serves Alcohol"
      },{
        type:"Open Now"
      }
    ]


  return (
    <div>
        <div className='dinning-body'>
            <div className='collection-dinning-div'>
            <Collections />
            </div>
        </div>
           <div className='filter'>
            {
              filter.map((val,index) => {
                return <Filter svg={val.svg} type={val.type} key={index} />
              })
            }
           </div>
           
           <div className='heroContent'>
            <h3 className="heading">Best Dining Restaurants near you in RS Puram, Coimbatore</h3>
            <div className='dinning-grid'>           
              {
                bestFood.map((item,index)=>{
                  return <HeroContent key={index} img={item.img} 
                                  time={item.time} 
                                  offer={item.offer} 
                                  name={item.name} 
                                  rating={item.rating} 
                                  foodItems={item.foodItems}
                                  trending={item.trending}
                                  price={item.price} />
                })
              }
              
              </div>
 
            </div>
    </div>
  )
}

export default Dinning