import { createStore } from "redux";
import myOwnCreateStore from "./myOwnRedux"

document.addEventListener('DOMContentLoaded', () => {
  const postCountElement = document.querySelector('.post-count');
  if (postCountElement) {
    postCountElement.innerText = store.getState().postCount;
  } else {
    console.error('Element with class "post-count" not found.');
  }
});

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
console.log(store, reducer);

const myOwnStore = myOwnCreateStore();
console.log(myOwnStore);
// console.log(store,'Redux Devtool Details: ',__REDUX_DEVTOOLS_EXTENSION__());    //redux devtool extension call

// subscribe
// store.subscribe(() => {
//   console.log(store.getState());
// });

document.addEventListener('DOMContentLoaded', () => {
  const postCountElement = document.querySelector('.post-count');
  if (postCountElement) {
    const unsubscribe = store.subscribe(() => {
      console.log(store.getState());
      postCountElement.innerText = store.getState().postCount;
    });

    postCountElement.innerText = store.getState().postCount;
    // console.log(store.getState());
    myOwnStore.dispatch({ type: INCREMENT });
    myOwnStore.dispatch({ type: DECREMENT });
    myOwnStore.dispatch({ type: INCREASEBY, payload: 5 });
    myOwnStore.dispatch({ type: DECREASEBY, payload: 2 });

    // unsubscribe()

    postCountElement.addEventListener('click', () => {
      store.dispatch({ type: INCREMENT })
    })
  } else {
    console.error('Element with class "post-count" not found.');
  }
})

// npm install -g parcel
// npm install --save-dev parcel
// npm init -y
