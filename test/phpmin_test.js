'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.phpmin = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'Removing single and multiline comments and then tabs and newlines to put everything in a single line');

    test.done();
  },
  singleline: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/singleline');
    var expected = grunt.file.read('test/expected/singleline');
    test.equal(actual, expected, 'Removing single line comments only.');

    test.done();
  },
  multiline: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multiline');
    var expected = grunt.file.read('test/expected/multiline');
    test.equal(actual, expected, 'Removing multi line comments only.');

    test.done();
  }
};
