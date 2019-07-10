const chalk = require('chalk');
const exec = require('child_process').exec;
const addHuskyHook = require('./addHuskyHook');

const installDevPackages = projectName => {
  const packages = [
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-config-prettier',
    'eslint-plugin-import',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'eslint-plugin-react-native',
    'prettier',
    'husky',
  ];

  const allPackages = packages.join(' ');

  const command = 'npm install --save-dev ' + allPackages;
  const path = process.cwd() + '/' + projectName;

  const child = exec(command, { cwd: path });

  console.log('Installing Required Dev Packages');

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
      addHuskyHook(projectName);
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = installDevPackages;
