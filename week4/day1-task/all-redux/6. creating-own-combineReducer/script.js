import {  createStore } from "redux";

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_ITEM_INCREASE_QUANTITY,
  CART_ITEM_DECREASE_QUANTITY,
} from "./cartReducer";

import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";

import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./wishListReducer";
import productReducer from "./productReducer";

/*
npx parcel index.html
*/

// creating own combineReducers

debugger;
const combineReducers = (reducer) =>{  // reducer is an object, which helps us to combine multiple reducers
  const reducerKeys = Object.keys(reducer); // Here, we are getting the keys of the reducer object
debugger
  return (state = {}, action) => { 
    debugger; 
    return reducerKeys.reduce((nextState, key) => {
      nextState[key] = reducer[key](state[key], action);
      debugger;
      return nextState;
    }, {});
  }
}

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  wishList: wishListReducer,
});

// console.dir(createStore);

const store = createStore(reducer);
console.log(store);

store.dispatch({ type: ADD_TO_CART, payload: { productId: 1, quantity: 1 } });
store.dispatch({
  type: ADD_TO_CART,
  payload: { productId: 12, quantity: 1 },
});
store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: { productId: 12 },
});
store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 12 },
});

store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 12 },
});

store.dispatch({ type: ADD_TO_WISHLIST, payload: { productId: 18 } });
store.dispatch({ type: ADD_TO_WISHLIST, payload: { productId: 11 } });
store.dispatch({ type: REMOVE_FROM_WISHLIST, payload: { productId: 11 } });
store.dispatch({ type: REMOVE_FROM_WISHLIST, payload: { productId: 18 } });
console.log(store.getState());
