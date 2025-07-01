import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import router from "./routers/route";
import store from "./stores/store";

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
