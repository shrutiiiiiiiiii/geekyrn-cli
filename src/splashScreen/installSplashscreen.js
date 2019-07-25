const chalk = require('chalk');
const exec = require('child_process').exec;
const linkSplashscreen = require('./linkSplashscreen');
const updateIndex = require('./updateIndex');

const installSplashscreen = () => {
  const command = 'npm i react-native-splash-screen --save';
  const path = process.cwd();

  const child = exec(command, { cwd: path });

  console.log('Installing React Native Splash Screen');

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
      linkSplashscreen();
      updateIndex();
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = installSplashscreen;
