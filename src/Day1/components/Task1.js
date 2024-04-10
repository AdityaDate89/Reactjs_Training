import React, { Component } from 'react'

class Task1 extends Component {
    constructor(props){
        super()

        this.state = {
            age:30,
            training : "reactjs",
            ispaid : "true",
            arr:[45,21,4,5,65]
        }
        console.log("state is :",this.state)
    }

    updateData = (e) =>{
        console.log("inside method ");
        // this.lastName="new name"
        const newarr=[...this.state.arr,30]
        this.setState({age:50,arr:newarr})
    }

  render() {

    let lastName="vwe"
    var fullName="jik"
    const name="abc"

    console.log("reload")

    return (
      <>
        <h2>
            Class Component
            <br/>
            {lastName} <br/>
            {fullName} <br/>
            {name} <br/> 
            {this.state.age} <br/>
            {this.state.training} <br/>
            {this.state.arr[2]}
            {this.state.arr}
        </h2>
        <button onClick={this.updateData}>click me</button>
      </>
    )
  }
}

export default Task1