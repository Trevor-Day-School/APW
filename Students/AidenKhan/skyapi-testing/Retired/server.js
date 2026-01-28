// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/callback', (req, res) => {
    console.log('OAuth callback received:', req.query);
    res.send('Callback received! You can close this page.');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
