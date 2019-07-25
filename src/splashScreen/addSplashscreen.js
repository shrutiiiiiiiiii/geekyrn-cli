const fs = require('fs');
const path = require('path');
const TEMPLATE_DIR = path.join(__dirname, '../..', 'templates');
const installSplashscreen = require('./installSplashscreen');

const addSplashscreen = fromPath => {
  const toPath = path.join(TEMPLATE_DIR, 'geekyantslogo.png');

  const inStr = fs.createReadStream(fromPath);
  const outStr = fs.createWriteStream(toPath);

  inStr.pipe(outStr);

  installSplashscreen();
};

module.exports = addSplashscreen;
