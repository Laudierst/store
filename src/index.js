import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productFatch, } from "./redux/product/productsSlice.jsx";
import categoryReducer, { categoryFatch } from "./redux/category/categorysSlice.jsx"
import comentarioReducer, { comentarioFatch } from "./redux/comentarios/comentariosSlice.jsx"
import creatsReducer, { cauculateTotal } from "./redux/cart/cart.jsx";
import { comentarioApi } from "./redux/comentarios/comentariosApi";
import { categoryApi } from "./redux/category/categorysApi";
import { productsApi } from "./redux/product/productsApi.jsx";

const queryClient = new QueryClient();

const store = configureStore({
  reducer: {
    categorys: categoryReducer,
    products: productReducer,
    comentarios: comentarioReducer,
    cart: creatsReducer,
    [categoryApi.categoryFatch]: categoryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [comentarioApi.reducerPath]: comentarioApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware, categoryApi.middleware, comentarioApi.middleware);
  },
});

store.dispatch(categoryFatch());
store.dispatch(productFatch());
store.dispatch(comentarioFatch());
store.dispatch(cauculateTotal());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
