/*
*   Gulpfile for Codebase
*   Uses browserSync for watching and live reloading on different browser
*
*   Additional Utils:
*   
*/

var browserSync = require('browser-sync');
var gulp        = require('gulp'),
    gutil       = require('gulp-util');

/*
*  Define the default
*  Uncomment if it is the only default gulp task on the workspace
*/
// gulp.task('default', ['codebase-serve']);

gulp.task('codebase-serve', function(){
    
     browserSync({
        server: {
            baseDir: "app" // Change this to your web root dir
        }
    });
    
    gulp.watch('./**/*.js').on('change', browserSync.reload);
    gulp.watch('./**/*.css').on('change', browserSync.reload);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./**/*.php').on('change', browserSync.reload);
});