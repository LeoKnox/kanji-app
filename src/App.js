import './App.css';
import { KanjiInfo } from './KanjiInfo';
import { withKanji } from './withKanji';

const KanjiInfoWithLoader = withKanji(KanjiInfo, 1);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <KanjiInfoWithLoader />
      </header>
    </div>
  );
}

export default App;
