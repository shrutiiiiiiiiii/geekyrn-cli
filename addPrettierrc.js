const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;

const addPrettierrc = projectName => {
  const inputFile =
    'https://gist.githubusercontent.com/shrutiiiiiiiiii/f16a0354f46d050ae1aafb3b7789ac42/raw/f14bb08b6ca57d2060cc0e77c2d554fc55f641a7/.prettierrc.js';
  const outputFile = '.prettierrc.js';
  const path = process.cwd() + '/' + projectName;

  console.log('Downloading prettierrc.js');

  const child = spawnSync('curl', ['-o', outputFile, '-L', inputFile], {
    cwd: path,
    stdio: 'inherit',
  });

  if (child.status === 0) {
    console.log(chalk.cyan('closing code: ' + child.status));
  } else {
    console.log(chalk.red('closing code: ' + child.status));
  }
};

module.exports = addPrettierrc;
