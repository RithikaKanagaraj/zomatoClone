import React,{useState} from 'react'
import { Formik, useFormik } from 'formik';
import Input from '../../LogIn/InputBox/Input'
import LoginButton from '../../LogIn/LoginButton'
import Download from '../Footer/DownloadFrom/Download'
import './GetApp.css'
import RadioButton from './RadioButton/RadioButton'
import {basicSchema} from '../../LogIn/Form-Schema/SchemaForm'
import './RadioButton/RadioButton.css';


function GetApp() {

    const onSubmit=async(values,actions)=>{
        console.log(values)
        await new Promise((resolve)=> setTimeout(resolve,2000))
        actions.resetForm();
      }

    const data=[{
        name:"Email",
        type:"email"
    }]

    const radio = [
        {
          name: "Email"
        },
        {
          name: "Phone"
        }
      ];

    const {values,touched,handleBlur,handleChange,errors,handleSubmit}=useFormik({
        initialValues:{
            Email:""
        },
        validationSchema: basicSchema,     
        onSubmit
    });



    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  




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
                        <section className='radio-section inner-radio'>
                            {
                                radio.map((item, index)=>(
                                    <RadioButton
                                    id={item.name}
                                    name={item.name}
                                    index={index}
                                    checked={selectedOption === item.name}
                                    onChange={handleOptionChange}
                                />
                                ) 
                                )
                            }
                        </section>
                    </div>
                    <div className='text-input-box'>
                        {data.map((item, index) => (
                            <div key={index}>
                            <Input
                                name={item.name}
                                type={item.type}
                                value={values}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className={errors[item.name] && touched[item.name] ? "input-error" : ""}
                            />
                            {errors.Email && (
                                <p className='error-message'>{errors.Email}</p>
                            )}
                            </div>
                        ))}
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