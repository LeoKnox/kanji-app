import './App.css';
//import KanjiMap from './my_data.js';
import KanjiMap from './quiz.js';
import SelectGrade from './grade2.js';

  //<KanjiMap grades="23"/>  quizes for Kanji from quiz.js
  //<SelectGrade />
function App() {
  return (
    <div className="App">
      <h1 id="kanjiTitle">Kanji Trainer</h1>
      <SelectGrade />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
