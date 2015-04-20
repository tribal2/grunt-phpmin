/*
 * grunt-phpmin
 * git://github.com/swordf1zh/grunt-phpmin
 *
 * Copyright (c) 2015 Ricardo Tribaldos
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function( grunt ) {

  var path = require('path');
  var fs = require('fs');

  grunt.registerMultiTask('phpmin', 'Minimize PHP files removing comments, tabs and newlines', function() {

    var trailingWhiteSpace = /[ \t]+$/gm,
         singleLineComment = /([^:]\/\/|#)[^\n\r]*[\n\r]/g,
          multilineComment = /\/\*\*?[^!][.\s\t\S\n\r]*?\*\//gm,
              tabsOrSpaces = /([ \t]{2,}|\t+)/g,
                   newLine = /\r?\n|\r/g;

    var options = this.options({
                    singleline: true,
                     multiline: true,
                          tabs: true,
                       newline: true
                  });

    var dest,
        isExpandedPair,
        tally = {
          dirs: 0,
          files: 0
        };

    // Iterate over all specified file groups.
    this.files.forEach( function( filePair ) {

      isExpandedPair = filePair.orig.expand || false;

      filePair.src.forEach(function(src) {
        if (detectDestType(filePair.dest) === 'directory') {
          dest = (isExpandedPair) ? filePair.dest : unixifyPath(path.join(filePair.dest, src));
        } else {
          dest = filePair.dest;
        }

        if (grunt.file.isDir(src)) {
          grunt.verbose.writeln('Creating ' + dest.cyan);
          grunt.file.mkdir(dest);
          tally.dirs++;
        } else {
          grunt.verbose.writeln('Processing ' + src.cyan + ' -> ' + dest.cyan);

          var contents = grunt.file.read( src );

          // Make replacements according to options
          if ( options.multiline  ) { contents = contents.replace( multilineComment,  ''  ); }
          if ( options.singleline ) { contents = contents.replace( singleLineComment, ''  ); }
          if ( options.newline    ) { contents = contents.replace( newLine,           ' ' ); }
          if ( options.tabs       ) { contents = contents.replace( tabsOrSpaces,      ' ' ); }

          // We will always remove trailing whitespace
          contents = contents.replace( trailingWhiteSpace, '' );

          // Write file and print a success message.
          grunt.file.write(dest, contents);
          grunt.verbose.writeln('File "' + dest.cyan + '" proccessed.');
          tally.files++;
        }
      });

      if (tally.dirs) {
        grunt.log.write('Created ' + tally.dirs.toString().cyan + ' directories');
      }

      if (tally.files) {
        grunt.log.write( ( tally.dirs ? ', proccessed ' : 'Proccessed ' ) + tally.files.toString().cyan + ' files');
      }

      grunt.log.writeln();

    });
  });

  var detectDestType = function(dest) {
    if (grunt.util._.endsWith(dest, '/')) {
      return 'directory';
    } else {
      return 'file';
    }
  };

  var unixifyPath = function(filepath) {
    return filepath.replace(/\\/g, '/');
  };

};
