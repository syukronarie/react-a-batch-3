import React, { Component } from "react";

class ResultSum extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	componentWillUnmount() {
		this.props.handleInitialState();
	}

	render() {
		return <h1>Result: {this.props.totalSum}</h1>;
	}
}

export default class ClassComp extends Component {
	constructor(props) {
		super(props);
		this.state = { totalSum: 0, showResult: true };
		this.onSubmit = this.onSubmit.bind(this);
		this.handleInitialState = this.handleInitialState.bind(this);
	}

	// used to fetch api, initial state, etc
	componentDidMount() {
		console.log("hello from componentDidMount()");
	}

	componentDidUpdate() {
		console.log(this.state);
	}

	onSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const a = Number(formData.get("a"));
		const b = Number(formData.get("b"));

		if (a && b) {
			this.setState((state) => ({ ...state, totalSum: a + b }));
		}
	}

	handleInitialState() {
		this.setState((state) => ({ ...state, totalSum: 0 }));
	}

	render() {
		console.log("hello from render()");
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="number" name="a" />
					<input type="number" name="b" />
					<button type="submit">sum</button>
					<button
						type="reset"
						onClick={() => {
							this.setState((state) => ({
								...state,
								showResult: !this.state.showResult,
							}));
						}}
					>
						{this.state.showResult ? "Unshow Result" : "Show Result"}
					</button>
				</form>
				{this.state.showResult && (
					<ResultSum
						totalSum={this.state.totalSum}
						handleInitialState={this.handleInitialState}
					/>
				)}

				<h1>Monitor Total Sum {this.state.totalSum}</h1>
			</div>
		);
	}
}
