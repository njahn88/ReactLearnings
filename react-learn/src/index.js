import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const AppMain = () => {
  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        ([1, 2, 3, 4, 5])
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppMain />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
