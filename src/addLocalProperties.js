const fs = require('fs');
const os = require('os');

const addLocalProperties = projectName => {
  console.log('adding local.properties file');

  const user = os.userInfo().username;
  const path = process.cwd() + '/' + projectName + '/android/local.properties';

  const content = 'sdk.dir = /Users/' + user + '/Library/Android/sdk';

  fs.writeFileSync(path, content, 'utf-8');
};

module.exports = addLocalProperties;
