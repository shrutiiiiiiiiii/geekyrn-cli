const copyTemplate = require('./copyTemplate');

const addFilesToScreens = projectName => {
  console.log('Adding Files to Screens');
  var from = 'Login.tsx';
  var to = process.cwd() + '/' + projectName + '/src/Screens/Login/index.tsx';

  copyTemplate(from, to);

  from = 'SignUp.tsx';
  var to = process.cwd() + '/' + projectName + '/src/Screens/SignUp/index.tsx';

  copyTemplate(from, to);

  from = 'Home.tsx';
  var to = process.cwd() + '/' + projectName + '/src/Screens/Home/index.tsx';

  copyTemplate(from, to);
};

module.exports = addFilesToScreens;
