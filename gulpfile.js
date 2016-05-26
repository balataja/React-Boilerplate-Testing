var gulp = require('gulp');
//var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('build', function() {
    return browserify('src/')
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('static/'));
});

/*gulp.task('watch', function() {
    var b = browserify({
        entries: ['src/App.js'],
        cache: {},
        plugin: ['watchify']
    });
    
    b.on('update', makeBundle);
    
    function makeBundle() {
        b.transform('babelify', {presets: 'react'})
            .bundle()
            .on('error', function(err) {
                console.error(err.message); 
                console.error(err.codeFrame); 
            })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('static/'));
        console.log('Bundle updated, success');
    }
    
    makeBundle();
    
    return b;
});*/

//gulp.task('default', ['watch']);