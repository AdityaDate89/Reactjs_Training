import React, { Component } from 'react'
import Sample from './Sample'

class Button extends Component {

    constructor(){
        super()
        console.log("app.js")
        this.state={
            status:""
        }


    }
    handleAdd = ()=>{
       this.setState({status:"show"})
    }

    handleUpdate = ()=>{
        this.setState({status:"update"})
    }

    handleDelete = () =>{
        this.setState({status:"delete"})
    }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleUpdate}>Update</button>
        <button onClick={this.handleDelete}>Delete</button>
        {this.state.status == "show" && <Sample/> }
        {this.state.status == "update" && <Sample name={"rohit"}/> }
      </div>
    )
  }
}

export default Button