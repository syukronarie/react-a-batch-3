import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
	const loader = useSelector((state) => state.loader);
	return (
		<div className="container">
			{loader && <h1>Loading ...</h1>}
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Layout;
