import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import TodoReducer from './components/store/TodoReducer';

const store = configureStore({
  reducer: {
    todoReducer: TodoReducer,
  }
});

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
