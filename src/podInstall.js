const chalk = require('chalk');
const exec = require('child_process').exec;
const installFastlane = require('./installFastlane');

const podInstall = projectName => {
  const command = 'pod install';
  const path = process.cwd() + '/' + projectName + '/ios';

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
      installFastlane(projectName);
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = podInstall;
