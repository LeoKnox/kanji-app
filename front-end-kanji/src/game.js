import SelectGrade from './grade2.js';
import KanjiMap from './quiz.js';
import { useParams } from 'react-router-dom';

const Game = (meters) => {
    const id = useParams();
    console.log("ii" + id.id);
    let link = "";
    if (meters.meters ==="home") {
      link = <SelectGrade />;
    } else if (meters.meters === "quiz") {
      link = <KanjiMap  grades={`${id.id}`} />;
      //link = <KanjiMap  grades={`${meters.grades}`} />;
    }
    return (
      <div className="App">
        <h1 id="kanjiTitle">Kanji Trainer</h1>
          {link}
        <header className="App-header">
        </header>
      </div>
    )
  }

export default Game;