import './App.css';
import ReactDOM from 'react-dom/client';
//import KanjiMap from './my_data.js';
import Game from './game.js';
import KanjiMap from './quiz.js';
import SelectGrade from './grade2.js';

  //<KanjiMap grades="23"/>  quizes for Kanji from quiz.js
  //<SelectGrade />
function App() {
  return (
    <Game />
  );
}

export default App;
