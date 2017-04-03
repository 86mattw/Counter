
const gulp =        require('gulp');
const webpack =     require('webpack');
const gutil =       require('gulp-util');
const clean =       require('gulp-clean');

const webpackConfig = require('./webpack.config.js');

/**
 * Clean the dist folder.
 */
gulp.task('clean-dist', () => {
  return gulp.src('dist', { read: false })
    .pipe(clean());
});

/**
 * Transpile JS with Webpack and Babel.
 */
gulp.task('webpack', ['clean-dist'], (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if(err) throw new gutil.PluginError('webpack', err);

    gutil.log('[webpack]', stats.toString());

    callback();
  });
});

/**
 * Listen for changes to JS source files.
 */
gulp.task('watch', () => {
  gulp.watch('js/**/*.js', ['webpack']);
});

/**
 * Default task.
 */
gulp.task('default', ['webpack']);