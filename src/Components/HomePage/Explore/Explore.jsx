import React from 'react'
import './Explore.css'
import Accordion from 'react-bootstrap/Accordion';

function Explore() {
    const explores=[{
        name:"Popular cuisines near me",
        list:[
            "BBQ food near me",
            "Bakery food near me",
            "Beverages food near me",
            "Biryani food near me",
            "Burger food near me",
            "Chettinad food near me",
            "Chinese food near me",
            "Desserts food near me",
            "Ice Cream food near me",
            "Juices food near me",
            "Lebanese food near me",
            " Mughlai food near me",
            "North Indian food near me",
            "Pizza food near me",
            "Sandwich food near me",
            "Seafood food near me",
            "Shake food near me",
            "Sichuan food near me",
            "South Indian food near me",
            "Street food near me"
        ]
    },{
        name:"Popular restaurant types near me",
        list:[
            "Bakeries near me",
            "Bars near me",
            "Beverage Shops near me",
            "Bhojanalya near me",
            "Cafés near me",
            "Casual Dining near me",
            "Dessert Parlors near me",
            "Dhabas near me",
            "Fine Dining near me",
            "Food Courts near me",
            "Food Trucks near me",
            "Kiosks near me",
            "Lounges near me",
            "Meat Shops near me",
            "Paan Shop near me",
            "Pubs near me",
            "Quick Bites near me",
            "Sweet Shops near me"
        ]
    }
]
  return (
    <div className='explore'>
        <div className='explore-content'>
            <p className='explore-heading'>Explore options near me</p>

            {
                explores.map((item,index)=>{
                    return(

                        <div className="cards-grid" > 
                            <Accordion style={{ marginBottom:"1.2rem"}}>
                                <Accordion.Item >
                                    <Accordion.Header className='accordion-header'>{item.name}</Accordion.Header>
                                    <Accordion.Body className='accordion-content'>
                                    <ul className="bullet-list">
                                        {item.list.map((listItem, listIndex) => (
                                        <li key={listIndex} className="bullet-list-item">
                                            <span className="bullet">&#8226;</span>
                                                {listItem}</li>
                                        ))}
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>
                        </div>
                    )
                })
            }
            

        </div>
    </div>
  )
}

export default Explore