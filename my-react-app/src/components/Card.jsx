import React from 'react'

function Card({image,name,price,id}) {
  
  return (
    
    <div
    className="w-[250px] h-[290px] border-[2px] rounded-lg ">
       <img
       src={image}
       className='w-[100%] h-[50%] object-cover'/>
       <p className='text-blue-500'>{name}</p>
    </div>
  )
}

export default Card