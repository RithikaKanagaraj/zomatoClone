import React from 'react';
import './RadioButton.css';

function RadioButton() {
  const radio = [
    {
      name: "Email"
    },
    {
      name: "Phone"
    }
  ];

  return (
    <div className='radio-btn'>
      {
        radio.map((item, index) => {
          return (
            <div key={index}>
              <input type="radio" id={item.name} value={item.name} />
              <label htmlFor={item.name} >
              <span className="radio-name">{item.name}</span>
              </label>
            </div>
          );
        })
      }
    </div>
  );
}

export default RadioButton;
