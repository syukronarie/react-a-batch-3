import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import Layout from "../components/Layout";

const SetupRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<DashboardPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouter;
