const express = require("express");

module.exports = function ({ resources, options }) {
	const app = express.Router();

	app.get("/", async (req, res) => {
		res.redirect("/test/integration/opaTests.qunit.html");
	});

	return app;
};
