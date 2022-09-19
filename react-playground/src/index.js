import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FuncApp from "./FunctionComp";
import PickFruit from "./PickFruit";
import EventHandling from "./EventHandling";
import ClassComp from "./ClassComp";
import FilterableProductTable from "./FilterableProductTable";

const PRODUCTS = [
	{
		category: "Sporting Goods",
		price: "$49.99",
		stocked: true,
		name: "Football",
	},
	{
		category: "Sporting Goods",
		price: "$9.99",
		stocked: true,
		name: "Baseball",
	},
	{
		category: "Sporting Goods",
		price: "$29.99",
		stocked: false,
		name: "Basketball",
	},
	{
		category: "Electronics",
		price: "$99.99",
		stocked: true,
		name: "iPod Touch",
	},
	{
		category: "Electronics",
		price: "$399.99",
		stocked: false,
		name: "iPhone 5",
	},
	{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <FuncApp /> */}
		{/* <PickFruit /> */}
		{/* <EventHandling /> */}
		{/* <ClassComp /> */}
		<FilterableProductTable products={PRODUCTS} />
	</React.StrictMode>
);
