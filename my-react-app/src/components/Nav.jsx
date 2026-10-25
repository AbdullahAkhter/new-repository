import React, { useState } from 'react'
import logo from "../assets/title.png"
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useUserContext } from '../context/UserContex';
import { IoIosHome } from "react-icons/io";
import { BiSolidCollection } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Nav() {
  const [toogleSearch, settoogle] = useState(false)
  const [toogleprofile, setprofile] = useState(false)
  const navigate=useNavigate();
  const{userdata}=useUserContext()
  const{getCurrentUser}=useUserContext();
  const handleLogout=async()=>{
    
    try {
      const result=await axios.get("http://localhost:3000/api/auth/loggedout",{withCredentials:true});
      console.log("The deleted result is",result.data);
      console.log("The userdata result is",userdata);

      setprofile(false)
      getCurrentUser()
      navigate('/login')

    
    } catch (error) {
      console.log("error in logout",error)
    }
  }
  console.log("The userdata",userdata)

  
    return(
    <div
      className='w-[100vw] h-[70px] bg-[#ecfefeec] z-10 fixed top-0
    flex items-center justify-between px-[30px] shadow-md shadow-black'>
      <div
        className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]'>
        <img
          src={logo}
          className='w-[40px]' />
        <h1
          className='text-[25px] text-black font-sans'>E-commerce</h1>

      </div>
      <div
        className='w-[50%] lg:w-[40%] md:flex hidden'>
        <ul
          className="flex  items-center justify-center gap-[19px] text-white">
          <li className='text-[15px] hover:bg-slate-500 bg-[#000000c9] py-[10px]
            px-[20px] rounded-2xl'
            onClick={()=>{navigate('/')}}>Home</li>
            
          <li
            className='text-[15px] hover:bg-slate-500 bg-[#000000c9] py-[10px]
            px-[20px] rounded-2xl'
             onClick={()=>{navigate('/collections')}}>Collections</li>
          <li
            className='text-[15px] hover:bg-slate-500 bg-[#000000c9] py-[10px]
            px-[20px] rounded-2xl'
             onClick={()=>{navigate('/About')}}>About</li>
          <li
            className='text-[15px] hover:bg-slate-500 bg-[#000000c9] py-[10px]
            px-[20px] rounded-2xl'
             onClick={()=>{navigate('/contact')}}>Contact</li>
        </ul>
      </div>
      <div
        className='flex items-center justify-end gap-[15px]'>
        <FaSearch
          size={21}
          onClick={() => (settoogle(!toogleSearch))} />

        { !userdata && <FaUserCircle
          size={21}
          onClick={() => (setprofile(!toogleprofile))}
        />}

       { userdata &&<div
          className='w-[21px] h-[21px] bg-black flex justify-center
         items-center rounded-full text-white text-[13px]'
         onClick={() => (setprofile(!toogleprofile))}>
          {userdata.name.slice(0,1)}
        </div>}
        <FaCartShopping
          size={21} />
        <p
          className='absolute w-[15px] h-[15px] flex items-center justify-center bg-black px-[5px] py-[2px]
         rounded-full top-3 right-5 text-white text-[10px]'>10</p>

      </div>
      {
        toogleSearch &&
        <div
          className="w-[100%] h-[80px] flex items-center justify-center  absolute top-[100%]
      bg-[#ecfafaec] right-0 left-0">
          <input
            className='w-[50%] h-[60%] rounded-[30px] px-[50px] bg-[#233533]
        placeholder-text-white text-white'
            placeholder='Search a user' />
        </div>}
      {toogleprofile &&
        <div
          className='w-[220px]  absolute
      top-[110%] right-[4%] bg-[#000000c7] border-[1px] border-[#aaa919]
      rounded-[9px] '>
          <ul
            className='w-[100%] h-[100%] flex flex-col
        text-white justify-around items-start  text-[17px]'>
            <li
              className='w-[100%] hover:bg-[#2f2f2f]
          px-[15px] py-[10px] cursor-pointer'>Login</li>
            <li
              className='w-[100%] hover:bg-[#2f2f2f]
          px-[15px] py-[10px] cursor-pointer'
          onClick={handleLogout}>Logout</li>
            <li
              className='w-[100%] hover:bg-[#2f2f2f]
          px-[15px] py-[10px] cursor-pointer'>Orders</li>
            <li
              className='w-[100%] hover:bg-[#2f2f2f]
          px-[15px] py-[10px] cursor-pointer'>About</li>
          </ul>

        </div>
      }

      <div
        className='w-[100vw] h-[90px] flex items-center
           justify-around px-[30px] md:hidden absolute
           top-[420px] left-0 bg-[#191818] gap-[20px]'>
        <button
          className='text-white flex flex-col
            items-center justify-center
            gap-[2px]'><IoIosHome
            className='md:hidden'
            size={20} />Home</button>
             <button
          className='text-white flex flex-col
            items-center justify-center
            gap-[2px]'><MdContacts 
            size={20}/>Contact</button>
             <button
          className='text-white flex flex-col
            items-center justify-center
            gap-[2px]'><BiSolidCollection 
            size={20}/>Collections</button>
             <button
          className='text-white flex flex-col
            items-center justify-center
            gap-[2px]'>  <FaCartShopping
          size={21} />Cart</button>

      </div>

    </div>)
  
}

export default Nav