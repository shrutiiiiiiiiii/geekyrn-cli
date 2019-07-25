const copyTemplate = require('./copyTemplate');

const addFiletoText = projectName => {
  console.log('Adding Style Guide');
  const from = 'style-guide.ts';
  const to = process.cwd() + '/' + projectName + '/src/Utils/style-guide.ts';

  copyTemplate(from, to);
};

module.exports = addFiletoText;
