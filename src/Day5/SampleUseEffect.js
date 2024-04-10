import React, { useEffect, useState } from 'react'

function SampleUseEffect() {
    const[state,setState]=useState(true)
  
    function changeState(){
        setState(!state)
        console.log("inside state change")
    }

    useEffect(()=>{
        // console.log("useffect called")
        // return ()=>console.log("component unmouting")       

    },[state])

    return (
        <div>
            <button onClick={changeState}>click</button>
        </div>
  )
}

export default SampleUseEffect
