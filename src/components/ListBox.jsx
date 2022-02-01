import React, { Component } from "react";
import styled from "styled-components";
import List from "./List";

class ListBox extends Component {
	static defaultProps = {
		data: [],
	};
	render() {
		const { data } = this.props;
		const list = data.map((info) => <List key={info.id} info={info} />);
		return <ul>{list}</ul>;
	}
}

export default ListBox;
