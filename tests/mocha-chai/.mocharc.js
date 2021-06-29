const path = require("path");

module.exports = {
	spec: './**/*.ts',
	require: [path.resolve('./ts-hook.js'), 'source-map-support/register'],
	reporter: 'Spec',
};