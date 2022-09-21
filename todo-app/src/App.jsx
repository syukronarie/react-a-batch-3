import React from "react";
import Banner from "./components/Banner/Banner";
import SetupRouters from "./routes/SetupRouters";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Banner />
			<SetupRouters />
		</div>
	);
};

export default App;
