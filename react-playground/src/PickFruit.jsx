import React, { useState } from "react";

const FRUITS = [
	{
		id: 0,
		name: "Orange",
		logo: "🟠",
	},
	{
		id: 1,
		name: "Grape",
		logo: "🍇",
	},
	{
		id: 2,
		name: "Watermelon",
		logo: "🍉",
	},
	{
		id: 3,
		name: "Apple",
		logo: "🍏",
	},
	{
		id: 4,
		name: "Strawberry",
		logo: "🍓",
	},
];

function FruitName(props) {
	const { fruit, handleDeleteFruit } = props;
	return (
		<div>
			<p>
				{fruit.logo} {fruit.name} &nbsp;
				<span onClick={() => handleDeleteFruit(fruit.id)}>❌</span>
			</p>
		</div>
	);
}

const Fruits = (props) => {
	const { fruits, handleDeleteFruit } = props;
	console.log(
		<>
			{fruits.map((fruit) => (
				<FruitName
					fruit={fruit}
					handleDeleteFruit={handleDeleteFruit}
					key={fruit.id}
				/>
			))}
		</>
	);
	return (
		<>
			{fruits.map((fruit) => (
				<FruitName
					fruit={fruit}
					handleDeleteFruit={handleDeleteFruit}
					key={fruit.id}
				/>
			))}
		</>
	);
};

const FormFruit = (props) => {
	const { handleAddFruit } = props;
	return (
		<form onSubmit={handleAddFruit}>
			<select name="fruit" id="fruit">
				{FRUITS.map((fruit) => (
					<option value={fruit.id} key={fruit.id}>
						{fruit.logo} {fruit.name}
					</option>
				))}
			</select>
			<button type="submit">Add</button>
		</form>
	);
};

const PickFruit = () => {
	const [fruits, setFruits] = useState([]);

	const handleAddFruit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const fruitId = Number(formData.get("fruit"));
		const fruit = FRUITS.find((val) => val.id === fruitId);
		setFruits((state) => [...state, fruit]);
	};

	const handleDeleteFruit = (id) => {
		id = Number(id);
		const tempFruits = fruits.filter((val) => val.id !== id);
		setFruits(tempFruits);
	};

	return (
		<div>
			<FormFruit fruits={fruits} handleAddFruit={handleAddFruit} />
			<Fruits fruits={fruits} handleDeleteFruit={handleDeleteFruit} />
		</div>
	);
};

export default PickFruit;
