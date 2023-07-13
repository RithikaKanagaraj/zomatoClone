import React,{useState} from 'react'
import './Header.css'
import {LoginState} from '../../LogIn/GlobalState/LoginState'
import {SignupState} from '../../LogIn/GlobalState/SignupState'


function RightNav() {

  const { open, handleChange  } = LoginState();
  const {available,handleChanges} = SignupState();

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    

    
    <div className='right-menu'>
      
                      <ul className='right-link'>
                        <li>Investor Relations</li>
                        <li>Add restaurant</li>
                        {loggedIn ? (
                    <LoginProfile handleLogout={handleLogout} styleColor="#ffff" />
                    ) : (
                    <>
                        <li className='login' onClick={handleChange}>
                        Log in
                        </li>
                        {open && <Login open={open} handleChange={handleChange} handleLogin={handleLogin} />}
                        <li className='signup' onClick={handleChanges}>
                        Sign up
                        </li>
                        {available && <Signup available={available} handleChanges={handleChanges} handleLogin={handleLogin} />}
                    </>
                    )}
                      </ul>
    
       </div>
  )
}

export default RightNav