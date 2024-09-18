import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from'react-redux';
import { appStore } from "./utils/appStore.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={appStore}>
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
  </Provider>
);
