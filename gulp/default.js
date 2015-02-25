var gulp = require('gulp'),
	config = require('./config.json'),
	sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
	watch = require('gulp-watch'),
	favicons = require('favicons'),
	jpegoptim = require('imagemin-jpegoptim'),
	pngquant = require('imagemin-pngquant'),
	optipng = require('imagemin-optipng'),
	browsersync = require('browser-sync');


gulp.task('browser-sync', function() {
    browsersync({
       
        proxy: "localhost/droptest"
    });
});

gulp.task('styles', function() {
	console.log('Compile SASS'); 
	return sass(config.sass.src)
          .pipe(sass(config.sass.options))
          .pipe(gulp.dest(config.sass.dest))
        
});

gulp.task('favicon', function() {
    console.log('Favicon generation');  
    gulp.src('index.html')
        .pipe(favicons(config.favicon))
        .pipe(gulp.dest('./'));
    
})


gulp.task('image-opt', function () {
	console.log('optimizing Images');
    gulp.src(config.images.src)
        .pipe(changed(config.images.dest))
        .pipe(optipng(config.images.pngopt))
        .pipe(pngquant(config.images.pngquant))
        .pipe(jpegoptim(config.images.jpeg))
        .pipe(gulp.dest(config.images.dest));
});


gulp.task('watch', ['browser-sync'], function() {
  console.log('Watching');
  gulp.watch(config.sass.src, ['styles']);
  gulp.watch(config.images.src, ['image-opt']);
  
  gulp.watch(config.favicon.files.src, ['favicon']);
});


gulp.task('default', ['watch'], function() {
  console.log('Hello Gulp.js!');
});

