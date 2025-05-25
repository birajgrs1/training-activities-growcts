import { createStore } from "redux";

import {
  // ADD_TO_CART,
  // REMOVE_FROM_CART,
  // CART_ITEM_INCREASE_QUANTITY,
  // CART_ITEM_DECREASE_QUANTITY,
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartReducer";

import cartReducer from "./cartReducer";
import wishListReducer, { addToWishList, removeFromWishList } from "./wishListReducer";

import //  ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST

"./wishListReducer";
import productReducer from "./productReducer";

/*
npx parcel index.html
*/

// creating own combineReducers

// debugger;
const combineReducers = (reducer) => {
  const reducerKeys = Object.keys(reducer);
  // debugger;
  return (state = {}, action) => {
    // debugger;
    return reducerKeys.reduce((nextState, key) => {
      nextState[key] = reducer[key](state[key], action);
      // debugger;
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
// console.log(store);

store.dispatch(addToCart(10));
store.dispatch(addToCart(16));
store.dispatch(removeFromCart(12));
store.dispatch(increaseQuantity(13,5));
store.dispatch(decreaseQuantity(13,2));
store.dispatch(addToWishList(25));
store.dispatch(addToWishList(26));
store.dispatch(removeFromWishList(26));

// store.dispatch({
//   type: ADD_TO_CART,
//   payload: { productId: 12, quantity: 1 },
// });
// store.dispatch({
//   type: CART_ITEM_INCREASE_QUANTITY,
//   payload: { productId: 12 },
// });
// store.dispatch({
//   type: CART_ITEM_DECREASE_QUANTITY,
//   payload: { productId: 12 },
// });

// store.dispatch({
//   type: CART_ITEM_DECREASE_QUANTITY,
//   payload: { productId: 12 },
// });

// store.dispatch({ type: ADD_TO_WISHLIST, payload: { productId: 18 } });
// store.dispatch({ type: ADD_TO_WISHLIST, payload: { productId: 11 } });
// store.dispatch({ type: REMOVE_FROM_WISHLIST, payload: { productId: 11 } });
// store.dispatch({ type: REMOVE_FROM_WISHLIST, payload: { productId: 18 } });
console.log(store.getState());

/*
In Redux, action creators are functions that create and return action objects. They encapsulate the
process of creating actions, making the code more maintainable and reusable. 
Instead of directly creating action objects in your components, you use action creators to prepare and
format the action objects. 

// creating action creators

const demoActionCreator = () => {
  return {
    type: "DEMO_ACTION",
    payload: {
      name: "John",
      age: 30,
    },
  };
};




Key aspects of action creators:
Functions that return actions:
Action creators are functions that take arguments and return a standard action object. 

Encapsulation:
They encapsulate the logic of creating actions, making the code cleaner and easier to manage. 

Reusability:
Action creators can be reused throughout your application wherever the same action needs to be 
dispatched. 

Optional Arguments:
Action creators can take arguments to add data to the action. 

Why use action creators?
Maintainability:
By encapsulating action creation, you reduce code duplication and make it easier to maintain your code. 

Code clarity:
Action creators make it clearer what actions are being dispatched. 

Reusability:
You can use the same action creator in different parts of your application. 

Thunk middleware:
Action creators can be used with Redux Thunk middleware to handle asynchronous operations. 

*/
