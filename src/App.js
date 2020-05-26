import React from 'react';
import { Provider } from 'react-redux';

import store from './store/index';

import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>    
  );
}

export default App;
