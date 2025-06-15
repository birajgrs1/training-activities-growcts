export const ADD_TO_WISHLIST = "wishList/addItem";
export const REMOVE_FROM_WISHLIST = "wishList/removeItem";

// Initial State
const initialState = {
  wishList: [],
};

// Reducer
export default function wishListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      const alreadyExists = state.wishList.some(
        (item) => item.productId === action.payload.productId
      );

      if (alreadyExists) return state;

      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    }

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    default:
      return state;
  }
}

// Action Creators
export const addToWishList = (payload) => ({
  type: ADD_TO_WISHLIST,
  payload,
});

export const removeFromWishList = (payload) => ({
  type: REMOVE_FROM_WISHLIST,
  payload,
});
