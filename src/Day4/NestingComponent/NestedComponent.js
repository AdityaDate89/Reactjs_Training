import React, { useState } from 'react'

function NestedComponent() {
    const[name,setName]=useState({name:"aditya"})

     function setNameValue(value){
        setName(value)
        console.log("chidl3 to parent ",value.name)
     }
  return (
    <div>
        {name.name}
        <Child1 name={name} display={setNameValue}/>
    </div>
  )
}

function Child1(props){
    console.log("parent to child1 "+props.name.name)
    return(
        <>
            <h2>{props.name.name}</h2>
           <Child2 name={props.name} setValue={props.display}/>
        </>
    )
}

function Child2(props){
    console.log("child1 to child2 "+props.name.name)
    return(
        <>
            <h2>{props.name.name}</h2>
            <Child3 name={props.name} setValue={props.setValue}/>
        </>
    )   
}

function Child3(props){
    console.log("child2 to child3 "+props.name.name)
        return(
            <>
                <h2>{props.name.name}</h2>
                <button onClick={()=>{props.setValue({name:"vishal"})}}>Pass data</button>
            </>
        )
}

export default NestedComponent
