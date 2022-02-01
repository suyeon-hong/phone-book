import React, { Component } from "react";
import "../../src/style.css";

class List extends Component {
	static defaultProps = {
		info: {
			name: "이름",
			number: "010-0000-0000",
			id: 0,
		},
	};
	render() {
		const { name, number, id } = this.props.info;
		return (
			<li className="list">
				<h1 className="name">{name}</h1>
				<p className="number">{number}</p>
				<button className="btn">수정</button>
				<button className="btn">삭제</button>
			</li>
		);
	}
}

export default List;
