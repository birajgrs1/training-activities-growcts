import { productsList } from "./product_lists";

const initialState = productsList;

// Reducer
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
