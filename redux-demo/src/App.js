import { Provider } from "react-redux";
import "./App.css";
import SetupRouter from "./router";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<SetupRouter />
			</div>
		</Provider>
	);
}

export default App;
