import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './game.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game meters="home" />} />
        <Route path="/quiz/:id/" element={<Game grades="1" meters="quiz" />} />
        <Route path="/quiz/" element={<Game meters="home" error="noGrades" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
