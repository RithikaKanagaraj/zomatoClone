import React from 'react'
import './Button.css'

function Button({name}) {
  return (
    <div>
        {console.log(name)}
        <button className="button-nav">{name}</button>

    </div>
  )
}

export default Button