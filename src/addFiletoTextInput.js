const copyTemplate = require('./copyTemplate');

const addFiletoTextInput = projectName => {
  console.log('Adding TextInput Component');
  const from = 'TextInput.tsx';
  const to =
    process.cwd() + '/' + projectName + '/src/Components/TextInput/index.tsx';

  copyTemplate(from, to);
};

module.exports = addFiletoTextInput;
