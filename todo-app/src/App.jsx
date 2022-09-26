import React from "react";
import Banner from "./components/Banner/Banner";
import SetupRouters from "./routes/SetupRouters";
import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
	return (
		<ThemeProvider className="App">
			<Banner />
			<SetupRouters />
		</ThemeProvider>
	);
};

export default App;
