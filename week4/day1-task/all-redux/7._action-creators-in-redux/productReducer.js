import { productsList } from "./product_lists";

export default function productReducer(state = productsList, action) {
  switch (action.type) {
    default:
      return state;
  }
}
