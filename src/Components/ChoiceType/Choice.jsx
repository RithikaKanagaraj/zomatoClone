import React, { useState } from 'react';
import './Choice.css'
import Delivery from '../Delivery/Delivery';
import Dinning from '../Dining-Out/Dinning';
import NightOut from '../NightOut/NightOut';

function Choice({choice}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const components = [Delivery, Dinning, NightOut];

  const ActiveComponent = components[activeIndex];


  return (
    <div>
    <div className="choices">
    <div className='navTop'>
      {choice.map((e, index) => (
        <div
          key={index}
          className={`separate ${activeIndex === index ? 'active' : 'non-active'}`}
          onClick={() => setActiveIndex(index)}
        >
          <div className='imgDiv'>
            <img className='Image' src={e.img}/>
          </div>
          <p className='choiceText'>{e.opt}</p>
        </div>
      ))}
    </div>
    </div>
      {ActiveComponent && <ActiveComponent />}
    </div>
  );
}

export default Choice;
