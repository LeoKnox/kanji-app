import SelectGrade from './grade2.js';
import KanjiMap from './quiz.js';
import Footer from './footer.js';
import { useParams } from 'react-router-dom';

const Game = (meters) => {
    const id = useParams();
    let link = "";
    if (meters.meters ==="home") {
      link = <SelectGrade />;
    } else if (meters.meters === "quiz") {
      link = <KanjiMap  grades={`${id.id}`} />;
    }
    return (
      <>
      <div className="App">
        <h1 id="kanjiTitle">Kanji Trainer</h1>
          {link}
        <header className="App-header">
        </header>
      </div>
      <Footer />
      </>
    )
  }

export default Game;