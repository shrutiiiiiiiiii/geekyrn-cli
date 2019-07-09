const copyTemplate = require('./copyTemplate');

const addFiletoText = projectName => {
  console.log('Adding Text Component');
  const from = 'Text.tsx';
  const to =
    process.cwd() + '/' + projectName + '/src/Components/Text/index.tsx';

  copyTemplate(from, to);
};

module.exports = addFiletoText;
