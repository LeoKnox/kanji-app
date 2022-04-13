import './App.css';
import KanjiMap from './my_data.js';

function App() {
  return (
    <div className="App">
      <h1>Kanji Trainer</h1>
      <header className="App-header">
        <KanjiMap />
      </header>
    </div>
  );
}

export default App;
