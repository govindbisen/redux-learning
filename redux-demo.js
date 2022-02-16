// const redux = require("redux");
import redux from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);
// console.log(store.getState()); //initial state...

const countSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(countSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

//store-state => reducer => dispatch Action => change in store-state
