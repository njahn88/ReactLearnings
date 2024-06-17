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

// Using props, allows for injecting variables into the created componets
const Header = (props) => (
  <header>
    <div className='header-wrapper'>
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>
        Instructor: {props.firstName} {props.lastName}
      </p>
      <small>Date: {props.date}</small>
    </div>
  </header>
)

const Status = (props) => {
  let status = props.status ? 'Old enough to drive' : 'Not old enough to drive'
  return <p>{status}</p>
}

//Can use all different kinds of variables for dynamic pages
const AppMain = () => {
  const welcome = 'Welcome to the page'
  const title = 'Getting started with Reach'
  const subtitle = 'JavaScript Library'
  const firstName = 'Nathan'
  const lastName = 'Jahn'
  const date = 'June 17, 2024'

  let currentYear = 2024
  let birthYear = 2000
  const age = currentYear - birthYear
  let status = age >= 18

  return (
      <div className='app'>
        <Header 
          welcome={welcome}
          title={title}
          subtitle={subtitle}
          firstName={firstName}
          lastName={lastName}
          date={date}
        />
        <Status status={status}/>
      </div>
  )
} 

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

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

const Main = () => (
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
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

const buttonStyles = {
  padding: '10px 20px',
  color: 'rbg(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}
const Button = () => <button style={buttonStyles}>action</button>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppMain />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
