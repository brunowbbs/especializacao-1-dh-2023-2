import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import CounterReducer from "./reducers/counter-reducer.js";
import ListReducer from "./reducers/list-reducer.js";

const store = createStore(
  combineReducers({
    counter: CounterReducer,
    list: ListReducer,
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
