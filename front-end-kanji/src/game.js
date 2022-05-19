import SelectGrade from './grade2.js';
import KanjiMap from './quiz.js';
import Footer from './footer.js';
import { useParams } from 'react-router-dom';

const Game = (meters) => {
    const id = useParams();
    let link = "";
    let myError = "";
    if (meters.meters ==="home") {
      link = <SelectGrade />;
    } else if (meters.meters === "quiz") {
      link = <KanjiMap  grades={`${id.id}`} />;
    }
    if (meters.error) {
      myError = <h3 className="error">Please select at least one grade</h3>
    }
    return (
      <>
      <div className="App">
        <h1 id="kanjiTitle">Kanji Trainer</h1>
          {link}
          {myError}
        <header className="App-header">
        </header>
      </div>
      <Footer />
      </>
    )
  }

export default Game;