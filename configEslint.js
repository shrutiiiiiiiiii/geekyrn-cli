const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;

const configEslint = projectName => {
  console.log('Configuring Eslint');

  const path = '/Users/shrutip/Sites/projects/' + projectName;

  const child = spawnSync('./node_modules/.bin/eslint', ['--init'], {
    cwd: path,
    stdio: 'inherit',
  });

  if (child.status === 0) {
    console.log(chalk.cyan('closing code: ' + child.status));
  } else {
    console.log(chalk.red('closing code: ' + child.status));
  }
};

module.exports = configEslint;
