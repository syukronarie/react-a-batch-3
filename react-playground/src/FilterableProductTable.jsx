import React from "react";
import { useState } from "react";

function ProductCategoryRow({ category }) {
	return (
		<tr>
			<th colSpan="2">{category}</th>
		</tr>
	);
}

const ProductRow = ({ product }) => {
	const name = product.stocked ? (
		product.name
	) : (
		<span style={{ color: "red" }}>{product.name}</span>
	);

	return (
		<tr>
			<td>{name}</td>
			<td>{product.price}</td>
		</tr>
	);
};

const ProductTable = ({ products, inStockOnly, filterText }) => {
	const rows = [];
	let lastCategory = null;

	products.forEach((product) => {
		if (product.name.indexOf(filterText) === -1) {
			return;
		}
		if (inStockOnly && !product.stocked) {
			return;
		}
		if (product.category !== lastCategory) {
			rows.push(
				<ProductCategoryRow
					category={product.category}
					key={product.category}
				/>
			);
		}
		rows.push(<ProductRow product={product} key={product.name} />);
		lastCategory = product.category;
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

function SearchBar({
	filterText,
	inStockOnly,
	onFilterTextChange,
	onInStockChange,
}) {
	function handleFilterTextChange(e) {
		onFilterTextChange(e.target.value);
	}

	function handleInStockChange(e) {
		onInStockChange(e.target.checked);
	}

	return (
		<form>
			<input
				type="text"
				placeholder="Search..."
				value={filterText}
				onChange={handleFilterTextChange}
			/>
			<p>
				<input
					type="checkbox"
					checked={inStockOnly}
					onChange={handleInStockChange}
				/>{" "}
				Only show products in stock
			</p>
		</form>
	);
}

function FilterableProductTable({ products }) {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);

	const handleFilterTextChange = (filterText) => {
		setFilterText(filterText);
	};

	const handleInStockChange = (inStockOnly) => {
		setInStockOnly(inStockOnly);
	};

	return (
		<div>
			<SearchBar
				filterText={filterText}
				inStockOnly={inStockOnly}
				onFilterTextChange={handleFilterTextChange}
				onInStockChange={handleInStockChange}
			/>
			<ProductTable
				products={products}
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</div>
	);
}

export default FilterableProductTable;
