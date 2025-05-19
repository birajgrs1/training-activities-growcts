export const ADD_TO_CART = "cart/addItem";
export const REMOVE_FROM_CART = "cart/removeItem";
export const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
export const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";


const initialState = {
    cartItems: [],
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case REMOVE_FROM_CART:
        return { ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),};
    case CART_ITEM_INCREASE_QUANTITY:
        return { ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        }),};
    case CART_ITEM_DECREASE_QUANTITY:
        return { ...state,
        cartItems: state.cartItems
          .map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.quantity > 0),};
        case CART_ITEM_DECREASE_QUANTITY:
        return { ...state,
        cartItems: state.cartItems
          .map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.quantity > 0),};
    default:
      return state;
  }
}