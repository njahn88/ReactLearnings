import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const header = (
  <header>
    <h1>Welcome to the page</h1>
    <h2>Getting started with react</h2>
    <h3>Javascript Library</h3>
    <p>Nathan Jahn</p>
    <small>June 16, 2024</small>
  </header>
)

const main = (
  <main>
    <p>Prerequisite to getting started with reach.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
    </ul>
  </main>
)

const footer = (
  <footer>
    <p>Copyright 2024</p>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  app
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
