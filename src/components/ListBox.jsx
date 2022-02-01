import React, { Component } from "react";
import styled from "styled-components";
import List from "./List";

class ListBox extends Component {
	static defaultProps = {
		data: [],
		onRemove: () => {
			console.warn("onRemove is not defined");
		},
	};
	render() {
		const { data, onRemove } = this.props;
		const list = data.map((info) => (
			<List key={info.id} info={info} onRemove={onRemove} />
		));
		return <ul>{list}</ul>;
	}
}

export default ListBox;
