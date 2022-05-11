import SelectGrade from './grade2.js';
import KanjiMap from './quiz.js';

const Game = (meters="grade") => {
    let link = "";
    if (meters.meters ===" quiz") {
      link = <SelectGrade />;
    } else if (meters.meters === "home") {
      console.log("mg"+meters.grades+meters.meters);
      link = <KanjiMap  grades={`${meters.grades}`} />;
    }
    console.log(meters.meters);
    if (meters.meters === "quiz") {
      return (
        <>
        <h3>Quiz ME!!</h3>
        <KanjiMap grades="2" />
        </>
      );
    } else {
      return (
        <div className="App">
          <h1 id="kanjiTitle">Kanji Trainer</h1>
          <div className="Content">
            {link}
          </div>
          <header className="App-header">
          </header>
        </div>
      )
    }
}

export default Game;