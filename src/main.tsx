import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";

import { store, persist } from "@/store/index";

import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

const rootElement = document.getElementById("root")!;

const app = ReactDOM.createRoot(rootElement);

app.render(
  <Provider store={store}>
    {/* 仓库数据持久化 */}
    <PersistGate persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
);
