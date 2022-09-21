import React from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoList.css";

function TodoList({ todos, updateTodos, deleteTodo }) {
	const calcNumberOfIncompletedTasks = () => {
		let count = 0;
		todos.forEach((todo) => {
			if (!todo.completed) count++;
		});
		return count;
	};

	return (
		<div className="todolist-container">
			<div className="todos-container">
				<div>
					{todos.map((todo) => (
						<div className="todo-fragment" key={todo.id}>
							<div
								className={`todo-item ${todo.completed && "todo-item-active"}`}
							>
								{todo.title}
							</div>
							<button
								className="delete-btn"
								onClick={() => deleteTodo(todo.id)}
							>
								delete
							</button>
						</div>
					))}
				</div>
			</div>
			<div>
				<TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
			</div>
		</div>
	);
}

export default TodoList;
