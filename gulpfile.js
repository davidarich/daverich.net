var gulp = require('gulp');
//var concat = require('gulp-concat'); // Concatenate files together
//var sourcemaps = require('gulp-sourcemaps'); // Creates sourcemaps (.map) for minified files
var uglify = require('gulp-uglify'); // Minify JS files
var htmlmin = require('gulp-htmlmin'); // Minify HTML files
var imagemin = require('gulp-imagemin'); // Minify images GIF, JPEG, PNG, & SVG
var cleancss = require('gulp-clean-css'); // Minify/Cleanup CSS files
var pump = require('pump'); // Passes errors correctly through uglify
var changed = require('gulp-changed'); // Only passes through changed files

// File path definitions
var paths = {
    src: {
        html: ['src/*.html'],
        scripts: ['src/js/**.js'],
        styles: ['src/css/**.css'],
        images: ['src/images/**/**.*'],
        favicon: ['src/favicon.ico'],
        docs: ['src/docs/**.*']
    },
    dist: {
        html: 'dist',
        scripts: 'dist/js',
        styles: 'dist/css',
        images: 'dist/images',
        favicon: 'dist',
        docs: 'dist/docs'
    }
};

var buildtasks = ['javascript','html','css','images','favicon','docs'];

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

// Prepare CSS files for distribution
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
       .pipe(imagemin({
           optimizationLevel: 3,
           progressive: true,
           interlaced: false,
           svgoPlugins: [{
               removeViewBox: false
           }]
       }))
       .pipe(gulp.dest(paths.dist.images))
});

// Copy favicon file to dist
gulp.task('favicon', function(){
    gulp.src(paths.src.favicon)
        .pipe(changed(paths.dist.favicon))
        .pipe(gulp.dest(paths.dist.favicon))
});

// Copy document files to dist/docs
gulp.task('docs', function(){
    gulp.src(paths.src.docs)
        .pipe(changed(paths.dist.docs))
        .pipe(gulp.dest(paths.dist.docs))
});