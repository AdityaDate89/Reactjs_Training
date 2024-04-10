import React from 'react'

export default function Task5(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  )
}
