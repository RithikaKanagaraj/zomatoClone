import React,{useState} from 'react';
import './RadioButton.css';

function RadioButton({id,name,index,checked, onChange}) {

  return (
    <div className='radio-btn' index={index}>
      <input
        type='radio'
        id={id}
        name={name}
        value={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className={checked ? 'active' : 'non-active'}>
      
        <span className="radio-name">{name}</span>
      </label>
    </div>
  );
}

export default RadioButton;