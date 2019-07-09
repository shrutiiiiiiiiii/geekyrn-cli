const chalk = require('chalk');
const exec = require('child_process').exec;
const addFilesToScreens = require('./addFilesToScreens');

const addScreens = projectName => {
  const command = 'mkdir Login & mkdir SignUp & mkdir Home';
  const path = process.cwd() + '/' + projectName + '/src/Screens';

  const child = exec(command, { cwd: path });

  console.log('Creating Screens');

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
      addFilesToScreens(projectName);
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = addScreens;
