import React,{ useState } from 'react'
import '../../App.css'
import Choice from '../../Components/ChoiceType/Choice'
import Navbar from '../../Components/Navbar/Navbar'
import Filter from '../../Components/Filter/Filter'
import Order from '../../Components/Orders/Order'
import Delivery from '../../Components/Delivery/Delivery'
import HeroContent from '../../Components/HeroContent/HeroContent'

function LocationPage() {
    const choice=[{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683874572/Zomato/download_dbmgu4.avif",
        opt:"Delivery"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683874595/Zomato/download_hatsje.avif",
        opt:"Dining Out"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683874627/Zomato/download_mj6fti.webp",
        opt:"Nightlife"
      }]
    
    
      const filter=[{
        svg : <svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>filter</title><path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path></svg>,
        type:"Filters"
      },
      {
      type : "Rating: 4.0+"
      },{
      type : "Pure Veg"
      }, 
      {
      svg : <svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="19" height="19" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>,
      type:"Cuisines"
      },
      {
      svg : <svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="19" height="19" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>,
      type:"More filters"
      }]
    
      const food=[{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683889329/Zomato/d19a31d42d5913ff129cafd7cec772f81639737697_h4mjsi.avif",
        item:"Biryani"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683889343/Zomato/197987b7ebcd1ee08f8c25ea4e77e20f1634731334_lynfv6.webp",
        item:"Chicken"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683889350/Zomato/d0bd7c9405ac87f6aa65e31fe55800941632716575_aplhos.avif",
        item:"Pizza"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683894711/Zomato/ccb7dc2ba2b054419f805da7f05704471634886169_mb44ub.avif",
        item:"Burger"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683894886/Zomato/1437bc204cb5c892cb22d78b4347f4651634827140_amprag.avif",
        item:"Chaat"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683889401/Zomato/2f34540e0b12058f5f8b9390c3a3fb4a1648972281_dfsmab.avif",
        item:"Shawarma"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683894862/Zomato/fc641efbb73b10484257f295ef0b9b981634401116_m0iojk.avif",
        item:"Sandwich"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683889369/Zomato/d5ab931c8c239271de45e1c159af94311634805744_o2gijj.avif",
        item:"Cake"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683889396/Zomato/c2f22c42f7ba90d81440a88449f4e5891634806087_rweap9.avif",
        item:"Rolls"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683889354/Zomato/e444ade83eb22360b6ca79e6e777955f1632716661_pv1vui.avif",
        item:"Fried Rice"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683889365/Zomato/2b5a5b533473aada22015966f668e30e1633434990_s9te8g.avif",
        item:"Paratha"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683889371/Zomato/52eb9796bb9bcf0eba64c643349e97211634401116_xx9xub.avif",
        item:"Thali"
      }]
    
    
      const hotel=[{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683981794/Zomato/92cb4e710a3f6019f0f4958c35e786c2_1568614848_ou8vtq.avif",
        item:"Shree Anandhaas",
        time:"21 min"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683982198/Zomato/381f5d7481d4cf08b35a063b8787070b_1617918168_umjmtk.avif",
        item:"Sree Annapoorna Sree Gowrishankar",
        time:"20 min"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683982268/Zomato/9da52e2b69f19bb603227a750e788d33_1613214750_szbdw4.avif",
        item:"KFC",
        time:"24 min"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683982285/Zomato/f94ff18ea7d97b4c0282dae14a524cc5_1611325445_qsmqsd.avif",
        item:"Night Out",
        time:"30 min"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683982306/Zomato/e5b584c45976692fd36159ec21a35981_1597745602_mafgtn.avif",
        item:"Haribhavanam",
        time:"19 min"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683982327/Zomato/c38f7540bcc5a38e918856ac06409056_1504531339_hihkrr.avif",
        item:"Pizza Hut",
        time:"30 min"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683982361/Zomato/f3944dc3b55850de223f7c58635a618a_1597217652_sjat0p.avif",
        item:"Denmarrk Drive-Inn Restaurant",
        time:"26 min"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683982379/Zomato/5caf38856d23347b351bb7abf97134d3_1545223343_ggwv0u.avif",
        item:"Domino's Pizza",
        time:"25 min"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683982401/Zomato/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187820_vmcevy.avif",
        item:"Burger King",
        time:"37 min"
      },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1683982422/Zomato/b051f1685674a04b1dae2ef38e9425d0_1507345943_w3unpl.avif",
        item:"Meat And Eat",
        time:"34 min"
      }]
    
    
    
      return (
        <div className="App">
          <div className='NavBar'>
    
          <Navbar />
          </div>
           {/* <div className="choices">  */}
             <Choice choice={choice}/>
           {/* </div> */}

        


{/*            
           <div className="filter-container">
           <div className='filter'>
            {
              filter.map((val,index) => {
                return <Filter svg={val.svg} type={val.type} key={index} />
              })
            }
           </div>
           </div>


           <div className='foodOrder-wrap'> 
            <div className='foodOrder'>

                 <Order data={food} heading="Inspiration for your first order"/> 
            </div>
           </div>
          
    
           <div className='hotelDetails '>
              <Order data={hotel} heading="Top brands for you" />
           </div>
    
     */}

           
          </div>
      )
    }
    

export default LocationPage