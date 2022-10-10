import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "./App.css";
import "./index.css";
import WebRoutes from "./routes";
import { persistor, store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<WebRoutes />
				</PersistGate>
			</Provider>
  </React.StrictMode>
);
