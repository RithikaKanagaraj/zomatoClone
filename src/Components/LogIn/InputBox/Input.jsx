import React from 'react'
import './Input.css'

function Input({data,value,onChange}) {
  return (
    <div className='login-body'>
        {
        data.map((item,index)=>{
            return(
            <div key={index}>
              <input id={item.name} type={item.type} value={value} onChange={onChange}className='signup-inbox' placeholder={item.name} name={item.name} />
            </div>
                
            )
        })
        }
    </div>
  )
}

export default Input