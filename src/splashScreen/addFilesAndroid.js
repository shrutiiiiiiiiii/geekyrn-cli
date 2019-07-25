const copyImage = require('../copyImage');
const copyTemplate = require('../copyTemplate');

const addFilesAndroid = () => {
  var from = 'background_splash.xml';
  var to =
    process.cwd() + '/android/app/src/main/res/drawable/background_splash.xml';

  copyTemplate(from, to);

  from = 'launch_screen.xml';
  to = process.cwd() + '/android/app/src/main/res/layout/launch_screen.xml';

  copyTemplate(from, to);

  from = 'colors.xml';
  to = process.cwd() + '/android/app/src/main/res/values/colors.xml';

  copyTemplate(from, to);

  from = 'styles.xml';
  to = process.cwd() + '/android/app/src/main/res/values/styles.xml';

  copyTemplate(from, to);

  from = 'geekyantslogo.png';
  to =
    process.cwd() + '/android/app/src/main/res/mipmap-hdpi/geekyantslogo.png';
  copyImage(from, to);

  to =
    process.cwd() + '/android/app/src/main/res/mipmap-mdpi/geekyantslogo.png';
  copyImage(from, to);

  to =
    process.cwd() + '/android/app/src/main/res/mipmap-xhdpi/geekyantslogo.png';
  copyImage(from, to);

  to =
    process.cwd() + '/android/app/src/main/res/mipmap-xxhdpi/geekyantslogo.png';
  copyImage(from, to);

  to =
    process.cwd() +
    '/android/app/src/main/res/mipmap-xxxhdpi/geekyantslogo.png';
  copyImage(from, to);
};

module.exports = addFilesAndroid;
