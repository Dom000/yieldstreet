import React from 'react'

function Ybutton({text,className}) {
  return (
    <div className={` p-3 bg-[#ffddc9] rounded-md hover:bg-[#caac9b] ${className}`}>
        {text}
    </div>
  )
}

export default Ybutton;