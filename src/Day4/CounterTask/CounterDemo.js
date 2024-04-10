import React, { useState } from 'react'

function CounterDemo() {
    const[count,setCount]=useState(1)

    function increment(){
        if(count*2<50)
        setCount(count*2)

        else{
            setCount(1)
          }
    }
    
    function decrement(){
    if(parseInt(count/2) === 0)
        setCount(50)
    else
        setCount(parseInt(count/2))
    }

  return (
    <div>
        <h2>{count}</h2><br/>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default CounterDemo
