import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";

const Layout = () => {
	const themes = useContext(ThemeContext);
	return (
		<div style={{ background: themes.background }}>
			<Outlet />
		</div>
	);
};

export default Layout;
