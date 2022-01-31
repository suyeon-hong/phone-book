import React, { Component } from "react";
import "../../src/style.css";

class UserInput extends Component {
	render() {
		return (
			<div className="userInput">
				<form>
					<input className="input" type="text" placeholder="이름"></input>
					<input className="input" type="text" placeholder="전화번호"></input>
					<button className="btn">등록</button>
				</form>
				<input
					className="input"
					type="text"
					placeholder="이름을 검색해 주세요."
				/>
			</div>
		);
	}
}

export default UserInput;
