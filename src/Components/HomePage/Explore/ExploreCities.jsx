import {useState} from 'react'
import './ExploreCities.css'
import Accordion from 'react-bootstrap/Accordion';


function ExploreCities({location}) {

    const [visibleCards, setVisibleCards] = useState(59); 

    const length=location[0].list.length
    const handleSeeMore = () => {
        setVisibleCards(visibleCards + (length -59));
     };


  return (
    <div >
            {
                location.map((item,index)=>{
                    return(

                        <div className="cards-grid" key={index} > 
                            <Accordion style={{ marginBottom:"1.2rem"}}>
                                <Accordion.Item >
                                    <Accordion.Header className='accordion-header'>{item.name}</Accordion.Header>
                                    <Accordion.Body className='accordion-content'>
                                    <ul className="bullet-list-place">
                                        {item.list.slice(0, visibleCards).map((listItem, listIndex) => (
                                        <li key={listIndex} >{listItem}</li>
                                        ))}
                                        {visibleCards < length && (
                                            <p className="link" onClick={handleSeeMore}>See more</p>
                                        
                                    )}
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>
                        </div>
                    )
                })
            }
        
    </div>
  )
}

export default ExploreCities