import React, { useEffect, useState } from 'react'

function TimeEffect() {
    const[showPopUp,setShowPopUp]= useState(false)


    const showPopUpHandler=()=>{
        setShowPopUp(!showPopUp)
        console.log("inside showPopUpHandler")
    }

    useEffect(()=>{
        console.log("useeffect called")   
        if(showPopUp){
            console.log("pop up shown");
            const time=setTimeout(()=>{
                setShowPopUp(false)
            },5000)

            return ()=>{
                clearTimeout(time)
                // setShowPopUp(true)
                console.log("pop up gone")
            }
        }
        
    },[showPopUp])

  return (
    <div>
        {showPopUp &&
        <div>
            <p>PopUp</p>
        </div> 
        }
        <button onClick={showPopUpHandler}>Show Pop Up</button>
    </div>
  )
}

export default TimeEffect