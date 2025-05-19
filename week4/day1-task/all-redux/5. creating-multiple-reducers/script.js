import { combineReducers, createStore } from "redux";

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

/*
combineReducers:

The combineReducers() function is used to combine multiple reducers into a single reducer.
This helps in managing the state of your application in a more efficient way.
Syntax:

const rootReducer = combineReducers({
  reducer1,
  reducer2,
  reducer3,
});
Where: 
rootReducer is the name of the combined reducer.
reducer1, reducer2, and reducer3 are the individual reducers that manage different parts of the state.
*/
