let gulp = require('gulp');
let browser_sync = require('browser-sync').create();

function Reload() {
	browser_sync.reload();
}

function Sync() {
   browser_sync.init({
      server: {
      	 baseDir: "./"
      },
      port: 8000
   });
}

function CSS() {
	gulp.src('./CSS/**/*.css')
	  .pipe(gulp.dest('./CSS/'))
	  .pipe(browser_sync.stream());
}

function Watch() {
    gulp.watch('./CSS/**/*', CSS);
    gulp.watch('./**/*.html', Reload);
}

gulp.task('default', gulp.parallel(Watch, Sync));
