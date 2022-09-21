import React from "react";
import "./AddInput.css";

function AddInput({ addTodo }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const title = new FormData(e.target).get("title");
		addTodo(title);
	};
	return (
		<form className="input-container" onSubmit={handleSubmit}>
			<input
				className="input"
				name="title"
				placeholder="Add a new task here..."
			/>
			<button type="submit" className="add-btn">
				Add
			</button>
		</form>
	);
}

export default AddInput;
