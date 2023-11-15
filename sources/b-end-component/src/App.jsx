import { RouterProvider } from "react-router-dom";
import router from "./routers/route";

import { Provider } from "react-redux";
import store from "./stores/store";

import { LanguageProvider, ThemeProvider } from "./contexts/context";

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
