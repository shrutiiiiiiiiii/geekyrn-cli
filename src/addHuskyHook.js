const fs = require('fs');

const addHuskyHook = projectName => {
  const path = process.cwd() + '/' + projectName + '/package.json';
  const file = fs.readFileSync(path);

  const object = JSON.parse(file);

  const updatedObject = {
    ...object,
    husky: {
      hooks: {
        'pre-commit': 'npm test',
        'pre-push': 'npm test',
        '...': '...',
      },
    },
  };

  const updatedFile = JSON.stringify(updatedObject, null, '\t');

  fs.writeFileSync(path, updatedFile, 'utf-8');

  console.log('Husky Hook Added');
};

module.exports = addHuskyHook;
