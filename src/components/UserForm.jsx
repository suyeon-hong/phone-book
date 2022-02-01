import React, { Component } from "react";
import styled from "styled-components";

class UserForm extends Component {
	static defaultProps = {
		onChange: () => {
			console.warn("onChange is not defined");
		},
	};
	state = {
		name: "",
		phone: "",
	};
	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	submitHandler = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({
			name: "",
			phone: "",
		});
	};
	render() {
		const { name, phone } = this.state;
		return (
			<form onSubmit={this.submitHandler}>
				<input
					name="name"
					onChange={this.changeHandler}
					placeholder="이름"
					value={name}
					type="text"
				/>
				<input
					name="phone"
					onChange={this.changeHandler}
					placeholder="전화번호"
					value={phone}
					type="text"
				/>
				<button>등록</button>
			</form>
		);
	}
}

export default UserForm;
