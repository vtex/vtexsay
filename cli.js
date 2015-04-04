#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var yosay = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(yosay(input, options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    vtexsay <string>',
      '    vtexsay <string> --maxLength 8',
      '    echo <string> | vtexsay',
      '',
      '  Example',
      '    vtexsay "Sindre is a horse"',
      vtexsay('Sindre is a horse')
    ].join('\n'));
  },
  version: pkg.version
});
