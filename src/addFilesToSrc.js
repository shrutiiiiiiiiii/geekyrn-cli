const copyTemplate = require('./copyTemplate');

const addFilesToSrc = projectName => {
  console.log('Adding index and routes');
  var from = 'index.tsx';
  var to = process.cwd() + '/' + projectName + '/src/index.tsx';

  copyTemplate(from, to);

  from = 'routes.ts';
  to = process.cwd() + '/' + projectName + '/src/routes.ts';

  copyTemplate(from, to);

  console.log('Modifying App.tsx');

  from = 'App.tsx';
  to = process.cwd() + '/' + projectName + '/App.tsx';

  copyTemplate(from, to);
};

module.exports = addFilesToSrc;
