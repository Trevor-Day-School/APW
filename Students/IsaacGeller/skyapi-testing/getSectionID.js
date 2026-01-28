const sky = require("./skyApiClient");

(async () => {
  console.log("\n📡 Fetching all sections...\n");

  try {
    const res = await sky.getSections();

    console.log("HTTP Status:", res.status);
    console.log("\n📄 Sections:\n");

    // Print section names with their IDs for easy reference
    res.data.value.forEach(sec => {
      console.log(`📘 ${sec.name}  →  ID: ${sec.id}`);
    });

    console.log("\n✔ Done.\n");
  } catch (error) {
    console.error("\n❌ API Request Failed:", error.message, "\n");
  }
})();
