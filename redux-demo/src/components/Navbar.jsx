import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cart = useSelector((state) => state.cart);
	return <div>{JSON.stringify(cart)}</div>;
};

export default Navbar;
