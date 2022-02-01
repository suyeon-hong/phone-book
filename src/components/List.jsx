import React, { Component } from "react";
import * as S from "./Style";

class List extends Component {
	static defaultProps = {
		info: {
			id: 0,
			name: "unknown",
			phone: "010-000-0000",
		},
	};
	state = {
		editing: false,
		name: "",
		phone: "",
	};
	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	updateHandler = () => {
		const { editing } = this.state;
		this.setState({
			editing: !editing,
		});
	};
	removeHandler = () => {
		const { info } = this.props;
		this.props.onRemove(info.id);
	};
	componentDidUpdate = (prevProps, prevState) => {
		const { info } = this.props;
		if (!prevState.editing && this.state.editing) {
			this.setState({
				name: prevProps.info.name,
				phone: prevProps.info.phone,
			});
		}
		if (prevState.editing && !this.state.editing) {
			this.props.onUpdate(info.id, {
				name: this.state.name,
				phone: this.state.phone,
			});
		}
	};
	render() {
		if (this.state.editing) {
			const { name, phone } = this.state;
			return (
				<S.Li>
					<S.Input
						onChange={this.changeHandler}
						name="name"
						value={name}
						placeholder="이름"
					></S.Input>
					<S.Input
						onChange={this.changeHandler}
						name="phone"
						value={phone}
						placeholder="전화번호"
					></S.Input>
					<S.Button onClick={this.updateHandler}>수정</S.Button>
					<S.Button onClick={this.removeHandler}>삭제</S.Button>
				</S.Li>
			);
		}
		const { name, phone } = this.props.info;
		return (
			<S.Li>
				<S.Name>{name}</S.Name>
				<S.Phone>{phone}</S.Phone>
				<S.Button onClick={this.updateHandler}>수정</S.Button>
				<S.Button onClick={this.removeHandler}>삭제</S.Button>
			</S.Li>
		);
	}
}

export default List;
