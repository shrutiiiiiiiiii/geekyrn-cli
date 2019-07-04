const chalk = require('chalk');
const exec = require('child_process').exec;

const linkPackages = projectName => {
  const packages = ['react-native-gesture-handler'];
  const allPackages = packages.join(' ');

  const command = 'react-native link ' + allPackages;
  const path = process.cwd() + '/' + projectName;

  const child = exec(command, { cwd: path });

  console.log('Linking Installed Packages');

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

module.exports = linkPackages;
