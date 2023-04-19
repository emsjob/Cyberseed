import React /*, { useState, useEffect }*/ from 'react';
import './App.css';
import Prompt from './Prompt.js';
import Data from './Data.js';
import Terminal from './Terminal.js';
import Visuals from './Visuals.js';

const App = () => {
  /*
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data')
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log('Error: ', err));
  }, []);
  */

  return (
    <div className="App">
      <header className="App-header">
        <div className="grid-container">
          <Prompt className="prompt-item"/>
          <Data className="data-item"/> 
          <Terminal className="terminal-item"/>
          <Visuals className="visuals-item"/>
        </div>
      </header>
    </div>
  );
}

export default App;
