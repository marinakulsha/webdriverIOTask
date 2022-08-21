const allure = require("allure-commandline");
exports.config = {
  specs: [
    "./tests/specs/*.js"
  ],
  exclude: [],
  suites: {
    smoke: [
      "./tests/specs/**/smartFrame1.js",
      "./tests/specs/**/smartFrame2.js"
    ]
  },
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: "chrome",
    acceptInsecureCerts: true
  }],
  logLevel: "info",
  bail: 0,
  baseUrl: "https://smartitnow.blogspot.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  reporters: [["allure", {
    outputDir: "allure-results",
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false
  }]],
  onComplete: function() {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(
        () => reject(reportError),
        5000);

      generation.on("exit", function(exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }
        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },
  mochaOpts: {
    ui: "bdd",
    timeout: 60000
  }
};
