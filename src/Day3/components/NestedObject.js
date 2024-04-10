import React, { useState } from 'react'

 function NestedObject() {
    const[course,setcourse]=useState({
        coursename:"Java",
        fees:15000,
        brancharea:{
            city:"pune",
            state:"maharashtra"
        }
    })

    function changedata(){
            setcourse({
                ...course,
                brancharea:{
                    ...course.brancharea,
                    city:"mumbai"
                }
            })
    }
  return (
    <div>
        {/* <p>{course.coursename}</p> */}
        <p>The new city name is: {course.brancharea.city}</p>
        <button onClick={changedata}>Change value</button>
    </div>
  )
}

export default NestedObject