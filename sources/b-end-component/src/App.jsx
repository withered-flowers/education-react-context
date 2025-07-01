import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { LanguageProvider, ThemeProvider } from "./contexts/context";
import router from "./routers/route";
import store from "./stores/store";

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<LanguageProvider>
					<RouterProvider router={router} />
				</LanguageProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
