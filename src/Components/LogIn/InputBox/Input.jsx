import React from 'react'
import './Input.css'

function Input({data}) {
  return (
    <div className='login-body'>
        {
        data.map((item,index)=>{
            return(
            <div key={index}>
              <input id={item.name} type={item.type} className='signup-inbox' placeholder={item.name} name={item.name} />
            </div>
                
            )
        })
        }
    </div>
  )
}

export default Input