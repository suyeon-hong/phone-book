import React, { Component } from "react";
import * as S from "./Style";

class UserForm extends Component {
	static defaultProps = {
		onSubmit: () => {
			console.warn("onSubmit is not defined");
		},
		onSearch: () => {
			console.warn("onSearch is not defined");
		},
	};
	state = {
		name: "",
		phone: "",
	};
	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	submitHandler = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({
			name: "",
			phone: "",
		});
	};
	searchHandler = (e) => {
		this.props.onSearch(e.target.value);
	};
	render() {
		const { name, phone } = this.state;
		return (
			<S.UserInputBlock>
				<form onSubmit={this.submitHandler}>
					<S.Input
						name="name"
						onChange={this.changeHandler}
						placeholder="이름"
						value={name}
						type="text"
					/>
					<S.Input
						name="phone"
						onChange={this.changeHandler}
						placeholder="전화번호"
						value={phone}
						type="text"
					/>
					<S.Button>등록</S.Button>
				</form>
				<S.Input
					type="text"
					onChange={this.searchHandler}
					placeholder="이름을 검색하세요"
				/>
			</S.UserInputBlock>
		);
	}
}

export default UserForm;
