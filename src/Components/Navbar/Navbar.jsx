import {useState} from 'react'
import './Navbar.css'
import Location from '../DropDown/Location';
import Signup from '../LogIn/Signup/Signup'
import Login from '../LogIn/Login';
import {LoginState} from '../LogIn/GlobalState/LoginState'
import { SignupState } from '../LogIn/GlobalState/SignupState';
import SearchBar from '../SearchBar/SearchBar';


function Navbar() {



  const { open, handleChange  } = LoginState();
  const {available,handleChanges} = SignupState();


  return (
    <nav className='nav'>
        <img className='logo' src='https://res.cloudinary.com/dhtamjbrq/image/upload/v1683874523/Zomato/download_xful86.avif'/>
        <SearchBar />
        <div className='account'>
          <div className='login'  onClick={handleChange}>Log in</div>
          {open && <Login open={open} handleChange={handleChange}/>}
          <div className='signup' onClick={handleChanges}>Sign up</div>
          {available && <Signup available={available} handleChanges={handleChanges}/>}


        </div>
    </nav>
  )
}

export default Navbar