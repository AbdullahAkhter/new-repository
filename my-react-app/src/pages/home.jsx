import React, { useEffect, useState } from 'react'
import Backround from '../components/Backround'
import Hero from '../components/Hero'
import Products from '../components/Products'


function Home() {
  const heroData=[{text1:"30% off Limited Offer",text2:"style that"},
    {text1:"Discover the best of bold fashion",text2:"Limited Time"},
    {text1:"Explore our best collection",text2:"Shop Now"},
    {text1:"Chose your perfect fashion fit",text2:"Now on Sale"}
  ]
  const[heroCount,setheroCount]=useState(0)
  useEffect(()=>{
  let interval=setInterval(()=>{
    setheroCount(prevcount=>prevcount===3? 0:prevcount+1)
  },3000)
  return ()=>clearInterval(interval)
  },[])
  
  return (
   

    <div
    className='mt-[70px]'>
    <div
    className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white
    flex  justify-start'>
       <Hero
      setheroCount={setheroCount}
      heroData={heroData[heroCount]}
      heroCount={heroCount}/>
      <Backround
      heroCount={heroCount}/>
    
    </div>
    <Products/>
   
    
     </div>
    
  
  )
}

export default Home