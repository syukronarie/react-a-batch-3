import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "./App.css";
import SetupRouter from "./router";
import store, { persistor } from "./store";

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<div className="App">
					<SetupRouter />
				</div>
			</PersistGate>
		</Provider>
	);
}

export default App;
