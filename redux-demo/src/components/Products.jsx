import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAdded } from "../store/features/cartSlice";
import { fetchProducts } from "../store/features/fetchProductsSlice";
// import products from "../utils/dummy_products.json";

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div className="product-container">
			{products.data.products?.map((val) => (
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
