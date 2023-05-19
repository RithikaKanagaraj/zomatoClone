import React from 'react'
import './Explore.css'
import Accordion from 'react-bootstrap/Accordion';
import ExploreCities from './ExploreCities';

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

    const location=[{
        name:"Cities We Deliver To",
        list:["Delhi" ,"NCR","Kolkata","Mumbai","Bengaluru","Pune","Hyderabad","Chennai",
    "Lucknow","Kochi","Jaipur","Ahmedabad","Chandigarh","Goa","Indore","Gangtok","Nashik","Ooty",
    "Shimla","Ludhiana","Guwahati","Amritsar","Kanpur","Allahabad","Aurangabad","Bhopal","Ranchi",
    "Visakhapatnam","Bhubaneswar","Coimbatore","Mangalore","Vadodara","Nagpur","Agra","Dehradun",
    "Mysore","Puducherry","Surat","Varanasi","Patna","Udaipur","Srinagar","Khajuraho","Neemrana",
    "Cuttack","Trivandrum","Haridwar","Leh","Pushkar","Rajkot","Madurai","Kozhikode","Alappuzha",
    "Thrissur", "Manipal", "Vijayawada", "Jodhpur", "Kota" ,"Ajmer" ,"Mussoorie", "Rishikesh",
    "Jalandhar", "Jammu" ,"Manali" ,"Dharamshala", "Raipur", "Gorakhpur", "Palakkad", "Shirdi", 
    "Ujjain", "Jaisalmer", "Kodaikanal" ,"Puri" ,"Jamnagar", "Junagadh", "Tirupati", "Darjeeling",
    "Bilaspur" ,"Itanagar" ,"Siliguri", "Nainital", "Meerut","Vellore","Salem","Trichy","Patiala",
    "Kolhapur", "Amravati", "Jabalpur" ,"Gwalior", "Jamshedpur", "Guntur" ,"Agartala", "Aizawl", 
    "Anand" ,"Bareilly", "Bathinda", "Durg", "Bhilai","Bikaner","Diu","Erode","Imphal","Jhansi",
    "Karnal","Kharagpur","Kohima", "Mount Abu" , "Panipat", "Rourkela" ,"Saharanpur", "Shillong",
     "Silvassa", "Tanjore", "Tiruppur", "Warangal", "Dharwad", "Hubli", "Muktsar", "Ahmednagar", 
     "AligarhAlwar","Anantapur","Belgaum","Bellary","Bhavnagar","Bokaro","Davanagere"]}]
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
        <ExploreCities location={location} />
        </div>
    </div>
  )
}

export default Explore