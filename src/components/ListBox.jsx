import React, { Component } from "react";
import "../../src/style.css";
import List from "./List";

class ListBox extends Component {
	static defaultProps = {
		data: [],
		onRemove: () => {
			console.warn("onRemove함수가 정의되지 않았습니다.");
		},
		onUpdate: () => {
			console.wrarn("onUpdate함수가 정의되지 않음");
		},
	};

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.data !== this.props.data;
	}

	render() {
		console.log("render ListBox");
		const { data, onRemove, onUpdate } = this.props;
		const list = data.map((info) => (
			<List key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate} />
		));
		return <ul className="listBox">{list}</ul>;
	}
}

export default ListBox;
