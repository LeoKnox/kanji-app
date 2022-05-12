import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './game.js';
import KanjiMap from './quiz.js';

  //<KanjiMap grades="23"/>  quizes for Kanji from quiz.js
  //<SelectGrade />
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game grades="1" meters="home" />} />
        <Route path="/quiz/:id/:second" element={<KanjiMap grades="1" meters="quiz" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
