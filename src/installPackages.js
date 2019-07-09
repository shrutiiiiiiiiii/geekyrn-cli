const chalk = require('chalk');
const exec = require('child_process').exec;
const linkPackages = require('./linkPackages');
const installTypes = require('./installTypes');

const installPackages = projectName => {
  const packages = [
    'react-navigation',
    'react-native-gesture-handler',
    'formik',
    'mobx',
    'yup',
    'mobx-react',
    'mobx-state-tree',
    'react-native-keyboard-aware-scroll-view',
  ];

  const allPackages = packages.join(' ');

  const command = 'npm install --save ' + allPackages;
  const path = process.cwd() + '/' + projectName;

  const child = exec(command, { cwd: path });

  console.log('Installing Required Packages');

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
      linkPackages(projectName);
      installTypes(projectName);
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = installPackages;
