/**
 * Created by dtx on 16/12/30.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),//livereload
    less = require('gulp-less'),
    concatCss = require('gulp-concat-css');

gulp.task('uglify',function () {
    return gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
        .pipe(connect.reload())
});
//定义html任务
gulp.task('html', function () {
    gulp.src('app/**/*.html')
        // .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
});
//less
gulp.task('less',function(){
    return gulp.src('less/**/*.less')
        .pipe(less())
        .pipe(concatCss('all.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(connect.reload());
})
//浏览器自动刷新
gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});
//定义看守任务
gulp.task('watch', function () {
    gulp.watch('html/**/*.html', ['html']);
    gulp.watch('js/**/*.js',['uglify']);
    gulp.watch('less/**/*.less',['less']);
});
//自动编译文件

//自动加上前缀

//default
gulp.task('default', [ 'less','uglify', 'html','watch', 'connect']);