import { ErrorMessage } from 'formik';
import React from 'react'
import './Input.css'

function Input({name,type,value,onChange,onBlur,className}) {

  
  const emailValue = value && value.Email ? value.Email : '';
  const fullNameValue = value && value.FullName ? value.FullName : '';

  return (
    <div className='login-body'>
       
          
            <input id={name} 
             className={`signup-inbox ${className}`} 
              type={type} 
              placeholder={name === 'Email' ? 'Email' : 'Full Name'}
              value={name==='Email' ? emailValue : fullNameValue}
              onChange={onChange}
               onBlur={onBlur} 
               name={name} />
              
            
    </div>
  )
}

export default Input