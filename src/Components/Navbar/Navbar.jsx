import {useState} from 'react'
import './Navbar.css'
import Location from '../DropDown/Location';
import Login from '../LogIn/Login';
import Signup from '../LogIn/Signup/Signup';

function Navbar() {

  const[active,setActive]= useState(false);
  const[login,setLogin]=useState(false);
  const[signup,setSignup]=useState(false);

  function handleClick(){
    setActive(!active);
  }

  function handleLogin(){
    setLogin(true)
  }

  function handleSignup(){
    setSignup(true)
  }

  return (
    <nav className='nav'>
        <img className='logo' src='https://res.cloudinary.com/dhtamjbrq/image/upload/v1683874523/Zomato/download_xful86.avif'/>

        <div className='inputWrapper'> 
        <div style={{display:'flex' ,flexDirection:'row'}}>
          <svg className='locationIcon' xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="16" height="16" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk" ><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
       
       <div style={{display:'flex' ,flexDirection:'row'}}>
         <input className='inputBox' placeholder='Coimbatore'onClick={handleClick}/>
         <svg className='dropDown' xmlns="http://www.w3.org/2000/svg" fill="#4F4F4F" width="12" height="11" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ezrcri drop-down" onClick={handleClick}><title>down-triangle</title><path d="M20 5.42l-10 10-10-10h20z"></path></svg>
         {active ? <Location /> : null}
       </div>
        </div>
          

        <div className='line'></div>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg>
        <input className='inputBox-right' placeholder='Search for restaurant, cuisine or a dish'/>
        </div>

        <div className='account'>
          <div className='login' onClick={handleLogin}>Log in
          {login && <Login />}
          </div>
          <div className='signup' onClick={handleSignup}>Sign up
          {signup && <Signup />}
          </div>

        </div>
    </nav>
  )
}

export default Navbar