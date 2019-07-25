const fs = require('fs');
const path = require('path');
const TEMPLATE_DIR = path.join(__dirname, '..', 'templates');

const copyImage = (from, toPath) => {
  const fromPath = path.join(TEMPLATE_DIR, from);
  const inStr = fs.createReadStream(fromPath);
  const outStr = fs.createWriteStream(toPath);

  inStr.pipe(outStr);
};

module.exports = copyImage;
