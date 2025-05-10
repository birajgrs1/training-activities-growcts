import { createStore } from "redux";

/*
npx parcel index.html
*/

console.dir(createStore);

const initialState = {
  //initial-state
  postCount: 0,
  name: "Biraj",
  age: 22,
};

/*
  
  let prevState = state;
  function INCREMENT(){
      state = {...state, postCount: state.postCount + 1};
  
  }
  
  // console.log(prevState);
  
  INCREMENT();
  console.log(state);
  // console.log(prevState);
  INCREMENT();
  console.log(state);
  INCREMENT();
  console.log(state);
  // console.log(prevState);
  
  */

const INCREMENT = "post/INCREMENT";
const DECREMENT = "post/DECREMENT";

const INCREASEBY = "post/INCREMENTBY";

const DECREASEBY = "post/DECREMENTBY";

function reducer(state = initialState, action) {
  //reducer(currentState, action)
  console.log(action);

  /*
  if (action.type === INCREMENT) {
    return { ...state, postCount: state.postCount + 1 };
  } else if (action.type === DECREMENT) {
    return { ...state, postCount: state.postCount - 1 };
  } else if (action.type === increaseBY) {
    console.log(action);
    return { ...state, postCount: state.postCount + action.payload };
  } else if (action.type === decreaseBY) {
    console.log(action);
    return { ...state, postCount: state.postCount - action.payload };
  }
  return state;
  */

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

const store = createStore(reducer);
console.log(store);
// console.log(store.getState());

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});
// console.log(store.getState());
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREASEBY, payload: 5 });
store.dispatch({ type: DECREASEBY, payload: 2 });
// console.log(store.getState());

/*
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/INCREMENT" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/INCREMENT" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/INCREMENT" });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/INCREMENTBY", payload: 10 });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/INCREMENTBY", payload: 10 });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/DECREMENTBY", payload: 5 });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/DECREMENT" });
console.log(reduxState);
*/
