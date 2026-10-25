import React from 'react'
import hoodie from "../assets/hoodie.png"
import t_shirt from "../assets/t-shirt.png"
import shalvaar from "../assets/shalvar.png"
import trouser from "../assets/court.png"
function Background({heroCount}) {
 if(heroCount===0){
    return<img
    className='w-[100%] h-[100%]
    float-left overflow-auto object-cover'
    src={hoodie}/>
 }
 else if(heroCount===1){
   return <img
    className='w-[70%] lg:w-[100%] lg:h-[100%] h-[100%]
    float-left  object-cover '
    src={t_shirt}/>
 }
 else if(heroCount===2){
   return <img
    className='w-[100%] h-[100%]
    float-left overflow-auto object-cover'
    src={shalvaar}/>
 }
 else if(heroCount===3){
   return <img
    className='w-[100%] h-[100%]
    float-left overflow-auto object-cover'
    src={trouser}/>
 }
}

export default Background