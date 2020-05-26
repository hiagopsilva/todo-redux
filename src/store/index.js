import { createStore } from 'redux';

const INITIAL_STATE = {
  DATA: [
    'shopping',
    'study',
    'travel'
  ]
}

function todos(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, data: [ ...state.data, action.title] };
    default:
      return state;
  }
};

const store = createStore({todos});

export default store;