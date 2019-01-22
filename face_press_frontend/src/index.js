import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import rootReducer from "./reducers";
import rootAction from "./actions";

const store = createStore(rootReducer, rootAction, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

ReactDOM.render(<App />, document.getElementById("root"));
