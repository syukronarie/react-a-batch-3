import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import APIProduct from "../apis/product.api";
import { cartAdded } from "../store/features/cartSlice";
// import products from "../utils/dummy_products.json";

const Products = () => {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProduct() {
			APIProduct.getAllProduct().then((res) => {
				setProducts(res.data.products);
			});
		}

		fetchProduct();
	}, []);

	return (
		<div className="product-container">
			{products.map((val) => (
				<figure className="product-item" key={val.id}>
					<h2>{val.title}</h2>
					<img src={val.images[0]} alt={val.title} />
					<figcaption>{val.description}</figcaption>
					<p>
						<strong>PRICE ${val.price}</strong>
					</p>
					<button
						onClick={() => {
							const { id, title, price } = val;
							dispatch(cartAdded({ id, title, price }));
						}}
					>
						Add to Cart
					</button>
				</figure>
			))}
		</div>
	);
};

export default Products;
