const { devices } = require("@playwright/test");
require("dotenv").config();

module.exports = {
  use: {
    headless: true, // Run browser in headless mode for performance
    viewport: { width: 1280, height: 720 }, // Default viewport size
    video: "off", // Never record videos
    screenshot: "off", // Never captures screen shot
    trace: "retain-on-failure", // Keep trace for debugging on failure
    locale: "en-US", // Set default locale
    ignoreHTTPSErrors: true, // Ignore HTTPS errors 
  },
  timeout: 100000,
  testDir: "./tests",
  reporter: [["html", { outputFolder: "tests/test-results" }]], // Generate HTML reports
  outputDir: "tests/test-results",
};
