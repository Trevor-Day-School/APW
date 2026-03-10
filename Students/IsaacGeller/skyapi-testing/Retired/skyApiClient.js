require("dotenv").config();
const fs = require("fs");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

class SkyApiClient {
  constructor() {
    this.clientId = process.env.CLIENT_ID;
    this.clientSecret = process.env.CLIENT_SECRET;
    this.refreshToken = process.env.REFRESH_TOKEN;
    this.subscriptionKey = process.env.SUBSCRIPTION_KEY;

    this.accessToken = null;
    this.accessTokenExpiresAt = 0;
  }

  // 🔥 Save new refresh token back to .env automatically
  updateEnvToken(newToken) {
    const env = fs.readFileSync(".env", "utf8").split("\n");
    const updated = env.map(line =>
      line.startsWith("REFRESH_TOKEN=") 
        ? `REFRESH_TOKEN=${newToken}` 
        : line
    ).join("\n");

    fs.writeFileSync(".env", updated);
    console.log("\n🟢 .env UPDATED — New refresh token stored securely.\n");
  }

  // 🔄 Refresh access token from SKY
  async refreshAccessToken() {
    const url = "https://oauth2.sky.blackbaud.com/token";
    const body = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: this.refreshToken,
      client_id: this.clientId,
      client_secret: this.clientSecret,
      preserve_refresh_token: "true"
    });

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    });

    const data = await res.json();
    if (!res.ok) throw new Error(`Token refresh failed: ${JSON.stringify(data)}`);

    this.accessToken = data.access_token;
    this.accessTokenExpiresAt = Date.now() + (data.expires_in * 1000);

    // 🆕 If API sends back a new refresh token, save it permanently
    if (data.refresh_token && data.refresh_token !== this.refreshToken) {
      console.log("🔁 Refresh token rotated — saving new token...");
      this.refreshToken = data.refresh_token;
      this.updateEnvToken(this.refreshToken);
    }

    console.log("🔑 Access token refreshed — valid for", data.expires_in, "seconds");
  }

  // Ensure valid token
  async getToken() {
    if (!this.accessToken || Date.now() > this.accessTokenExpiresAt - 60000) {
      await this.refreshAccessToken();
    }
    return this.accessToken;
  }

  // Generic request function
  async request(endpoint) {
    const token = await this.getToken();

    const res = await fetch(`https://api.sky.blackbaud.com${endpoint}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Bb-Api-Subscription-Key": this.subscriptionKey
      }
    });

    return { status: res.status, data: await res.json() };
  }

  // Example request
  async getAssignments(sectionId) {
    return this.request(`/school/v1/academics/sections/${sectionId}/assignments`);
  }

  async getSections() {
  return this.request(`/school/v1/academics/sections`);
}

async getMyUserRecord() {
  return this.request(`/school/v1/users/me`);
}


}

module.exports = new SkyApiClient();
