const chalk = require('chalk');
const exec = require('child_process').exec;
const addFolders = require('./addFolders');
const addFilesToSrc = require('./addFilesToSrc');

const addSrc = projectName => {
  const command = 'mkdir src';
  const path = process.cwd() + '/' + projectName;

  const child = exec(command, { cwd: path });

  console.log('Making src folder');

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
      addFolders(projectName);
      addFilesToSrc(projectName);
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = addSrc;
