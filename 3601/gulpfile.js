var gulp = require('gulp');


var browserSync = require('browser-sync');


var sass = require('gulp-sass');


// var less = require('gulp-less');


gulp.task('sass', function () {
    gulp.src('./src/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({
        stream: true
    }))
});


// gulp.task('less', function () {
//     gulp.src('./src/css/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./src/css/'))
//     .pipe(browserSync.reload({
//         stream: true
//     }))
// });


gulp.task('html',function(){
     gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
        stream: true
    }))
})

gulp.task('img',function(){
     gulp.src('./src/img/*.jpg')
    .pipe(gulp.dest('./dist/img'))
    .pipe(browserSync.reload({
        stream: true
    }))
})

 



gulp.task('servers', function() {
    browserSync({
        server: {baseDir: ['./dist']}
    })
    gulp.watch('./src/css/*.scss', ['sass']);
    gulp.watch('./src/*.html',['html']);
});


gulp.task('default',['sass','servers','html','img']);