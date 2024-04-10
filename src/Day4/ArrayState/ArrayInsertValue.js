import React, { useState } from 'react'

function ArrayInsertValue() {
    const[arr,setarr]=useState([10,20,40,50,60])

    function insertValue(val){
        setarr([
            val,...arr
        ])
    }

    console.log("after insert element",arr)

  return (
    <div>
        <h3>{arr.toString()}</h3>
      <button onClick={()=>insertValue(78)}>Insert</button>
    </div>
  )
}

export default ArrayInsertValue
