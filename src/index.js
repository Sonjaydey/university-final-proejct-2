import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { CartProvider } from "react-use-cart";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
