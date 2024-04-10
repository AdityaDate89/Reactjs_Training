import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Task1 from './Day1/components/Task1';
import Task2 from './Day1/components/Task2';
import Task3 from './Day1/components/Task3';
import Button from './Day1/components/Button';
import Task4 from './Day2/components/Task4';
import Task5 from './Day2/components/Task5';
// import Task6 from './Day3/components/Task6';
import { Task66 } from './Day3/components/Task6';
import ChildrenDemo from './Day3/components/ChildrenDemo';
import NestedObject from './Day3/components/NestedObject';
import ChildState from './Day3/components/ChildState';
import ChildStateJsx from './Day3/components/ChildStateJsx';
// import StateImage from './Day3/components/StateImage';

import CounterDemo from './Day4/CounterTask/CounterDemo';
import ArrayCombine from './Day4/ArrayState/ArrayCombine';
import ArrayInsertValue from './Day4/ArrayState/ArrayInsertValue';
import NestedComponent from './Day4/NestingComponent/NestedComponent';
import SampleUseEffect from './Day5/SampleUseEffect';
import CounterEffect from './Day5/CounterEffect';
import ApiEffect from './Day5/ApiEffect';
import TimeEffect from './Day5/TimeEffect';
import LocalStorageEffect from './Day5/LocalStorageEffect';
// class App extends React.Component {

//   render(){
//     // console.log("render called")
//     return (
//         <div>
//           {/* <Task1/>
//           <Task2/>
//           <Task3/> */}

//           <Button/>
//         </div>
//     )
//   }
// }

// export default App;

function App(){
  const name=4567
  const age=24
  const user={hobby:"cricket"}

  const[count,setCount]=useState(0)

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }

  function showvalue(data){
    console.log("from App.js")
    alert(data)
  }


  function display(datacount){
      // alert(data)
      if(datacount){
        setCounter(counter+datacount)
      }
      else
      setCounter(counter+1)
  }
   
  const[counter,setCounter]=useState(0)

  // const parentjsx=<h1>this is parent jsx</h1>

  // const[originjsx,newjsx]=useState(parentjsx)

  return(
    <>
      {/* <Task4 name={name} age={age} user={user}/>

      <Task5 increment={increment} decrement ={decrement} count={count}/>
      <Task5 increment={increment} count={count}/> */}

      {/* <Task6/> */}
      {/* <Task66/>
      <ChildrenDemo show={showvalue}/>
       <ChildrenDemo><h1>Child data</h1></ChildrenDemo> */}

      {/* <ChildrenDemo>{"aditya"}</ChildrenDemo> */}
       {/* <ChildrenDemo>{[12,34,5,6,7,7]}</ChildrenDemo>  */}
       {/* <ChildrenDemo>{{city:"pune",state:"MH"}}</ChildrenDemo> */}
       {/* <ChildrenDemo>
            <Task66/>
       </ChildrenDemo> */}

       {/* <NestedObject/>
       <br/>
       <ChildState display={display} newcounter={counter}/>
       <br/>
       <ChildStateJsx/>
       <br/> */}
       {/* <StateImage/> */}

       {/* <CounterDemo/>
       <hr/>
       <ArrayCombine/>
       <hr/>
       <ArrayInsertValue/>
       <hr/>
       <NestedComponent/> */}

       {/* <SampleUseEffect/>
       <hr/> */}
        {/* <CounterEffect/> 
       <hr/> */}
       {/* <ApiEffect/>
       <hr/> 
       <TimeEffect/>
       <hr/> */}
       <LocalStorageEffect/>
    </>
  )
}

export default App
