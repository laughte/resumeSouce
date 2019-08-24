// Utilities
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const fs = require('fs');

// Gulp
const gulp = require('gulp');

// Gulp plugins
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const header = require('gulp-header');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const runSequence = require('run-sequence');

// Misc/global vars
const pkg = JSON.parse(fs.readFileSync('package.json'));
const activatedAnimations = activateAnimations();

// Task options
const opts = {
  destPath: './',
  concatName: 'animate.css',

  autoprefixer: {
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    cascade: false,
  },

  minRename: {
    suffix: '.min',
  },

  banner: [
    '@charset "UTF-8";\n',
    '/*!',
    ' * <%= name %> -<%= homepage %>',
    ' * Version - <%= version %>',
    ' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
    ' *',
    ' * Copyright (c) <%= new Date().getFullYear() %> <%= author.name %>',
    ' */\n\n',
  ].join('\n'),
};

// ----------------------------
// Gulp task definitions
// ----------------------------

gulp.task('createCSS', () => gulp
  .src(activatedAnimations)
  .pipe(concat(opts.concatName))
  .pipe(postcss([autoprefixer(opts.autoprefixer)]))
  .pipe(gulp.dest(opts.destPath))
  .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
  .pipe(rename(opts.minRename))
  .pipe(gulp.dest(opts.destPath)));

gulp.task('addHeader', () => gulp
  .src('*.css')
  .pipe(header(opts.banner, pkg))
  .pipe(gulp.dest(opts.destPath)));

gulp.task('default', gulp.series('createCSS', 'addHeader'));

// ----------------------------
// Helpers/functions
// ----------------------------

// Read the config file and return an array of the animations to be activated
function activateAnimations() {
  const categories = JSON.parse(fs.readFileSync('animate-config.json'));
  let category;
  let files;
  let file;
  const target = [];
  let count = 0;

  for (category in categories) {
    if (categories.hasOwnProperty(category)) {
      files = categories[category];

      for (file in files) {
        if (files[file]) {
          // marked as true
          target.push(`source/${category}/${file}.css`);
          count += 1;
        }
      }
    }
  }
  // prepend base CSS
  target.push('source/_base.css');

  if (!count) {
    gutil.log('No animations activated.');
  } else {
    gutil.log(`${count + (count > 1 ? ' animations' : ' animation')} activated.`);
  }

  return target;
}
