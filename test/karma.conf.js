// Configuration for karma
module.exports = function(config) {
	var config_set_args = {};

	if (config.mode === "automasao") {
		config_set_args = {
			// logLevel: config.LOG_DEBUG,
			browserNoActivityTimeout: 60000,
			browserDisconnectTimeout: 10000,
			browsers: ["ChromeHeadless"],
			frameworks: ["mocha", "snapshot", "mocha-snapshot"],
			reporters: ["mocha"],
			preprocessors: {
				"**/__snapshots__/**/*.md": ["snapshot"],
				"__tests__/index.js": ["webpack", "sourcemap"],
				"__tests__/**/*.json": ["json"]
			},
			files: [
				"**/__snapshots__/**/*.md",
				"../Outputs/CanvasMasao.js",
				{
					pattern: "../Samples/*.gif",
					watched: false,
					included: false
				},
				"__tests__/**/*.masao.json",
				"__tests__/index.js"
			],
			client: {
				captureConsole: true,
				mocha: {
					timeout: 60000
				}
			},
			mochaReporter: {
				showDiff: !!process.env.DIFF
			},
			// setting for mocha-snapshot
			snapshot: {
				update: !!process.env.UPDATE,
				prune: !!process.env.PRUNE
			},
			// setting for karma-webpack
			webpack: {
				mode: "development"
			}
		};
	}

	// 独自テスト
	if (config.mode === "eb-jasmine") {
		console.log("eb - jasmine running...");
		config_set_args = {
			logLevel: config.LOG_DEBUG,
			frameworks: ["jasmine"],
			files: ["Sources/demoApp.js", "test/eb-jasmine/*Spec.js"]
		};
	}

	config.set(config_set_args);
	//console.log(config);
	//console.log(config.mode);
};
