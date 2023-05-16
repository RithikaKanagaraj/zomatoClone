import React, { useState } from 'react';
import './Choice.css'

function Choice({choice}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
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
  );
}

export default Choice;
