import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import './styles/global.css';

import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <TodoList />
      </Provider>
    </>    
  );
}

export default App;
