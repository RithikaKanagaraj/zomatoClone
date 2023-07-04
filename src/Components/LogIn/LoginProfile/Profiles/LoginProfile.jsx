import {useState} from 'react'
import Dropdown from '../ProfileDropdown/Dropdown'
import './LoginProfile.css'

function LoginProfile({styleColor}) {

    const[active,setActive]=useState(false)

   const handleClick = () => {
    setActive(!active);
  };



  return (
    <div className='profile-div' onClick={handleClick}>
        <div className='profile-inner-div'>
                <img className='profile-image' src="https://res.cloudinary.com/dhtamjbrq/image/upload/v1684818772/Zomato/download_u9osyr.avif" alt="profile" />
            
            <div className='user-name' style={{color:styleColor}}>Rithika</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill={styleColor} width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iwHbVQ">
                 <title>chevron-down</title>
                     <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
            </svg>
             {active && <Dropdown />}
        </div>
    </div>
  )
}

export default LoginProfile