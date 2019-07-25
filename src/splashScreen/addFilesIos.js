const copyTemplate = require('../copyTemplate');
const copyImage = require('../copyImage');

const addFilesIos = path => {
  var from = 'geekyantslogo.png';
  var to = path + '/Images.xcassets/SplashScreen.imageset/Image.png';
  copyImage(from, to);

  to = path + '/Images.xcassets/SplashScreen.imageset/Image@2x.png';
  copyImage(from, to);

  to = path + '/Images.xcassets/SplashScreen.imageset/Image@3x.png';
  copyImage(from, to);

  from = 'Contents.json';
  to = path + '/Images.xcassets/SplashScreen.imageset/Contents.json';
  copyTemplate(from, to);

  from = 'LaunchScreen.xib';
  to = path + '/Base.lproj/LaunchScreen.xib';
  copyTemplate(from, to);
};

module.exports = addFilesIos;
