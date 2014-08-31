'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var hint = require('gulp-jshint');
var handlebars = require('gulp-compile-handlebars');
var hbsfy = require('hbsfy');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var jshintOpts = require('./jshint');
var gulp = require('gulp');
var sass = require('gulp-sass')

// Utility functions for build e.g. logging and error handling
var utils = {
  error: function(e) {
    console.log(e);
  },
  end: function() {
    console.log('Compiled!');
  }
};

// Compile the main index.hbs > index.html for handlebars
var compileHandlebars = function() {
  gulp.src('./src/index.hbs')
    .pipe(handlebars())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
};

// Use browserify to compile the javascript and any handlebars templates that are required in the application js
var compileScripts = function() {
  var file = './src/js/index.js';
  var opts = {
    extensions: ['.hbs', '.json']
  };
  var stream = browserify(file, opts)
    .transform(hbsfy)
    .bundle()
    .pipe(source('index.js'))
    .on('error', utils.error)
    .on('end', utils.end);

  // When the build finishes, reload connect livereload
  stream.pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
};


var compileSass = function() {
  gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
};

// A task to run jshint on the source js files
gulp.task('hint', function() {
  return gulp.src('./src/**/*.js')
    .pipe(hint(jshintOpts))
    .pipe(hint.reporter('default'));
});

// A separate task to compile the index.hbs to index.html
gulp.task('handle', function() {
  compileHandlebars();
});

gulp.task('sass', function() {
  compileSass();
});
// Compile the scripts and index.html
gulp.task('build', function() {
  compileHandlebars();
  compileScripts();
	compileSass();
});

// Run the server and have livereload
gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true,
    port: 8888
  });
});


gulp.task('watch', function() {
  var watcher = gulp.watch('./src/**/*', ['hint', 'build', 'handle']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type +
      ', running tasks...');
  });
});

gulp.task('default', ['hint', 'build', 'handle', 'watch', 'connect']);
