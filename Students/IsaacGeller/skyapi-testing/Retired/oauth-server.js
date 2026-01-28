// oauth-server.js (CommonJS version)
const express = require('express');
const app = express();
const PORT = 3000;

// Replace these with your app info
const CLIENT_ID = 'c85e0df1-1e1f-4c1c-89f4-4d5373717d16';
const REDIRECT_URI = 'http://localhost:3000/callback';
const SCOPES = 'your_scope_here';

// Build authorization URL
const authURL = `https://oauth2.sky.blackbaud.com/authorization?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent(SCOPES)}`;

console.log('Open this URL in your browser to authorize:');
console.log(authURL);

// Handle OAuth callback
app.get('/callback', (req, res) => {
    const { code, error, error_description } = req.query;

    if (code) {
        console.log('✅ Authorization code received:', code);
        res.send('Authorization code received! Check your terminal.');
    } else if (error) {
        console.error('❌ OAuth error:', error, error_description);
        res.send(`OAuth error: ${error}. Check your terminal.`);
    } else {
        res.send('No code received.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
