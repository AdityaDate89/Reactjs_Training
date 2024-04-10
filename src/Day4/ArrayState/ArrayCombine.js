import React, { useState } from 'react'

function ArrayCombine() {
    const[arr,setarr]=useState([10,20,30,40,50])
    const[arr1,setarr1]=useState([60,70,80,90,100])
    
    const[arr2,setarr2]=useState([])

    function combine(){
        setarr2([arr,arr1])
    }
    console.log(arr2)
  return (
    <div>
        <h3>{arr2.toString()}</h3>
        <button onClick={combine}>Combine</button>
    </div>
  )
}

export default ArrayCombine
