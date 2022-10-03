import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import Layout from "../components/Layout";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import Profile from "../components/Profile";

const SetupRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<DashboardPage />} />
				</Route>
				<Route path="/" element={<PrivateRoute />}>
					<Route path="/cart" element={<h1>Welcome to Cart Page</h1>} />
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route path="/" element={<ProtectedRoute />}>
					<Route path="/register" element={<SignUpPage />} />
					<Route path="/login" element={<SignInPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouter;
