import React from 'react'
import './Main.css'

function Main() {

  const foot=[{
    head:"ABOUT ZOMATO",
    list:[
      "Who We Are",
      "Blog",
      "Work With Us",
      "Investor Relations",
      "Report Fraud",
      "Contact Us"
    ]
  },{
    head:"ZOMAVERSE",
    list:[
      "Zomato",
      "Blinkit",
      "Feeding India",
      "Hyperpure",
      "Zomaland"
    ]
  },{
    head:"FOR RESTAURANTS",
    list:[
      "Patner with us",
      "Apps For You"
    ]
  },{
    head:"LEARN MORE",
    list:[
      "Privacy",
      "Security",
      "Terms",
      "Sitemap"
    ]
  }]
    
  return (
    <div className='footer-content'>
      {
        foot.map((item,index)=>{
          return(
            <div style={{marginTop:"1.5rem"}}>
              <h6 className='foot-main-head'>{item.head}</h6>
              <ul style={{paddingLeft:"0"}}>
                {
                  item.list.map((listItem, listIndex)=>(
                    <li className='list-foot'>{listItem}</li>
                  ))
                }
              </ul>
            </div>

          )
        })
      }
    </div>
  )
}

export default Main