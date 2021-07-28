import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import thunk from "redux-thunk";
import API from "./components/API";
import Register from "./components/Register";
import { useState } from "react";
import FormValidation from "./components/FormValidation";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <Provider store={store}>
        <Welcome />
        <Counter />
        <Form />
        <API />
        <FormValidation />
      </Provider>
    </div>
  );
}

export default App;
