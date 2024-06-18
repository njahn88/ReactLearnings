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
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data
    return (
      <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{firstName} {lastName}</p>
            <small>{date}</small>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisites to getting started with react.js</p>
          <ul>
            <TechList techs={this.props.techs}/>
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
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class AppMain extends React.Component {
  render() {
    const data = {
      welcome: 'Welcome to the page',
      title: 'Getting started with React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Nathan',
        lastName: 'Jahn',
      },
      date: 'June 18, 2024',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']

    return (
      <div className='app'>
        <Header data={data}/>
        <Main techs={techs}/>
        <Footer date={new Date()}/>
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
