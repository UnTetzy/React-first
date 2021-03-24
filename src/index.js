import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id: 1, name: 'Alexander Vetrov', day: '3 марта', time: '19:04', message: 'Сегодня я сходил погулять'},
  {id: 2, name: 'Alexander Vetrov', day: '1 марта', time: '18:04', message: 'АЛАЛАЛААЛАЛАааааааааааааааааааааааааааааааааааааааааааааffffffffffffffffffffff'},
  {id: 3, name: 'Alexander Vetrov', day: '12 февраля', time: '17:04', message: 'Сегодня я не сходил погулять'}
]

const dialogsData = [
  {id: 1, name: 'Alexander Vetrov'},
  {id: 2, name: 'Evgeniy Vetrov'},
  {id: 3, name: 'Sasha Vetrov'},
  {id: 4, name: 'Oleg Vetrov'},
  {id: 5, name: 'Grisha Vetrov'},
  {id: 6, name: 'Dima Vetrov'}
]
let messagesData = [
  {message: 'Привет как дела'},
  {message: 'Хахахахаха'},
  {message: 'Норм привет'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
