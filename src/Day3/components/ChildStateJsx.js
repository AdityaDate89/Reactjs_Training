import React, { useState } from 'react'

function ChildStateJsx(props) {
   const[value,setValue]=useState(<h1>passing jsx in usestate</h1>)

   function changejsx(){
    setValue(<h2>changed jsx</h2>)
   }

  return (
    <div>
        The result is :{value}
        <button onClick={changejsx}>Execute</button>
    </div>
  )
}

export default ChildStateJsx
