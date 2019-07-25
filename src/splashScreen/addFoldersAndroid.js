const chalk = require('chalk');
const exec = require('child_process').exec;
const addFilesAndroid = require('./addFilesAndroid');

const addFoldersAndroid = () => {
  const command = 'mkdir drawable & mkdir layout';
  const path = process.cwd() + '/android/app/src/main/res';

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
      addFilesAndroid();
    } else if (code === 1) {
      console.log(chalk.red('closing code: ' + code));
      addFilesAndroid();
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = addFoldersAndroid;
