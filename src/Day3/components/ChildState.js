import React from 'react'

function ChildState(props) {
    // const arr=[10,-20,30,-40,50]
  return (
    <div>
        {/* {props.newdata[0]}
        <button onClick={()=>props.display(arr)}>Show data</button>     */}
        {props.newcounter}
        <button onClick={()=>props.display()}>value</button>
        <button onClick={()=>props.display(10)}>increment by 10</button>

    </div>
  )
}

export default ChildState
