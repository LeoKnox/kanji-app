import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import KanjiMap from './my_data.js';
import Game from './game.js';
import KanjiMap from './quiz.js';
import SelectGrade from './grade2.js';

  //<KanjiMap grades="23"/>  quizes for Kanji from quiz.js
  //<SelectGrade />
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/quiz/:id/" element={<KanjiMap grades="1" comp="red" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
