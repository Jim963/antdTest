import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import store from "./store/index";
import App from "./App.jsx";

import { ConfigProvider } from "antd";
import zhTW from "antd/locale/zh_TW";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        locale={zhTW}
        theme={{ token: { colorPrimary: "#275682" } }}
      >
        <HashRouter>
          <App />
        </HashRouter>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
