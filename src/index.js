import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import "./index.scss";
import App from "./App";
//import {UserProvider} from "./context/user.context";
import reportWebVitals from "./reportWebVitals";
import {CategoriesProvider} from "./context/categories.context";
import {CardProvider} from "./context/card.context";
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CardProvider>
        <App />
      </CardProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
