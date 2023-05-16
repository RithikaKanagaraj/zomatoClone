import React from 'react'
import './LoginOption.css'

function LoginOption({data}) {
  return (
    <div className="type-login">
       { data.map((item,index)=>{
            return(
                <div className='border-div'>
                    {item.svg}
                    <p>{item.type}</p>
                    </div>
            )
        })}
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 cdktuZ"><title>mail-fill</title><path d="M10 9.58c-1.62 0-10-4.76-10-4.76v-0.74c0-0.92 0.74-1.66 1.66-1.66h16.68c0.92 0 1.66 0.74 1.66 1.66l-0.020 0.84c0 0-8.28 4.66-9.98 4.66zM10 11.86c1.78 0 9.98-4.46 9.98-4.46l0.020 10c0 0.92-0.74 1.66-1.66 1.66h-16.68c-0.92 0-1.66-0.74-1.66-1.66l0.020-10c0 0 8.36 4.46 9.98 4.46z"></path></svg> */}
        {/* <p>Continue with Email</p> */}
    </div>
  )
}

export default LoginOption