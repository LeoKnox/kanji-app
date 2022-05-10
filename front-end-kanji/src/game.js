import SelectGrade from './grade2.js';

const Game = (meters="grade") => {
    console.log(meters.meters);
    if (meters.meters === "quiz") {
      return <h3>Quiz ME!!</h3>;
    } else {
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
}

export default Game;