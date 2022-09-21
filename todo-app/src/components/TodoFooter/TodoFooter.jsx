import React from "react";
import { Link } from "react-router-dom";
import "./TodoFooter.css";

function TodoFooter({ numberOfIncompleteTasks }) {
	return (
		<div className="todo-footer">
			<p>
				{numberOfIncompleteTasks}&nbsp;
				{numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
			</p>
			<Link to="/followers">Go to Followers Page</Link>
		</div>
	);
}

export default TodoFooter;
