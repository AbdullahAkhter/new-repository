import React from 'react'
import Title from "./Title"
import Card from "./Card"
import { useProductContext } from '../context/ProductContext'
function LatestCollection() {
  const{products}=useProductContext();
  console.log("The products are ",products)
  return (
    <div
    className='flex flex-col items-center w-[100%] mt-[30px] gap-[20px]'>
      <Title
      text1={"LATEST"}
      text2={"COLLECTIONS"}/>
      <div
      className='flex justify-center animate-scroll gap-[20px]'>
        {products.map((element,index)=>(
          <Card
          image={element.image1}
          name={element.name}
          price={element.price}
          id={element._id}
          key={index}/>
        ))}
      </div>


    </div>
  )
}

export default LatestCollection