import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Theme from "./themes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <Provider store={store}>
        <ToastContainer position="top-right" autoClose={3000} />
        <App />
      </Provider>
    </Theme>
  </StrictMode>
);
