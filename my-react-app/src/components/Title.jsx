import React from 'react'

function Title({text1,text2}) {
  return (
    <div
    >
      <div
      className="flex gap-[10px] text-[30px]">
         <p>{text1}</p>
          <p
          className="text-[#cefaf6]">{text2}</p>

      </div>
      <p>Step into selecting latest collections</p>
     
    </div>
  )
}

export default Title