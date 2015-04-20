# grunt-phpmin

> Simple grunt plugin to minimize PHP files removing comments, tabs and newlines.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-phpmin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-phpmin');
```

## The "phpmin" task

### Overview
In your project's Gruntfile, add a section named `phpmin` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  phpmin: {
    options: {
          singleline: true,
          multiline: true,
          tabs: true,
          newline: true
    },
    your_target: {
      // Target-specific file lists.
    },
  },
})
```

### Options

#### options.singleline
Type: `Boolean`
Default value: `true`

Determines whether or not to remove single line comments

#### options.multiline
Type: `Boolean`
Default value: `true`

Determines whether or not to remove multi line comments

#### options.tabs
Type: `Boolean`
Default value: `true`

Determines whether or not to replace tabs (includes 2 or more spaces) by a single space.

#### options.newline
Type: `Boolean`
Default value: `true`

Determines whether or not to replace new lines by a single space.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  phpmin: {
    options: {},
    files: {
      'dest': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v0.0.1 - alpha release

## License
Copyright (c) 2015 Ricardo Tribaldos. Licensed under the MIT license.
