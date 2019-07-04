const chalk = require('chalk');
const exec = require('child_process').exec;
const configEslint = require('./configEslint');

const installEslint = projectName => {
  console.log('Installing Eslint in the Project Directory');

  const command = 'npm install eslint --save-dev';
  const path = '/Users/shrutip/Sites/projects/' + projectName;

  const child = exec(command, { cwd: path });

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
      configEslint(projectName);
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = installEslint;
