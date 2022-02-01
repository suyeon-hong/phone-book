import React, { Component } from "react";
import styled from "styled-components";

class List extends Component {
	static defaultProps = {
		info: {
			id: 0,
			name: "unknown",
			phone: "010-000-0000",
		},
	};
	removeHandler = () => {
		const { info } = this.props;
		this.props.onRemove(info.id);
	};
	render() {
		const { name, phone } = this.props.info;
		return (
			<li>
				<h1>{name}</h1>
				<p>{phone}</p>
				<button>수정</button>
				<button onClick={this.removeHandler}>삭제</button>
			</li>
		);
	}
}

export default List;
