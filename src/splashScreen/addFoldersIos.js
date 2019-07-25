const chalk = require('chalk');
const exec = require('child_process').exec;
const addFilesIos = require('./addFilesIos');

const addFoldersAndroid = () => {
  const command = 'mkdir SplashScreen.imageset';
  const temp = process.cwd().split('/');
  const dir = temp[temp.length - 1];
  const path = process.cwd() + '/ios/' + dir + '/Images.xcassets';
  const pathToSend = process.cwd() + '/ios/' + dir;

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
      addFilesIos(pathToSend);
    } else if (code === 1) {
      console.log(chalk.red('closing code: ' + code));
      addFilesIos(pathToSend);
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = addFoldersAndroid;
