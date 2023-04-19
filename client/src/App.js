import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data')
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log('Error: ', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>{!data ? 'loading...' : data}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
