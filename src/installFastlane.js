const prompt = require('prompt');
const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;

const setUpFastlane = projectName => {
  console.log('Configuring Fastlane');

  const path = process.cwd() + '/' + projectName + '/ios';
  const child = spawnSync('fastlane', ['init'], {
    stdio: 'inherit',
    cwd: path,
  });

  if (child.status === 0) {
    console.log(chalk.cyan('closing code: ' + child.status));
  } else {
    console.log(chalk.red('closing code: ' + child.status));
  }
};

const installFastlane = projectName => {
  prompt.start();
  prompt.get(
    [
      {
        description: 'Do you want to install fastlane? (y/n)',
        name: 'fastlane',
      },
    ],
    function(err, result) {
      if (result.fastlane == 'y' || result.fastlane == 'yes') {
        setUpFastlane(projectName);
      }
    }
  );
};

module.exports = installFastlane;
