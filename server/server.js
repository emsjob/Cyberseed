const express = require('express');
//const fetch = require()
const app = express();

app.get('/data', (req, res) => {
    const data = {
        prompt: 'Prompt from server',
        data: 'Data from server',
        terminal: 'Terminal from server',
        visuals: 'Visuals from server',
    }
    res.send(data);
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});