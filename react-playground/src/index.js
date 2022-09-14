import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FuncApp from "./FunctionComp";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		{/* <App /> */}
		<FuncApp />
	</React.StrictMode>
);
