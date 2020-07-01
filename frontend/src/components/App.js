import React from "react";
import { render } from "react-dom";
import Routing from "./router";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <Routing />
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
const container = document.getElementById("app");
render(<App />, container);
