const copyTemplate = require('./copyTemplate');

const addEslintrc = projectName => {
  console.log('Adding eslintrc.json');

  const from = '.eslintrc.json';
  const to = process.cwd() + '/' + projectName + '/.eslintrc.json';

  copyTemplate(from, to);
};

module.exports = addEslintrc;
