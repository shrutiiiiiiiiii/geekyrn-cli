const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;

const createProject = projectName => {
  console.log('Creating a React Native Project');
  const child = spawnSync(
    'npx',
    ['react-native', 'init', projectName, '--template', 'typescript', '--npm'],
    {
      stdio: 'inherit',
    }
  );

  if (child.status === 0) {
    console.log(chalk.cyan('closing code: ' + child.status));
  } else {
    console.log(chalk.red('closing code: ' + child.status));
  }
};

module.exports = createProject;
