import React from 'react'
import './Login.css'

function LoginButton({data}) {
  return (
    <div>
    <button className='otp-button'>{data}</button>

    </div>
  )
}

export default LoginButton