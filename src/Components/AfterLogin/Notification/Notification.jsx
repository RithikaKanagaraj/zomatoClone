import React,{useState} from 'react'
import './Notification.css';
import Button from '../../Button/Button';
import LoginProfile from '../../LogIn/LoginProfile/Profiles/LoginProfile';
import Menu from './Menu/Menu'


function Notification() {

  // const[active,setActive]= useState(false);

  // function handleClick(){
  //     setActive((active)=> !active);
  //   }

    const menu=[{
      name:"Order Food",
      img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688624028/Zomato/download_mcbxv2.svg"
    },{
      name:"Book a Table",
      img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1688624044/Zomato/download_ktcnv2.svg"
    }]

  return (
    <div style={{ backgroundColor: '#f0f0f2'}}>

    <div className='notification-nav'>
      <div className='nav-notification'>

          <img className='logo' src='https://res.cloudinary.com/dhtamjbrq/image/upload/v1688555422/Zomato/download_iqtqdu.svg' />
        <div className="inputWrapper-nav"  style={{display:'flex' ,flexDirection:'row'}}>
          <svg className='locationIcon sc-rbbb40-0 iRDDBk' xmlns="http://www.w3.org/2000/svg" fill="#bdbbbb" width="16" height="16" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"  ><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
    
            <div style={{display:'flex' ,flexDirection:'row'}}>
            <input className='inputBox-nav' placeholder='Coimbatore'/>
            <svg className='dropDown sc-rbbb40-0 ezrcri drop-down' xmlns="http://www.w3.org/2000/svg" fill="#bdbbbb" width="12" height="11" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" ><title>down-triangle</title><path d="M20 5.42l-10 10-10-10h20z"></path></svg>
            </div>
        </div>
        <div className="inputWrapper-nav-right" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iwHbVQ"><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg>
          <input className='inputBox-right' placeholder='Search for restaurant, cuisine or a dish'/>
        </div>
        <Button name="Search"/>
        {/* <LoginProfile /> */}
      </div>


    </div>
      <div className='header-navigation'>
        <div className='header-inner-nav'>  
          <Menu type="Get the App" img="https://res.cloudinary.com/dhtamjbrq/image/upload/v1688624009/Zomato/download_wwbnex.svg"/>
        
          <div className='header-right-nav'>
              {
                menu.map((item,index)=>{
                  return(
                    <Menu type={item.name} img={item.img}/>
                  )
                })
              }
           
          </div>
        </div>
      </div>
      <div className='navigation-body'>

      </div>
      
    </div>
  )
}

export default Notification