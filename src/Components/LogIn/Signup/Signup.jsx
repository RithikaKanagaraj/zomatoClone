import {useState} from 'react'
import Input from '../InputBox/Input';
import './Signup.css'
import { Formik, useFormik } from 'formik';
import LoginOption from '../LoginOption';
import {basicSchema} from '../../LogIn/Form-Schema/SchemaForm'


function Signup({handleChanges}) {


  const onSubmit=async(values,actions)=>{
    console.log(values)
    await new Promise((resolve)=> setTimeout(resolve,1000))
    actions.resetForm();
  }

  const google=[{

    svg:<svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z" fill="#FBBB00"></path><path d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z" fill="#518EF8"></path><path d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z" fill="#28B446"></path><path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z" fill="#F14336"></path></svg>,
    type:"Continue with Google"

    }]

    const details=[{
      name:"FullName",
      type:"text"
    },{
      name:"Email",
      type:"email"
    }]


    const {values,touched,handleBlur,isSubmitting,handleChange,errors,handleSubmit}=useFormik({
      initialValues:{
          Email:"",
          FullName:""
      },
      validationSchema:basicSchema,
      onSubmit
  });

    console.log(errors)

    
  return (
    <div className='login-page'>
        <div className='signup-card'>
        <section className='login-header'>
            <p className='login-name'>Sign up</p>
            
            <svg onClick={handleChanges} xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 cdktuZ"  ><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg>
            
        </section>
        <section className='sign-body'>
          <form onSubmit={handleSubmit} autoComplete='off'>
          <div className='text-box'>
            {details.map((item, index) => (
              <div key={index} >
                <Input
                  name={item.name}
                  type={item.type}
                  value={values}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={errors[item.name] && touched[item.name] ? "input-error" : ""}
                />
            
                  <p className='error-message'>{errors[item.name] && touched[item.name] && errors[item.name]}</p>
              </div>
            ))}
          </div>

      
          <div className='checkbox-div'>
            <input type="checkbox" className="check-box" />
            <p className='policy'>I agree to Zomato's <span className='highLights'>Terms of Service</span>,<span className='highLights'>Privacy Policy</span> and <span className='highLights'>Content Policies</span></p>
          </div>
          <button disabled={isSubmitting} className='account-button'>Create account</button>
        </form>
          <div className='or-option-sign'>
                <hr className='hr-line'></hr>
                <div className='or'>or</div>
          </div>
          <div className='google-btn-div'>
            <LoginOption  data={google}/></div>
          <p className='sign-foot'>Already have an account? <span className='create-account'>Log in</span></p>
        </section>
        </div>
        
    </div>
  )
}

export default Signup