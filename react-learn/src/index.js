import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Country data
const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Nowrway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavik' },
]

//React component country. Takes in an object and returns a small listing based on
//the name and city given
const Country = ({ country : {name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// Reach component that takes in a list of country data and maps each one to an
// individual Country component
const Countries = ({ countries }) => {
  //maps each country structure to a React Country component
  const countryList = countries.map((country) => <Country country={country}/>)
  return <div>{countryList}</div>
}

const AppMain = () => (
  <div className='contaier'>
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries}/>
    </div>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppMain />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
