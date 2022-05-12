import SelectGrade from './grade2.js';
import KanjiMap from './quiz.js';

const Game = (meters) => {
    let link = "";
    if (meters.meters ==="home") {
      link = <SelectGrade />;
    } else if (meters.meters === "quiz") {
      console.log("m"+JSON.stringify(meters));
      console.log("mg"+meters.grades+meters.meters);
      link = <KanjiMap  grades={`${meters.grades}`} />;
    }
    console.log(meters.meters);
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

export default Game;