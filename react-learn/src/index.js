import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Class components in react extend from React.Component. They use the built in render method 
class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
            <h1>Welcome to the page</h1>
            <h2>Getting started with React</h2>
            <h3>JavaScript Library</h3>
            <p>Nathan Jahn</p>
            <small>June 18, 2024</small>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFomatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFomatted
  }
}

class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <main>
        <div className='main-wrapper'>
            <p>Prerequisite to getting started with react.js</p>
            <ul>
              <TechList />
            </ul>
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
            <p>Copyright 2024</p>
        </div>
      </footer>
    )
  }
}

class AppMain extends React.Component {
    constructor(props){
      super(props)
    }
    render() {
      return (
        <div className='app'>
          <Header />
          <Main />
          <Footer />
        </div>
      )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppMain />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
