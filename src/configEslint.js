const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;
const addEslintrc = require('./addEslintrc');

const configEslint = projectName => {
  const path = process.cwd() + '/' + projectName;

  console.log('Configuring Eslint');

  const child = spawnSync('./node_modules/.bin/eslint', ['--init'], {
    cwd: path,
    stdio: 'inherit',
  });
  if (child.status === 0) {
    console.log(chalk.cyan('closing code: ' + child.status));
    addEslintrc(projectName);
  } else {
    console.log(chalk.red('closing code: ' + child.status));
  }
};

module.exports = configEslint;
