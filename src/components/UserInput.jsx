import React, { Component } from "react";
import "../../src/style.css";

class UserInput extends Component {
	state = {
		name: "",
		number: "",
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.getUserInput && this.props.getUserInput(this.state);
		this.setState({
			name: "",
			number: "",
		});
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleSearch = (e) => {
		this.props.onSearch(e.target.value);
	};
	render() {
		const { name, number } = this.state;
		return (
			<div className="userInput">
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						className="input"
						type="text"
						value={name}
						placeholder="이름"
						name="name"
					></input>
					<input
						onChange={this.handleChange}
						className="input"
						type="text"
						value={number}
						placeholder="전화번호"
						name="number"
					></input>
					<button type="submit" className="btn">
						등록
					</button>
				</form>
				<input
					onChange={this.handleSearch}
					className="input"
					type="text"
					name="keyword"
					placeholder="이름을 검색해 주세요."
				/>
			</div>
		);
	}
}

export default UserInput;
