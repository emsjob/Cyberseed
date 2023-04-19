const express = require('express');
//const fetch = require()
const app = express();

app.get('/data', (req, res) => {
    const data = { message: 'Hello from the server' }
    res.send(data);
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});