// use CommonJS instead of ES modules
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// --- Replace these values ---
const SUBSCRIPTION_KEY = "824c9db5a8e749d78730e1db7624ec1e"; // Your Sky API subscription key
const ACCESS_TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjREVjZzVkxIM0FtU1JTbUZqMk04Wm5wWHU3WSIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbmlkIjoiYzg1ZTBkZjEtMWUxZi00YzFjLTg5ZjQtNGQ1MzczNzE3ZDE2IiwibW9kZSI6IkZ1bGwiLCJncmFudGF1dGhvcml0eSI6IkNvbm5lY3Rpb24iLCJlbnZpcm9ubWVudG5hbWUiOiJTS1kgRGV2ZWxvcGVyIENvaG9ydCBFbnZpcm9ubWVudCAxIiwiZW52aXJvbm1lbnRpZCI6InAtdm5WQWJEdGZ1MEd5TXFTRG1HLV9xdyIsImxlZ2FsZW50aXR5aWQiOiJwLWdWcXJfeU9Ta1Vxc0VLdG0tWnBKbkEiLCJsZWdhbGVudGl0eW5hbWUiOiJTS1kgRGV2ZWxvcGVyIENvaG9ydCIsInpvbmUiOiJwLXVzYTAxIiwibmFtZWlkIjoiYzY5ZGRiZjMtN2RhOS00YjdkLWI0ZWYtMTAxNDNiOWY3NmY0IiwianRpIjoiMmIwYjVjMjMtNzc3NS00OTllLTk0NWEtNjNlMjAyZGM5ZjRmIiwiZXhwIjoxNzYyMzU2MDczLCJpYXQiOjE3NjIzNTI0NzMsImlzcyI6Imh0dHBzOi8vb2F1dGgyLnNreS5ibGFja2JhdWQuY29tLyIsImF1ZCI6ImJsYWNrYmF1ZCJ9.gVP8s_-mt71c3XXp8rsyInSttBpUgqnqxoWCMz2XorKnEI-ZkV1W3v9_4ETILlOkQQzc4sBVhuttdNP98EcjSQDbcXsiPTba6pH9WVDHWbHBCpbFSp-7s1RYsKsxG-DghIdlg9AwG4F4JWKzaA-Ak_vVDV_Nw4SXPS7EcCIeYIl4y1uMPS-UkKEg3DA721mrebMXmJKnsOvgAWqAO-Gf14avWCsa8VEvJdt11J-2uhNLSyMFzB0b3MrLwxN5Y9ePpzvpweNvbMXFzSTNs7b5cbLvpak1P4wkyVSP27jBVSBsN2F4EkiiLu44zMltKpjrWVS4VVoJVoPCiCr3bQCu9w";   // You’ll get this via OAuth later
//Current Refresh_Token: "48463218a6184080b67b202dac476cfa"
const SECTION_ID = 12345;                   // Replace with a real section ID if available

const url = `https://api.sky.blackbaud.com/school/v1/academics/sections/${SECTION_ID}/assignments`;

const headers = {
  "Bb-Api-Subscription-Key": SUBSCRIPTION_KEY,  // <-- header name stays constant
  "Authorization": `Bearer ${ACCESS_TOKEN}`,    // <-- header name is Authorization
  "Cache-Control": "no-cache"
};

async function getAssignments() {
  try {
    const response = await fetch(url, { headers });
    console.log("Status:", response.status);
    
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

getAssignments();
