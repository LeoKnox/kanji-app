import './App.css';
//import KanjiMap from './my_data.js';
import KanjiMap from './quiz.js';
import SelectGrade from './grade.js';

  //<KanjiMap grades="23"/>  quizes for Kanji from quiz.js
function App() {
  return (
    <div className="App">
      <h1 id="kanjiTitle">Kanji Trainer</h1>
      <header className="App-header">
      </header>
      <SelectGrade />
    </div>
  );
}

export default App;
