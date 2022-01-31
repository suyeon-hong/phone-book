import React, { Component } from "react";
import "../../src/style.css";

class List extends Component {
	render() {
		return (
			<ul className="listBox">
				<li className="list">
					<h1 className="name"></h1>
					<p className="number"></p>
					<button className="btn">수정</button>
					<button className="btn">삭제</button>
				</li>
			</ul>
		);
	}
}

export default List;
