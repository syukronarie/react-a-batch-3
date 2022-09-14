/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useEffect } from "react";

// ! important comment
// ? question comment
// * highlighted comment
// todo: comment
// normal comment

function Count(props) {
	const { handleInitialState } = props;
	let isMount = false;

	// useEffect cleanup function
	useEffect(() => {
		return () => {
			if (!isMount) {
				isMount = true;
			} else {
				handleInitialState();
			}
		};
	}, []);

	return (
		<>
			<h2>From Child Comp: {props.count}</h2>
		</>
	);
}

const INITIAL_STATE = { count: 0, showCount: false };

function FuncApp() {
	const [state, setState] = React.useState(INITIAL_STATE);
	const { count } = state;

	function handleIncrement() {
		setState((state) => ({ count: state.count + 1 }));
	}

	const handleDecrement = () => {
		setState((state) => ({
			count: state.count !== 0 ? state.count - 1 : 0,
		}));
	};

	function handleShowCount() {
		setState((state) => ({ ...state, showCount: !state.showCount }));
	}

	function handleInitialState() {
		setState(INITIAL_STATE);
	}

	//fetch api or initial something
	// deps is empty array
	useEffect(() => {
		// console.log("hello from useEffect");
	}, []);

	// we use to listen state changes, props changes
	// deps are state or props that we need to listen.
	useEffect(() => {
		if (count === 10) {
			setTimeout(() => {
				alert("count 10 is maximum");
			}, 1000);
		}
	}, [count]);

	function addListenScroll() {
		console.log({ addListenScroll: Math.floor(window.pageYOffset) });
	}

	function removeListenScroll() {
		console.log({ removeListenScroll: Math.floor(window.pageYOffset) });
	}

	//
	useEffect(() => {
		window.addEventListener("scroll", addListenScroll);
		return () => {
			window.removeEventListener("scroll", removeListenScroll);
		};
	});

	return (
		<div style={{ height: "3000px", width: "100wh" }}>
			<h1>Count APP</h1>
			<h2>From Parent Comp: {state.count}</h2>
			{state.showCount ? (
				<Count
					count={state.count}
					handleInitialState={handleInitialState}
					handleShowCount={handleShowCount}
				/>
			) : (
				<h2>Show Count is Disabled and Successfully Resetted</h2>
			)}
			<button onClick={handleShowCount}>
				{state.showCount ? "Unshow and Reset" : "Show"}
			</button>
			<button onClick={handleIncrement} disabled={state.count === 10}>
				+ Increment
			</button>
			<button onClick={handleDecrement} disabled={state.count === 0}>
				- Decrement
			</button>
		</div>
	);
}

export default FuncApp;
