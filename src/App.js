import './App.css';
import List from './components/List';
import Preview from './components/Preview';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
      <div className="App container-lg">
        <div className="container-lg">
          <Navbar />
        </div>
        <div className="row gap-5">
          <div className="col">
            <Preview selectedCard={selectedCard} />
          </div>
          <div className="col">
            <List setSelectedCard={setSelectedCard} />
          </div>
        </div>
      </div>
  );
}

export default App;