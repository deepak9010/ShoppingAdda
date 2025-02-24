import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";
// import  productReducer  from "./slices/productSlice";


const store = configureStore({
  reducer: {
    products: productReducer, 
  },
  devTools: process.env.NODE_ENV !== "production", // Enables Redux DevTools in development mode
});

export default store;










// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { productReducer } from "./reducers/productReducer"; // Import your reducers

// const reducer = combineReducers({
//   products: productReducer, // ✅ Must specify a key name for each reducer
// });

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;