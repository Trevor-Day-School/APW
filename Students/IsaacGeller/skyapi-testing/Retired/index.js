// use CommonJS instead of ES modules
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// --- Replace these values ---
const SUBSCRIPTION_KEY = process.env.SUBSCRIPTION_KEY; // Your Sky API subscription key
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;   // You’ll get this via OAuth later
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
