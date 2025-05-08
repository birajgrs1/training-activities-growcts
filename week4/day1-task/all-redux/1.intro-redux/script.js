import { createStore } from "redux";

/*
npx parcel index.html
*/

console.dir(createStore);

const initialState = {  //initial-state
  postCount: 0,
  name: "Biraj",
  age: 22,
};

/*
  
  let prevState = state;
  function increment(){
      state = {...state, postCount: state.postCount + 1};
  
  }
  
  // console.log(prevState);
  
  increment();
  console.log(state);
  // console.log(prevState);
  increment();
  console.log(state);
  increment();
  console.log(state);
  // console.log(prevState);
  
  */

function reducer(state = initialState, action) {    //reducer(currentState, action)
  console.log(action);

  if (action.type === "post/increment") {
    return { ...state, postCount: state.postCount + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, postCount: state.postCount - 1 };
  } else if (action.type === "post/incrementBy") {
    console.log(action);
    return { ...state, postCount: state.postCount + action.payload };
  } else if (action.type === "post/decrementBy") {
    console.log(action);
    return { ...state, postCount: state.postCount - action.payload };
  }
  return state;
}

const store = createStore(reducer);
// console.log(store);
console.log(store.getState());
store.dispatch({type: 'post/increment'});
console.log(store.getState());
store.dispatch({type: 'post/incrementBy', payload:5});
console.log(store.getState());

/*
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/decrementBy", payload: 5 });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/decrement" });
console.log(reduxState);
*/
