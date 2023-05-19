import React from 'react'
import './Explore.css'
import Accordion from 'react-bootstrap/Accordion';

function Explore() {
    const explores=[{
        name:""
    }]
  return (
    <div className='explore'>
        <div className='explore-content'>
            <p className='explore-heading'>Explore options near me</p>

            <div className="cards-grid" > 
                <Accordion >
                    <Accordion.Item >
                        <Accordion.Header className='accordion-header'>Popular cuisines near me</Accordion.Header>
                        <Accordion.Body>
                        BBQ food near meBakery food near meBeverages food near meBiryani food near meBurger food near meChettinad food near meChinese food near meDesserts food near meIce Cream food near meJuices food near meLebanese food near meMughlai food near meNorth Indian food near mePizza food near meSandwich food near meSeafood food near meShake food near meSichuan food near meSouth Indian food near meStreet food near me
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
            </div>
            

        </div>
    </div>
  )
}

export default Explore