import { ErrorMessage } from 'formik';
import React from 'react'
import './Input.css'

function Input({data,value,onChange,onBlur,className}) {

  
  const emailValue = value && value.Email ? value.Email : '';
  const fullNameValue = value && value.FullName ? value.FullName : '';

  return (
    <div className='login-body'>
        {
        data.map((item,index)=>{
            return(
            <div key={index}>
              <input id={item.name} 
             className={`signup-inbox ${className}`} 
              type={item.type} 
              placeholder={item.name === 'Email' ? 'Email' : 'Full Name'}
              value={item.name==='Email' ? emailValue : fullNameValue}
              onChange={onChange}
               onBlur={onBlur} 
               name={item.name} />
            </div>
                
            )
        })
        }
    </div>
  )
}

export default Input