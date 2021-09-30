'use strict';

// let's import the default configuration
const defaults = require("./default.js");
const configEnv = process.env.MODE || "development"
const configPath = `./${configEnv}.js`

// import a config module based on the constructed path
const config = require(configPath);

// merge the imported config with the defaults
// to form the final config
module.exports = Object.assign({}, defaults, config);