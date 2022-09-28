import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FollowersPage from "../pages/FollowersPage";
import FollowerPage from "../pages/FollowerPage";
import InputFile from "../components/InputFile/InputFile";
import NotFound from "../pages/NotFound";
import SignInUncontrolledComp from "../components/SignInUncontrolledComp/SignInUncontrolledComp";
import SignInControlledComp from "../components/SignInControlledComp/SignInControlledComp";
import TodoPage from "../pages/TodoPage";
import Layout from "../components/Layout/Layout";

const SetupRouters = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<TodoPage />} />
					<Route path="/followers">
						<Route index element={<FollowersPage />} />
						<Route path="/followers/:id" element={<FollowerPage />} />
					</Route>
					<Route path="/followers" element={<FollowersPage />} />
					<Route
						path="/signin-uncontrolled"
						element={<SignInUncontrolledComp />}
					/>
					<Route path="/signin-controlled" element={<SignInControlledComp />} />
					<Route path="/inputfile" element={<InputFile />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouters;
