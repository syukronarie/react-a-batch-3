import { BrowserRouter, Route, Routes } from "react-router-dom";

const WebRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" />
				<Route path="*" />
			</Routes>
		</BrowserRouter>
	);
};

export default WebRoutes;
