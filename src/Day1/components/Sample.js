import React, { Component } from 'react'

class Sample extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"aditya"
        }
        console.log("constructor")
    }

    componentDidMount(){
        if(this.props.name){
            console.log("inside sample")
            this.setState({name:this.props.name})
        }
        console.log("componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    // handleClick(){
    //     this.setState({name:"aman"})
    // }


  render() {
    return (
      <div> 
            <h2>{this.state.name}</h2>
            {/* <button onClick={this.handleClick}>+</button> */}
      </div>
    )
  }
}

export default Sample