import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import ProductsReducer from "./reducers/products-reducer.js";

const store = createStore(
  combineReducers({
    products: ProductsReducer,
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

/*
  1. Criar a Store

  2. Criar os reducers

  3. Implementar as actions

  4. Criar condicionais do reducer

*/
