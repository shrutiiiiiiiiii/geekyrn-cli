const chalk = require('chalk');
const exec = require('child_process').exec;

const installTypes = projectName => {
  const types = ['@types/react-navigation'];
  const allTypes = types.join(' ');

  const command = 'npm install --save-dev ' + allTypes;
  const path = process.cwd() + '/' + projectName;

  const child = exec(command, { cwd: path });

  console.log('Installing Types');

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = installTypes;
