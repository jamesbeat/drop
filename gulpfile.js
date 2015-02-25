var gulp = require('gulp');
var sass = require('gulp-sass');
var favicons = require('favicons');
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var jpegoptim = require('imagemin-jpegoptim');
var pngquant = require('imagemin-pngquant');
var optipng = require('imagemin-optipng');

var configuration = {
    files: {
        src: 'logo.png',        // Path(s) for file to produce the favicons. `string` or `object` 
        dest: '',               // Path for writing the favicons to. `string` 
        html: 'favicon.html',           // Path(s) for HTML file to write or append metadata. `string` or `array` 
        iconsPath: null,          // Path for overriding default icons path. `string` 
        androidManifest: null,    // Path for an existing android_chrome_manifest.json. `string` 
        browserConfig: null,      // Path for an existing browserconfig.xml. `string` 
        firefoxManifest: null,    // Path for an existing manifest.webapp. `string` 
        yandexManifest: null      // Path for an existing yandex-browser-manifest.json. `string` 
    },
    icons: {
        android: true,            // Create Android homescreen icon. `boolean` 
        appleIcon: true,          // Create Apple touch icons. `boolean` 
        appleStartup: true,       // Create Apple startup images. `boolean` 
        coast: true,              // Create Opera Coast icon. `boolean` 
        favicons: true,           // Create regular favicons. `boolean` 
        firefox: true,            // Create Firefox OS icons. `boolean` 
        opengraph: true,          // Create Facebook OpenGraph. `boolean` 
        windows: true,            // Create Windows 8 tiles. `boolean` 
        yandex: true              // Create Yandex browser icon. `boolean` 
    },
    settings: {
        appName: null,            // Your application's name. `string` 
        appDescription: null,     // Your application's description. `string` 
        developer: null,          // Your (or your developer's) name. `string` 
        developerURL: null,       // Your (or your developer's) URL. `string` 
        version: 1.0,             // Your application's version number. `number` 
        background: null,         // Background colour for flattened icons. `string` 
        index: null,              // Path for the initial page on the site. `string` 
        url: null,                // URL for your website. `string` 
        silhouette: false,        // Turn the logo into a white silhouette for Windows 8. `boolean` 
        logging: false            // Print logs to console? `boolean` 
    },
    favicon_generation: null,     // Complete JSON oerwrite for the favicon_generation object. `object` 
}

function callback(error, metadata) {
    if (error) {
        throw error;
    }
    console.log(metadata, 'Metadata produced during the build process');
}


 
gulp.task('styles', function() {
     gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('css'))
        .pipe(livereload())
})
 
gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
})

gulp.task('favicon', function() {
    gulp.favicons(configuration, callback);
})

gulp.task('image-opt', function () {
    gulp.src('images/source/**/*.{png,jpg,jpeg,gif,svg}')
            .pipe(optipng({optimizationLevel: 3}))
            .pipe(pngquant({quality: '65-80', speed: 4}))
            .pipe(jpegoptim({max: 70}))
            .pipe(gulp.dest('images/optimized'));
});


gulp.task('default', function() {
	
	livereload({ start: true })
	
	gulp.watch('scss/**/*.scss', function(event) {
        gulp.run('styles');
        
    })
	 
    gulp.watch('js/source/**', function(event) {
        gulp.run('scripts');
        livereload.listen();	
    })
    
    gulp.watch('images/source/**', function(event) {
        gulp.run('image-opt','favicon');
    })
 
})