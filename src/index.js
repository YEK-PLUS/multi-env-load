const fs = require('fs');
const dotenv = require('dotenv');

const main = (config) => {
  if (!config || typeof config !== 'object') throw new Error('Please set a valid config variable');
  if (!config.paths) throw new Error('Please set a paths variable');
  config.paths.map((path) => {
    const buffer = fs.readFileSync(path);
    const env = dotenv.parse(buffer);
    Object.entries(env).map(([key, value]) => {
      process.env[key] = value;
      return true;
    });
    return true;
  });
};

module.exports = main;
