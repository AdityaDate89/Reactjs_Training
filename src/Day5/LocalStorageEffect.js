import React, { useEffect, useState } from 'react'

function LocalStorageEffect() {

    const[value1,setNewValue]=useState({
        name:"",
        email:""
    })

    useEffect(()=>{
        const storedValue= JSON.parse(localStorage.getItem("person"))
        if(storedValue)
        setNewValue(storedValue)
        console.log(storedValue)
     },[])

    useEffect(()=>{
        // console.log("useEffect called")
        localStorage.setItem("person",JSON.stringify(value1))
        // if(setValue)
        // setNewValue(setValue)
    },[value1])

    
    // function saveValue(){ 
    //      console.log("saveValue called")
    //     setNewValue(localStorage.setItem("person",JSON.stringify(person)))
    // }
  return (
    <div>
        {/* {value}
      <button onClick={saveValue}>Store Data</button> */}
      <label>Name</label>
      <input type="text" value={value1.name} onChange={(e)=>setNewValue((prev)=>{
        return {
            ...prev,
            name:e.target.value
        }
      })}/>
      <label>Email</label>
      <input type="email" value={value1.email} onChange={(e)=>setNewValue((prev)=>{
        return {
            ...prev,
            email:e.target.value
        }
      })}/>

      {value1.name  && value1.email && ( 
        <div>
            <p>Hello {value1.name} and {value1.email}</p>
        </div>
      )}
    </div>
  )
}

export default LocalStorageEffect