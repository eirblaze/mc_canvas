// Configuration for karma
module.exports = function(config) {
	var cfg_arg = {
		logLevel: config.LOG_DEBUG,
		frameworks: ["jasmine"],
		basePath: "../..",
		files: ["Sources/demoApp.js", "test/eb-jasmine/*Spec.js"]
	};

	return config.set(cfg_arg);
};
