import SelectGrade from './grade2.js';

const Game = (meters="quiz") => {
    return (
    <div className="App">
      <h1 id="kanjiTitle">Kanji Trainer</h1>
      if (meters === "quiz") {
        <h3>::Quiz Me!</h3>
      }
      <div className="Content">
        <SelectGrade />
      </div>
      <header className="App-header">
      </header>
    </div>
    )
}

export default Game;