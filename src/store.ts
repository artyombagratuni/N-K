import { createStore } from 'redux';

const initialState = {
  init: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
