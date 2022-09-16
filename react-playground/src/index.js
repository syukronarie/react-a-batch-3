import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FuncApp from "./FunctionComp";
import PickFruit from "./PickFruit";
import EventHandling from "./EventHandling";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <FuncApp /> */}
		{/* <PickFruit /> */}
		<EventHandling />
	</React.StrictMode>
);
