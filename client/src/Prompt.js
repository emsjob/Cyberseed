import React, { useState, useEffect } from 'react';

const Prompt = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data')
      .then((res) => res.json())
      .then((data) => setData(data.prompt))
      .catch((err) => console.log('Error: ', err));
  }, []);

  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default Prompt;