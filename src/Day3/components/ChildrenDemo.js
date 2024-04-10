import React from 'react'

function ChildrenDemo(props) {
    const arr=[10,24,56,22,67,89]
  return (
    <div>
        <h2>child component</h2>
        {props.children}
        {/* {props.children[0]} */}
         {/* {props.children.city} */}
        <button onClick={()=>props.show(arr)}>Show Value</button>
    </div>
  )
}

export default ChildrenDemo
