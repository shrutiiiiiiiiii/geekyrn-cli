const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;

const addEslintrc = projectName => {
  const inputFile =
    'https://gist.githubusercontent.com/shrutiiiiiiiiii/a7191bbfc6e3ba65be2a7fc0a50368bb/raw/bd63e528c1c8213702bd22b908d9b3bb1662fead/.eslintrc.json';
  const outputFile = '.eslintrc.json';
  const path = process.cwd() + '/' + projectName;

  console.log('Downloading eslintrc.json');

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

module.exports = addEslintrc;
