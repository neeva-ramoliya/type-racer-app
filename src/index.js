import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from 'react-redux';
import configureStore from "./redux/store/configurestore";

import "./style.css"
const store = configureStore();


const jsx =  (
    <Provider store={store}>
      <App />
    </Provider>
  );

ReactDOM.render(jsx, document.getElementById("root"))