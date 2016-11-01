var gulp = require('gulp');
//var concat = require('gulp-concat'); // Concatenate files together
//var sourcemaps = require('gulp-sourcemaps'); // Creates sourcemaps (.map) for minified files
var uglify = require('gulp-uglify'); // Minify JS files
var htmlmin = require('gulp-htmlmin'); // Minify HTML files
var cleancss = require('gulp-clean-css'); // Minify/Cleanup CSS files
var pump = require('pump'); // Passes errors correctly through uglify
var changed = require('gulp-changed'); // Only passes through changed files

// File path definition
var paths = {
    src : {
        html : ['src/*.html'],
        scripts: ['src/js/**.js'],
        styles: ['src/css/**.css'],
        images: ['src/images/**/**.*']
    },
    dist : {
        html : 'dist',
        scripts : 'dist/js',
        styles : 'dist/css',
        images : 'dist/images'
    }
};

var buildtasks = ['javascript','html','css','images'];

// Default task code
gulp.task('default', function() {
    // do nothing for now
});

// Runs all build tasks async
gulp.task('build', buildtasks);

// Prepare Javascript files for distribution
gulp.task('javascript', function(cb) {
    pump([
        gulp.src(paths.src.scripts), // TODO: Exclude already minified files
        changed(paths.dist.scripts),
        uglify(),
        gulp.dest(paths.dist.scripts)
    ],
    cb
    );
});

// Prepare CSS files for disribution
gulp.task('css', function(){
    gulp.src(paths.src.styles)
        .pipe(changed(paths.dist.styles))
        .pipe(cleancss())
        .pipe(gulp.dest(paths.dist.styles))
});


// Prepare HTML files for distribution
gulp.task('html', function(){
   gulp.src(paths.src.html)
       .pipe(changed(paths.dist.html))
       .pipe(htmlmin({collapseWhitespace: true}))
       .pipe(gulp.dest(paths.dist.html))
});

// Prepare image files for distribution
gulp.task('images', function(){
   gulp.src(paths.src.images)
       .pipe(changed(paths.dist.images))
       // Do nothing, just move the files for now
       .pipe(gulp.dest(paths.dist.images))
});