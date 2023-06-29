import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import zhTW from "antd/locale/zh_TW";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        locale={zhTW}
        theme={{ token: { colorPrimary: "#275682" } }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
