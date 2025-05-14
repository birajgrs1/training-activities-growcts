import { createStore } from "redux";
import { productsList } from "./product_lists";

/*
npx parcel index.html
*/

console.dir(createStore);

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};
const ADD_TO_CART = "cart/addItem";
const REMOVE_FROM_CART = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      };
    case CART_ITEM_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        }),
      };

    case CART_ITEM_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.quantity > 0),
      };

    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.()); //store enhancer
console.log(store);

store.dispatch({
  type: ADD_TO_CART,
  payload: { productId: 1, quantity: 1 },
});

store.dispatch({
  type: ADD_TO_CART,
  payload: { productId: 2, quantity: 5 },
});

store.dispatch({
  type: REMOVE_FROM_CART,
  payload: { productId: 4 },
});

store.dispatch({
  type: REMOVE_FROM_CART,
  payload: { productId: 5 },
});
store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: { productId: 12 },
});
store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: { productId: 12 },
});

store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 12 },
});


console.log(store.getState());