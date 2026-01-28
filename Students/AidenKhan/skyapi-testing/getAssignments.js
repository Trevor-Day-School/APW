const sky = require("./skyApiClient");

// Change this to the section you want to test
const SECTION_ID = 4300;

(async () => {
  try {
    console.log("\n📡 Requesting assignments from SKY API...\n");

    const res = await sky.getAssignments(SECTION_ID);

    console.log("HTTP Status:", res.status);
    console.log("\n📄 Response Data:\n");
    console.log(JSON.stringify(res.data, null, 2));

    console.log("\n✔ Request complete.\n");
  } catch (err) {
    console.error("\n❌ API Request Failed:\n", err.message, "\n");
  }
})();
