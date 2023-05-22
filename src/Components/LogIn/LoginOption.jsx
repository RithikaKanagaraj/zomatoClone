import React from 'react'
import './LoginOption.css'

function LoginOption({data,disabled}) {
  return (
    <div className="type-login">
       { data.map((item,index)=>{
            return(
                <div className='border-div'>
                    {item.svg}
                    <div>{item.type}</div>
                    </div>
            )
        })}
       
    </div>
  )
}

export default LoginOption