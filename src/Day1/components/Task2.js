import React, { Component } from "react";

class Task2 extends Component {
  
	constructor(props) {
		super(props);

		this.state = {
			firstName:"John",
  			lastName: "Doe",
		};

		 this.updateState = this.updateState.bind(this);
	}
	
	updateState() {
		this.setState({
			firstName:"Tim",
  			lastName: "David",
		});
	}

	render() {
		return (
			<div>
				<p>{this.state.firstName}</p>

				<p>{this.state.lastName}</p>

				<button onClick={this.updateState}>
					Click here
				</button>
			</div>
		);
	}
}

export default Task2;
