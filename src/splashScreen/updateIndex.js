const copyTemplate = require('../copyTemplate');

const updateIndex = () => {
  console.log('Adding index with Splash Screen');

  const from = 'indexWithSplashScreen.tsx';
  const to = process.cwd() + '/src/index.tsx';

  copyTemplate(from, to);
};

module.exports = updateIndex;
