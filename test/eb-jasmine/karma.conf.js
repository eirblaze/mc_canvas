// Configuration for karma
module.exports = function(config) {
	config.set({
		logLevel: config.LOG_DEBUG,
		frameworks: ["jasmine"],
		basePath: "../..",
		files: ["Sources/demoApp.js", "test/eb-jasmine/*Spec.js"]
	});
};
