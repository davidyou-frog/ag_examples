(function() {
'use strict';

var 

gulp       = require('gulp'),
nodemon    = require('gulp-nodemon'),
watch      = require('gulp-watch'),
jshint     = require('gulp-jshint'),
livereload = require('gulp-livereload'),
endmark=1
;

gulp.task('check', function() {
    return gulp.src(['client/*', 'client/js/*', 'client/view/*'])
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('client/*', ['check']);
    gulp.watch('client/lib/*', ['check']);
    gulp.watch('client/js/*', ['check']);
    gulp.watch('client/js/services/*', ['check']);
    gulp.watch('client/js/controller/*', ['check']);
    gulp.watch('client/view/*', ['check']);
});

//register nodemon task
gulp.task('nodemon', function() {
    nodemon({
        script: 'server/server.js',
        env: {
            'NODE_ENV': 'development'
        }
    })
    .on('restart');
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['nodemon', 'watch']);

}());

