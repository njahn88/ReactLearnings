import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Reach allows for easy creation of reusable HTML using JavaScript

const welcome = 'Welcome to the page'
const title = 'Getting started with React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Nathan',
  lastName: 'Jahn',
}
const date = 'June 16, 2024'


const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

// Creating variables can allow you to insert them using {}
const yearBorn = 2000
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// Using className="?" allows you to pull from the header style if
// desired
const main = (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to getting started with {' '}
        <strong>
          <em>react.js</em>
        </strong>
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
    </div>
  </main>
)

const copyRight = 'Copyright 2024'
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
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
