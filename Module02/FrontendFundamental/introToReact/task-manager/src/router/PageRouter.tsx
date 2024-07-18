import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { Provider } from "react-redux";

import { store } from "../store/store";

import Home from "../pages/home";
import Settings from "../pages/settings";
import Auth from "../pages/auth";
import Counter from "../pages/counter";

const PageRouter = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Auth />} path="/auth" />
            <Route element={<Settings />} path="/settings" />
            <Route element={<Counter />} path="/counter" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default PageRouter;
