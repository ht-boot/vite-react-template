import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import store from "@/store/index";
import { Provider } from "react-redux";

import "./index.css";

const rootElement = document.getElementById("root")!;

const app = ReactDOM.createRoot(rootElement);

app.render(
  <Provider store={store}>
    <App />
  </Provider>
);
