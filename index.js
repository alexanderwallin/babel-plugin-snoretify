var path = require('path');

global.snoret = { count: 0 };

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
          if (global.snoret.count === 0) {
            console.log('\n\nSnöre:\n');
          }

          var filename = path.basename(state.file.opts.filename);

          var parts = [' /', '|', ' \\', '  \\', '   |', '  /'];
          var timestamp = Math.round(Date.now() / 1000);
          var index = timestamp % parts.length;
          var part = parts[global.snoret.count % parts.length];
          var output = part;

          if (filename.length >= 35) {
            output += '   ' + filename + ' (jättelångt filnamn)';
          }
          else if (/reducer\.js$/.test(filename) && Math.random() >= 0.6) {
            output += '   ' + filename.replace(/reducer\.js$/, 'rädisor.js');
          }
          else if (Math.random() >= 0.92) {
            output += '   ' + filename + ' - ' + importantMessages[Math.round(Math.random() * (importantMessages.length - 1))];
          }

          console.log(output);

          global.snoret.count += 1;
        }
      }
    }
  };
};
