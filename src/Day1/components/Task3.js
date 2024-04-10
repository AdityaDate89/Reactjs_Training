import React,{Component} from "react";
class Task3 extends React.Component {

    constructor(){
      super()
      this.state={
        count:0
      };
      console.log("constructor called")
    }
    componentDidMount(){
      // this.setState({hello:"Geeks!"})
      console.log("componentDidMount method called")
    }
  
    componentWillUnmount(){
      console.log("componentWillUnmount method called")
    }
  
    shouldComponentUpdate(){
      console.log("shouldComponentUpdate")
      return true
    }
  
    componentDidUpdate(prevProps, prevState){
      console.log("componentDidUpdate")
    }
    
    handleClick = () =>{
      this.setState(prevstate => ({
        count:prevstate.count + 1
      }))
    }
  
    render(){
      console.log("render called")
      return (
          <div>
            <h2>class component</h2>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleClick}>+</button>
          </div>
      )
    }
  }
  
  export default Task3;