// Action Types
export const ADD_TO_CART = "cart/addItem";
export const REMOVE_FROM_CART = "cart/removeItem";
export const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
export const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

// Initial State
const initialState = {
  cartItems: [],
};

// Reducer
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    case CART_ITEM_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case CART_ITEM_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.productId === action.payload.productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
}

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload });
export const increaseQuantity = (payload) => ({ type: CART_ITEM_INCREASE_QUANTITY, payload });
export const decreaseQuantity = (payload) => ({ type: CART_ITEM_DECREASE_QUANTITY, payload });
