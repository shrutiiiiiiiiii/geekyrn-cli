const chalk = require('chalk');
const exec = require('child_process').exec;

const updateMainActivity = require('./updateMainActivity');
const updateAppDelegate = require('./updateAppDelegate');
const addFoldersAndroid = require('./addFoldersAndroid');
const addFoldersIos = require('./addFoldersIos');

const linkSplashscreen = () => {
  const command = 'react-native link react-native-splash-screen';
  const path = process.cwd();

  const child = exec(command, { cwd: path });

  console.log('Linking React Native Splash Screen');

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
      updateMainActivity();
      updateAppDelegate();
      addFoldersAndroid();
      addFoldersIos();
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = linkSplashscreen;
