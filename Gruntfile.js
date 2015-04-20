/*
 * grunt-phpmin
 * git://github.com/swordf1zh/grunt-phpmin
 *
 * Copyright (c) 2015 Ricardo Tribaldos
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    phpmin: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': 'test/fixtures/index.php'
        }
      },
      singleline: {
        options: {
          singleline: true,
          multiline: false,
          tabs: false,
          newline: false
        },
        files: {
          'tmp/singleline': 'test/fixtures/index.php'
        }
      },
      multiline: {
        options: {
          singleline: false,
          multiline: true,
          tabs: false,
          newline: false
        },
        files: {
          'tmp/multiline': 'test/fixtures/index.php'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'phpmin', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
