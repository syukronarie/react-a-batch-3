import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "../pages/TodoPage";
import FollowersPage from "../pages/FollowersPage";
import FollowerPage from "../pages/FollowerPage";
import NotFound from "../pages/NotFound";

const SetupRouters = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodoPage />} />
				<Route path="/followers">
					<Route index element={<FollowersPage />} />
					<Route path="/followers/:id" element={<FollowerPage />} />
				</Route>
				<Route path="/followers" element={<FollowersPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouters;
