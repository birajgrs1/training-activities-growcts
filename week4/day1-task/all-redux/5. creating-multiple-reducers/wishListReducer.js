export const ADD_TO_WISHLIST = "wishList/addItem";
export const REMOVE_FROM_WISHLIST = "wishList/removeItem";

const initialState = {
  wishList: [],
};

export default function wishListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return { ...state, wishList: [...state.wishList, action.payload] };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter(
          (wishListItem) => wishListItem.productId !== action.payload.productId
        ),
      };
    default:
      return state;
  }
}
