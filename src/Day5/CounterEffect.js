import React, { useEffect, useState } from 'react'

function CounterEffect() {
    const[count,setCount]=useState(0)

  useEffect(()=>{
    console.log("useffect called")
    if(count===21)
       {
            alert("value is greater than 20")   
            setCount(20)
       } 
    if(count===-1)
       { 
           alert("value is less than 0")  
           setCount(0) 
        } 
  },[count])

  function increase(){
    console.log("increase")
    setCount(count+1)
  }

  function decrease(){
    console.log("decrease")
    setCount(count-1)
  }
  return (
    <div>
        {count}
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default CounterEffect
