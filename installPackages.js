const chalk = require('chalk');
const exec = require('child_process').exec;

const installPackages = projectName => {
  const command =
    'npm install --save react-navigation react-native-gesture-handler';
  const path = '/Users/shrutip/Sites/projects/' + projectName;

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

module.exports = installPackages;
