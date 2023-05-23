import React from 'react'
import './CountryCode.css'

function CountryCode({ onSelectCountry }) {


    const handleCountryClick = (country) => {
        onSelectCountry(country);
      };
    


    const data=[{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684213642/Zomato/in_aqd7tt.webp",
        country:"India",
        code:"+91"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684760408/Zomato/download_uhg51p.webp",
        country:"Afghanistan",
        code:"+93"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684760552/Zomato/download_t0yaxo.webp",
        country:"Albania",
        code:"+335"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684760582/Zomato/download_wxbqer.webp",
        country:"Algeria",
        code:"+213"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684760645/Zomato/download_sfuco4.webp",
        country:"Andorra",
        code:"+376"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684760722/Zomato/download_ng6cih.webp",
        country:"Argentina",
        code:"+54"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684760779/Zomato/download_hbx7m1.png",
        country:"Australia",
        code:"+61"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684760873/Zomato/download_g4krjt.webp",
        country:"Bahrain",
        code:"+973"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684760922/Zomato/download_dszlaz.webp",
        country:"Canada",
        code:"+1"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684760973/Zomato/download_vbdpwe.png",
        country:"Congo",
        code:"+242"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684761010/Zomato/download_ycc7pk.png",
        country:"Denmark",
        code:"+45"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684761051/Zomato/download_usc0du.webp",
        country:"Egypt",
        code:"+20"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684761085/Zomato/download_yliths.webp",
        country:"Finlend",
        code:"+358"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684761123/Zomato/download_qowrnv.webp",
        country:"Italy",
        code:"+39"
    },{
        img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684761157/Zomato/download_qog4rh.png",
        country:"Maldives",
        code:"+960"
    }

    ]




  return (
    <div className='countryCode-wrapper'>
            {
              data.map((item,index)=>{
                return(
                <div className='country-details-div' key={index} onClick={() => handleCountryClick(item)}>
                    <img className='country-flag' src={item.img}></img>
                    <div className='country-name'>{item.country}</div>
                    <div className='separation-line'></div>
                    <div className='country-code'>{item.code}</div>
                </div>
                )                
                })
            }
        
    </div>
  )
}

export default CountryCode