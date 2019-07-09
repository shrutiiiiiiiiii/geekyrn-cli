const copyTemplate = require('./copyTemplate');

const addPrettierrc = projectName => {
  console.log('Adding prettierrc.js');

  const from = '.prettierrc.js';
  const to = process.cwd() + '/' + projectName + '/.prettierrc.js';

  copyTemplate(from, to);
};

module.exports = addPrettierrc;
