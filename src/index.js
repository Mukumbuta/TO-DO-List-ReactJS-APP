import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TodoHolder from './components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoHolder />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
