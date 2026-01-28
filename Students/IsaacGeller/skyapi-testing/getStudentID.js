const sky = require("./skyApiClient");

(async () => {
  console.log("\n📡 Fetching your SKY user account data...\n");

  try {
    const res = await sky.getMyUserRecord();

    console.log("HTTP Status:", res.status);
    console.log("\n📄 Raw Data:\n", JSON.stringify(res.data, null, 2), "\n");

    const userId = res.data?.id;
    const studentId = res.data?.student_id || res.data?.student?.id;

    console.log("🔍 USER ID:", userId || "❓ Not found");
    console.log("🎒 STUDENT ID:", studentId || "❓ Not found");

    console.log("\n✔ If STUDENT ID shows, you can now fetch your enrolled sections.\n");
  } catch (error) {
    console.error("\n❌ Failed to get user data:", error.message, "\n");
  }
})();
