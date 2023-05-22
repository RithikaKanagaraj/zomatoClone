import React,{useState} from 'react'
import { Formik, useFormik } from 'formik';
import Input from '../../LogIn/InputBox/Input'
import LoginButton from '../../LogIn/LoginButton'
import Download from '../Footer/DownloadFrom/Download'
import './GetApp.css'
import RadioButton from './RadioButton/RadioButton'
import {basicSchema} from '../../LogIn/Form-Schema/SchemaForm'

function GetApp() {

    const onSubmit=()=>{
        console.log(12345)
      }

    const data=[{
        name:"Email",
        type:"email"
    }]

    const {values,touched,handleBlur,handleChange,errors,handleSubmit}=useFormik({
        initialValues:{
            Email:''
        },
        validationSchema:basicSchema,
        onSubmit
        
    });
    console.log(errors.initialValues)

  return (
    <div className='Zomato-app'>
        <div className='app-div'>
            <div className='mob-div'>

            <img className="image-mobile" src='https://res.cloudinary.com/dhtamjbrq/image/upload/v1684472959/Zomato/download_sgohcm.avif'></img>
            </div>
            <div className='form-page'>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <h2 className='app-head'>Get the Zomato app</h2>
                    <p className='app-subtitle'>We will send you a link, open it on your phone to download the app</p>
                    <div className='radio-div'>
                        <section className='radio-section'>
                        <RadioButton />
                        </section>
                    </div>
                    <div className='text-box'>

                    <Input data={data} 
                        value={values.initialValues}
                        onBlur={handleBlur} 
                        onChange={handleChange}
                        className={errors.initialValues ? "input-error" : ''}/>



                    <div className='button-link'>
                    <LoginButton data="Share App Link" />
                    </div>
                    </div>
                </form>
                    <p className='Download'>Download app from</p>
                        <Download />
            </div>
        </div>
    </div>
  )
}

export default GetApp