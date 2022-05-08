import SelectGrade from './grade2.js';

const Game = () => {
    return (
    <div className="App">
      <h1 id="kanjiTitle">Kanji Trainer</h1>
      <div className="Content">
        <SelectGrade />
      </div>
      <header className="App-header">
      </header>
    </div>
    )
}

export default Game;