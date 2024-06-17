import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Reach allows for easy creation of reusable HTML using JavaScript
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date} ${year}`
}

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    autoher: {firstName, lastName},
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

const UserCard = ({ user: { firstName, lastName, image }}) => (
  <div className='user-card'>
    <img src={image} alt={firstName}></img>
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

const Button = ({ text, onClick, style}) => (
  <button style={style} onClick={onClick}>{text}</button>
)

const buttonStyles = {
  backGroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started with React</p>
      <ul>
        <TechList techs={techs}/>
      </ul>
      <UserCard user={user}/>
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles}/>
      <Button text='Show Time' onClick={handleTime} style={buttonStyles}/>
    </div>
  </main>
)

const Footer = ({copyRight}) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

const AppMain = () => {
  const data = {
    walcome: 'Welcome to the page',
    title: 'Getting started with react',
    subtitle: 'Javascript Library',
    author: {
      firstName: 'Nathan',
      lastName: 'Jahn',
    },
    date: new Date()
  }

  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  const user = { ...data.author, image: 'not a url'}

  const greetPeople = () => {
    alert('Welcome to 30 days of react challenge, 2024')
  }

  const handleTime = () => {
    alert(showDate(new Date()))
  }

  return (
    <div className='app'>
      <Header data={data}/>
      <Main 
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date}/>  
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
