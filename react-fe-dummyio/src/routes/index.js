import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateUser from "../pages/UpdateUser";

const WebRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" >
					<Route path='/edit-user' element={<UpdateUser />}/>
				</Route>
				<Route path="*" />
			</Routes>
		</BrowserRouter>
	);
};

export default WebRoutes;
