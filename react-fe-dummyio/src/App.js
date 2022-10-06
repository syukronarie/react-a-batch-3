import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import "./App.css";
import WebRoutes from "./routes";
import { Provider } from "react-redux";

function App() {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<WebRoutes />
				</PersistGate>
			</Provider>
		</>
	);
}

export default App;
