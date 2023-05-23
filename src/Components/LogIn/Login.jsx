import {useRef,useState} from 'react'
import './Login.css'
import LoginButton from './LoginButton';
import LoginOption from './LoginOption'
import CountryCode from './CountryCode/CountryCode';



function Login({handleChange}) {

const modeofLogin=[{
  svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 cdktuZ"><title>mail-fill</title><path d="M10 9.58c-1.62 0-10-4.76-10-4.76v-0.74c0-0.92 0.74-1.66 1.66-1.66h16.68c0.92 0 1.66 0.74 1.66 1.66l-0.020 0.84c0 0-8.28 4.66-9.98 4.66zM10 11.86c1.78 0 9.98-4.46 9.98-4.46l0.020 10c0 0.92-0.74 1.66-1.66 1.66h-16.68c-0.92 0-1.66-0.74-1.66-1.66l0.020-10c0 0 8.36 4.46 9.98 4.46z"></path></svg>,
  type:"Continue with Email"
},{
  svg:<svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z" fill="#FBBB00"></path><path d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z" fill="#518EF8"></path><path d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z" fill="#28B446"></path><path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z" fill="#F14336"></path></svg>,
  type:"Continue with Google"
}]


  const inputRef = useRef(null);

  const[active,setActive]= useState(false);

  function handleClick(){
      setActive((active)=> !active);
    }
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleFocus = () => {
    inputRef.current.style.border = '2px solid #008080';
  };

  const handleBlur = () => {
    inputRef.current.style.borderColor = '';
  };

    return (
      <div className='login-page'>
          <div className='login-card'>
          <section className='login-header'>
              <p className='login-name'>Login</p>
           

              <svg  onClick={handleChange} xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 cdktuZ"  ><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg>
          </section>
          <section className='login-body'>
                <div className='input-box' ref={inputRef}  onFocus={handleFocus} onBlur={handleBlur}>
                    
                    <div className='flex-left'>
                     
                      <img className='country-flag'  src={selectedCountry ? selectedCountry.img : 'https://res.cloudinary.com/dhtamjbrq/image/upload/v1684213642/Zomato/in_aqd7tt.webp'}alt='Flag'></img>
                      <div className='country-code'>{selectedCountry ? selectedCountry.code : '+91'}</div>
                      <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClick} fill="#1C1C1C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 cdAyKd"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>

                    </div>
                    {active && <CountryCode onSelectCountry={handleCountrySelect}/>}


                    <div className='separation-line'></div>
                    <div className='flex-right'>
                      <input className='login-input' placeholder='Phone'/>
                    </div>
                </div>
                <LoginButton data="Send One Time Password"/>
                {/* <button className='otp-button'>Send One Time Password</button> */}
                <div className='or-option'>
                  <hr className='hr-line'></hr>
                  <div className='or'>or</div>
                </div>
                <div ><LoginOption data={modeofLogin}/></div>
                <div className='vertical-line'></div>
                <div className='login-foot'>New to Zomato? <span className='create-account'>Create account</span></div>
          </section>
          </div>
      </div>
    )

  }


export default Login