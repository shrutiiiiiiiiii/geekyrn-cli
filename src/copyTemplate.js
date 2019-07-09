const path = require('path');
const TEMPLATE_DIR = path.join(__dirname, '..', 'templates');
const MODE_0666 = parseInt('0666', 8);
const fs = require('fs');

function write(file, str, mode) {
  fs.writeFileSync(file, str, { mode: mode || MODE_0666 });
  console.log('   \x1b[36mcreate\x1b[0m : ' + file);
}

const copyTemplate = (from, to) => {
  write(to, fs.readFileSync(path.join(TEMPLATE_DIR, from), 'utf-8'));
};

module.exports = copyTemplate;
