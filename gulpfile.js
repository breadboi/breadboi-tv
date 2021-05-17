var gulp = require('gulp');
var babel = require('gulp-babel');
const minify = require('gulp-minify');
var merge = require('merge-stream');
var glob = require('glob');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var path = require('path');

gulp.task("bundle", function () {
  var files = glob.sync('./src/jsx/*.jsx');
  return merge(files.map(function(file) {
    return browserify({
        entries: file,
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source(path.basename(file, '.jsx') + ".js"))
        .pipe(gulp.dest("public/js"))
  }));
});

/**
 * Convert jsx to js
 */
gulp.task('babel', function() {
    return gulp.src("src/jsx/*.jsx")
        .pipe(babel())
        .pipe(gulp.dest("src/react-js/"));
});

/**
 * Move views
 */
gulp.task('views', function() {
    return gulp.src("src/views/*")
        .pipe(gulp.dest("public/views"));
})

/**
 * Move css
 */
gulp.task('css', function() {
    return gulp.src("src/css/*")
        .pipe(gulp.dest("public/css"));
})

/**
 * Move assets
 */
gulp.task('assets', function() {
    return gulp.src("src/assets/*")
        .pipe(gulp.dest("public/assets"));
})

/**
 * Minify js files
 */
gulp.task('minify-js', function() {
    return gulp.src("public/js/*.js")
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest("public/js/min"))
});

/**
 * Build with all src minified
 */
gulp.task('build', gulp.series('bundle', 'minify-js', 'assets', 'css', 'views'));