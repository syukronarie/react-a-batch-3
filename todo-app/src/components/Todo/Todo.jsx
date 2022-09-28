import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";

const TODOS = [
	{ id: 1, title: "Learning to Code", completed: false, createdAt: new Date() },
];

const Todo = () => {
	const navigate = useNavigate();
	const [todos, setTodos] = useState(TODOS);

	const addTodo = (title) => {
		if (!title) alert("Minimum 3 character for add new todo");
		const newTodo = {
			id: todos.length + 1,
			title,
			completed: false,
			createdAt: new Date(),
		};
		setTodos((state) => [...state, newTodo]);
	};

	const deleteTodo = (id) => {
		const filteredTodos = todos.filter((val) => val.id !== Number(id));
		setTodos(filteredTodos);
	};

	return (
		<div className="todo">
			<Header title="Todo Page" />
			<AddInput addTodo={addTodo} />
			<TodoList todos={todos} deleteTodo={deleteTodo} />

			<Link to="/inputfile">
				<button>Go To Input File </button>
			</Link>
		</div>
	);
};

export default Todo;
