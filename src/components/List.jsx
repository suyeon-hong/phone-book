import React, { Component } from "react";
import "../../src/style.css";

class List extends Component {
	static defaultProps = {
		info: {
			id: 0,
			name: "이름",
			number: "010-000-0000",
		},
	};
	state = {
		editing: false,
		name: "",
		number: "",
	};
	handelRemove = () => {
		const { info, onRemove } = this.props;
		onRemove(info.id);
	};
	handleToggleEdit = () => {
		const { editing } = this.state;
		this.setState({ editing: !editing });
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		const { info, onUpdate } = this.props;
		if (!prevState.editing && this.state.editing) {
			this.setState({
				name: info.name,
				number: info.number,
			});
		}
		if (prevState.editing && !this.state.editing) {
			onUpdate(info.id, {
				name: this.state.name,
				number: this.state.number,
			});
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (
			!this.state.editing &&
			!nextState.editing &&
			nextProps.info === this.props.info
		) {
			return false;
		}
		return true;
	}

	render() {
		if (this.state.editing) {
			return (
				<li className="list">
					<input
						onChange={this.handleChange}
						name="name"
						value={this.state.name}
						placeholder="이름"
						className="input"
					></input>
					<input
						onChange={this.handleChange}
						name="number"
						value={this.state.number}
						placeholder="전화번호"
						className="input"
					></input>
					<button onClick={this.handleToggleEdit} className="btn">
						수정
					</button>
					<button onClick={this.handelRemove} className="btn">
						삭제
					</button>
				</li>
			);
		}

		const { name, number } = this.props.info;
		return (
			<li className="list">
				<h1 className="name">{name}</h1>
				<p className="number">{number}</p>
				<button onClick={this.handleToggleEdit} className="btn">
					수정
				</button>
				<button onClick={this.handelRemove} className="btn">
					삭제
				</button>
			</li>
		);
	}
}

export default List;
