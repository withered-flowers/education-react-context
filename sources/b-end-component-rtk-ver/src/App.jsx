import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import store from "./apps/store";
import { LanguageProvider, ThemeProvider } from "./contexts/context";
import router from "./routers/route";

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
