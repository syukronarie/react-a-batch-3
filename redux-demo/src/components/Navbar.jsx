import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import iconCartSvg from "../assets/svg/cart-shopping-solid.svg";
import Auth from "../utils/Auth";

const Navbar = () => {
	const navigate = useNavigate();
	const cart = useSelector((state) => state.cart);
	const [showProductList, setShowProductList] = useState(false);

	return (
		<div className="navbar-container">
			<h1>EC</h1>
			<div className="cart" onMouseEnter={() => setShowProductList(true)}>
				<span>{cart.totalProduct}</span>
				<Link to="/cart">
					<img srcSet={iconCartSvg} alt="cart-icon" width="25px" />
				</Link>
				{Auth.isAuthorization() && (
					<button onClick={() => Auth.signOut(navigate)}>Sign Out</button>
				)}
			</div>
			{showProductList && cart.data !== 0 && (
				<div
					className="cart-items"
					onMouseEnter={() => setShowProductList(true)}
					onMouseLeave={() => setShowProductList(false)}
				>
					{cart.data.map((product) => (
						<div className="cart-item" key={product.id}>
							<h2>{product.title}</h2>
							<p>{product.price}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Navbar;
