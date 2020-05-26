import { createStore } from 'redux';

const INITIAL_STATE = {
  DATA: [
    'shopping',
    'study',
    'travel'
  ]
}

function courses(state, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [ ...state.data, action.title] };
    default:
      return state;
  }
};

const store = createStore({courses});

export default store;