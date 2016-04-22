var path = require('path');

module.exports = function(babel) {
  var importantMessages = [
    'Oj oj',
    'Snöret',
    'Blev det rätt det här?',
    'Det här kan vi göra ett CLI av!',
    'Hm. Vad skulle Hürrah gjort?',
    'Det här känns automatiserat',
    '<-- dålig fil',
    'https://angularjs.org/',
    'Data',
    'Uploading file to svenskalag.se...',
    'Att transpilera eller inte transpilera',
    'Hej',
    'Johan vann pingisen'
  ];

  return {
    visitor: {
      Program: {
        exit(node, state) {
          var filename = path.basename(state.file.opts.filename);

          if (filename.length >= 35) {
            console.log(filename + ' (jättelångt filnamn)');
          }
          else if (/reducer\.js$/.test(filename) && Math.random() >= 0.6) {
            console.log(filename.replace(/reducer\.js$/, 'rädisor.js'));
          }
          else if (Math.random() >= 0.92) {
            console.log(filename + '   ' + importantMessages[Math.round(Math.random() * (importantMessages.length - 1))]);
          }
        }
      }
    }
  };
};
