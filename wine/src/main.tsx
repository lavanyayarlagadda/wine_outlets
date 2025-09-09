import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Theme from "./themes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </StrictMode>
);
