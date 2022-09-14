import "./App.css";
import React from "react";

class Count extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	componentDidUpdate() {
		// const { count } = this.props;
	}

	componentWillUnmount() {
		this.props.handleInitialState();
	}

	render() {
		return (
			<>
				<h2>From Child Comp: {this.props.count}</h2>
			</>
		);
	}
}

const INITIAL_STATE = { count: 0, showCount: false };

class App extends React.Component {
	constructor() {
		super();
		this.state = INITIAL_STATE;
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
		this.handleShowCount = this.handleShowCount.bind(this);
		this.handleInitialState = this.handleInitialState.bind(this);
	}

	handleIncrement() {
		this.setState((state) => ({ count: state.count + 1 }));
	}

	handleDecrement() {
		this.setState((state) => ({
			count: state.count !== 0 ? state.count - 1 : 0,
		}));
	}

	handleShowCount() {
		this.setState((state) => ({ showCount: !state.showCount }));
	}

	handleInitialState() {
		this.setState(INITIAL_STATE);
	}

	// componentDidMount() {
	// 	fetch api
	// }

	componentDidUpdate() {
		const { count } = this.state;
		if (count === 10) {
			setTimeout(() => {
				alert("count 10 is maximum");
			}, 1000);
		}
	}

	render() {
		return (
			<div>
				<h1>Count APP</h1>
				<h2>From Parent Comp: {this.state.count}</h2>
				{this.state.showCount ? (
					<Count
						count={this.state.count}
						handleInitialState={this.handleInitialState}
						handleShowCount={this.handleShowCount}
					/>
				) : (
					<h2>Show Count is Disabled and Successfully Resetted</h2>
				)}
				<button onClick={this.handleShowCount}>
					{this.state.showCount ? "Unshow and Reset" : "Show"}
				</button>
				<button
					onClick={this.handleIncrement}
					disabled={this.state.count === 10}
				>
					+ Increment
				</button>
				<button
					onClick={this.handleDecrement}
					disabled={this.state.count === 0}
				>
					- Decrement
				</button>
			</div>
		);
	}
}

export default App;
