import React from "react";
import products from "../utils/dummy_products.json";

const Products = () => {
	return (
		<div className="product-container">
			{products.data.map((val) => (
				<figure className="product-item" key={val.id}>
					<h2>{val.title}</h2>
					<img src={val.images[0]} alt={val.title} />
					<figcaption>{val.description}</figcaption>
					<p>
						<strong>PRICE ${val.price}</strong>
					</p>
				</figure>
			))}
		</div>
	);
};

export default Products;
