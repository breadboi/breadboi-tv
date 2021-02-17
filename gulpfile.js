var gulp = require('gulp');
var babel = require('gulp-babel');
const minify = require('gulp-minify');

/**
 * Convert jsx to js
 */
gulp.task('babel', function() {
    return gulp.src("src/jsx/*.jsx")
        .pipe(babel())
        .pipe(gulp.dest("src/react-js/"));
});

/**
 * Move moment js scripts
 */
gulp.task('moment', function() {
    return gulp.src("node_modules/moment/min/moment.min.js")
        .pipe(gulp.dest("public/vendor/"));
});

/**
 * Move moment timezone scripts
 */
gulp.task('moment-tz', function() {
    return gulp.src("node_modules/moment-timezone/moment-timezone.js")
        .pipe(gulp.dest("public/vendor/"));
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
 * Minify react js files
 */
gulp.task('minify-react', function() {
    return gulp.src("src/react-js/*.js")
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest("public/js/"))
});

/**
 * Minify js files
 */
gulp.task('minify-js', function() {
    return gulp.src("src/js/*.js")
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest("public/js/"))
});

/**
 * Minify all js and react-js
 */
gulp.task("minify-all", gulp.series('minify-react', 'minify-js'));

/**
 * Copy regular js to public
 */
gulp.task('copy-js', function() {
    return gulp.src("src/js/*.js")
        .pipe(gulp.dest("public/js/"));
});

/**
 * Build with all src unminified
 */
gulp.task('build-debug', gulp.series('babel', 'copy-js', 'moment', 'moment-tz'));

/**
 * Build with all src minified
 */
gulp.task('build-release', gulp.series('babel', 'minify-all', 'moment', 'moment-tz', 'assets', 'css', 'views'));