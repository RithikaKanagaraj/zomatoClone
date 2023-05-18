import {useState} from 'react'
import './Navbar.css'
import Location from '../DropDown/Location';
import Signup from '../LogIn/Signup/Signup'
import Login from '../LogIn/Login';
import {LoginState} from '../LogIn/GlobalState/LoginState'
import { SignupState } from '../LogIn/GlobalState/SignupState';
import SearchBar from '../SearchBar/SearchBar';


function Navbar() {

  // const[active,setActive]= useState(false);


  const { open, handleChange  } = LoginState();
  const {available,handleChanges} = SignupState();

  

  // function handleClick(){
  //   setActive((active)=> !active);
  // }

  

  

  return (
    <nav className='nav'>
        <img className='logo' src='https://res.cloudinary.com/dhtamjbrq/image/upload/v1683874523/Zomato/download_xful86.avif'/>
        <SearchBar />
        <div className='account'>
          <div className='login'  onClick={handleChange}>Log in
          </div>
          {open && <Login open={open} handleChange={handleChange}/>}
          <div className='signup' onClick={handleChanges}>Sign up
          </div>
          {available && <Signup available={available} handleChanges={handleChanges}/>}


        </div>
    </nav>
  )
}

export default Navbar