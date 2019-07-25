const chalk = require('chalk');
const exec = require('child_process').exec;

const podInstall = () => {
  const command = 'pod install';
  const path = process.cwd() + '/ios';

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
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = podInstall;
