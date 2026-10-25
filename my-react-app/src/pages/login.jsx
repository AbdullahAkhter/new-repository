import React, { useContext, useState } from 'react'
import logo from '../assets/title.png'
import google from "../assets/google.png"
import {useNavigate} from "react-router-dom"
import { useUserContext } from '../context/UserContex'
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";
import { signInWithPopup } from 'firebase/auth';
import{auth,Provider} from "../../utils/Firebase"
import axios from 'axios';

function Login() {
    const navigate=useNavigate();
    const[show,setshow]=useState(false)
    const[userinput,setuserinput]=useState({})
    const{getCurrentUser}=useUserContext()
    const handleInput=(e)=>{
      setuserinput({...userinput,[e.target.id]:e.target.value})
    }
     const googleLogin=async()=>{
            try {
               const response=await signInWithPopup(auth,Provider)
               const name=response.user.displayName;
               const email=response.user.email
                const googleApi=await axios.post('http://localhost:3000/api/auth/googleLogin',{name,email},{withCredentials:true});
                const data=googleApi.data;
                getCurrentUser();
            
                console.log("The data is ",data)
            } catch (error) {
                console.log(error)
            }
            
        }
        const login=async(e)=>{
            try {
                console.log("the function is running")
                console.log("The userdata is",userinput)
                 e.preventDefault()
            const result=await axios.post("http://localhost:3000/api/auth/login",userinput,{withCredentials:true});
            console.log("The result is i",result.data)
            getCurrentUser()
            navigate('/')
            } catch (error) {
                console.log("The error ",error)
            }
           
        }

    return (
        <div
            className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white
    flex flex-col items-center justify-start'>
            <div
                className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px]
        cursor-pointer'>
                <img
                    src={logo}
                    className='w-[40px]'
                />
                <h1
                    className='text-[22px] font-bold '>One Cart</h1>

            </div>
            <div
                className='w-[100%] h-[100px] flex items-center justify-center  flex-col gap-[10px]'>
                <span
                    className='text-[25px] font-semibold'>Login Page</span>
                <span
                    className='text-[16px]'> Welcome to One Cart,place your order</span>
            </div>
            //Cart

            <div
                className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635]
        backdrop-blur-2xl rounded-lg shadow-lg flex flex-col items-center justify-center'>

                <form
                    className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[10px]'
                    onSubmit={login}>
                    <div
                        className='w-[90%] h-[50px] flex items-center justify-center py-[20px]
              rounded-lg bg-[#42656cae] cursor-pointer gap-[10px]'
              onClick={googleLogin}>
                        <img
                            src={google}
                            className='w-[20px]' /> Login with google
                    </div>
                    <div
                        className='w-[100%] h-[20px] flex items-center justify-center gap-[10px] '>
                        <div
                            className='w-[40%] h-[1px] bg-[#96969635]'></div>Or<div
                                className='w-[40%] h-[1px] bg-[#96969635]'></div>
                    </div>

                    <div
                        className='w-[90%] h-[400px] flex flex-col items-center justify-start gap-[15px]
                        relative'>
                      
                        <input
                            type='email'
                            className='w-[100%] h-[50px] bg-transparent backdrop-blur-sm rounded-lg
                shadow-lg border-[2px] border-[#96969635]
                px-[20px] font-semibold outline-0 '
                            placeholder='Eamil'
                            id='email'
                            onChange={handleInput}
                            />
                        <input
                          type={show?'text':'password'}
                            className='w-[100%] h-[50px] bg-transparent  backdrop-blur-sm rounded-lg
                shadow-lg border-[2px] border-[#96969635]
                px-[20px] font-semibold outline-0 '
                            placeholder='password'
                             id='password'
                             onChange={handleInput}
                             
                              />
                            {show? <LuEyeOff 
                             className='absolute  top-20 right-[5%]'
                             onClick={()=>setshow(!show)}/>:
                            <IoEyeOutline
                            className='absolute  top-20 right-[5%]' 
                             onClick={()=>setshow(!show)}/>

                           }
                            <button
                        className='w-[100%] h-[50px] bg-[#6060f5]
              rounded-lg flex items-center justify-center
              mt-[20px] text-[17px] font-semibold'
              type='submit'>Login Your Account</button>
               <p
                className='flex gap-[10px] '>You have not any account<span
                className='text-[#5555f6cf] text-[17px] font-semibold'
                onClick={()=>navigate('/registration')}>New Registration</span></p>
                        
                    </div>
                   
                </form>
               
            </div>
        </div>
    )
}

export default Login