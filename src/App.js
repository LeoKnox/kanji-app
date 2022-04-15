import './App.css';
import KanjiMap from './my_data2.js';

function App() {
  return (
    <div className="App">
      <h1 id="kanjiTitle">Kanji Trainer</h1>
      <header className="App-header">
        <KanjiMap />
      </header>
    </div>
  );
}

export default App;
