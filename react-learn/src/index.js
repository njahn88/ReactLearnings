import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavScript', 9],
  ['React, 8']
]

const Skill = ({ skill: [tech, level ]}) => (
  <li>
    {tech} {level}
  </li>
)

const Skills = ({skills}) => {
  const skillsList = skills.map((skill) => <Skill skill={skill}/>)
  return <ul>{skillsList}</ul>
}

const AppMain = () => {

  return (
    <div className='container'>
      <div>
        <h1>Skills level</h1>
        <ul>
          <Skills skills={skills}/>
        </ul>
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
