var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect',function(){
    connect.server({
        livereload: false,
        port:8088
    });
});

gulp.task('watch',function(){
    gulp.watch(['*.html','*.js','pages/**/*.html','resources/**/*.js','showcase/**/*'],['refresh']);
});

gulp.task('refresh',function(){
    console.log("do refresh");
    gulp.src('pages/*.html')
        .pipe(connect.reload());
});

gulp.task('default',['connect','watch']);
