import { createStore } from "redux";

/*
npx parcel index.html
*/


const initialState = {
  //initial-state
  postCount: 0,
  name: "Biraj",
  age: 22,
};

const INCREMENT = "post/INCREMENT";
const DECREMENT = "post/DECREMENT";

const INCREASEBY = "post/INCREMENTBY";

const DECREASEBY = "post/DECREMENTBY";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, postCount: state.postCount + 1 };
    case DECREMENT:
      return { ...state, postCount: state.postCount - 1 };
    case INCREASEBY:
      return { ...state, postCount: state.postCount + action.payload };
    case DECREASEBY:
      return { ...state, postCount: state.postCount - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.()); //store enhancer
console.log(store);
// console.log(store,'Redux Devtool Details: ',__REDUX_DEVTOOLS_EXTENSION__());    //redux devtool extension call

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});
// console.log(store.getState());
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREASEBY, payload: 5 });
store.dispatch({ type: DECREASEBY, payload: 2 });




// npm install -g parcel
// npm install --save-dev parcel
// npm init -y
// __REDUX_DEVTOOLS_EXTENSION__