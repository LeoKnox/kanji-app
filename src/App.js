import './App.css';
import Single from './my_data.js';
import RegularList from './RegularList.js';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <RegularList
          items={data}
          resourName="kanji"
          itemComponent={Single}
        />
      </header>
    </div>
  );
}

export default App;
