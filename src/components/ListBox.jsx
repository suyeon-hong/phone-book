import React, { Component } from "react";
import "../../src/style.css";
import List from "./List";

class ListBox extends Component {
	static defaultProps = {
		data: [],
	};
	render() {
		const { data } = this.props;
		const list = data.map((li) => <List key={li.id} info={li} />);
		return <ul className="listBox">{list}</ul>;
	}
}

export default ListBox;
