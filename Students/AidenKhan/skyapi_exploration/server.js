// This is a small web server that listens on your computer at port 3000.
// It's waiting for a message from the Sky API after you log in (the OAuth callback).
// When the message arrives, it prints the info in the console and tells the browser "Callback received!".

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