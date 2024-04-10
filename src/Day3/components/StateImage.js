import React, { useState } from 'react'
import logo1 from '../../Images/logo1.svg'
import logo2 from '../../Images/logo2.svg'
import logo3 from '../../Images/logo3.svg'
import ErrorImg from '../../Images/ErrorImg.svg'

function StateImage() {

const arr=[logo1,logo2,logo3]

  const[img,setImg]=useState(arr[0])

  function changeImage(){
    setImg(arr[(Math.floor(Math.random()*3))])
  }

  return (
    
    <div>
        <img src={img} width={80} onError={(e)=>e.target.src=ErrorImg}/> 
        <button onClick={changeImage}>Image</button>
        {console.log("image",img)}       
    </div>
  )
}

export default StateImage
