import { createStore } from "redux";

import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";
import productReducer from "./productReducer";


const combineReducers = (reducer) => {
  const reducerKeys = Object.keys(reducer);

  return (state = {}, action) => {

    return reducerKeys.reduce((nextState, key) => {
      nextState[key] = reducer[key](state[key], action);
   
      return nextState;
    }, {});
  };
};

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  wishList: wishListReducer,
});

// console.dir(createStore);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

export default store;