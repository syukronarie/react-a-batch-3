import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<h1>Home page</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
