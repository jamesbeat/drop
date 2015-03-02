module.exports = function(grunt) {

    // This is where we configure each task that we'd like to run.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            // This is where we set up all the tasks we'd like grunt to watch for changes.
            scripts: {
                files: ['js/source/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            images: {
                files: ['images/source/**/*.{png,jpg,gif}', 'images/source/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['sass/*.scss', 'sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        },
        uglify: {
            // This is for minifying all of our scripts.
            options: {
                sourceMap: true,
                mangle: false
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js/source',
                    src: '*.js',
                    dest: 'js/build'
                }]
            }
        },
        imagemin: {
            // This will optimize all of our images for the web.
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/source/',
                    src: ['**/*.{png,jpg,gif}','*.{png,jpg,gif}' ],
                    dest: 'images/optimized/'
                }]
            }
        },
        sass: {
            // This will compile all of our sass files
            // Additional configuration options can be found at https://github.com/gruntjs/grunt-contrib-sass
            dist: {
                options: {
                    style: 'expanded', // This controls the compiled css and can be changed to nested, compact or compressed
                    sourcemap: 'true',
                    require: 'sass-globbing',
                    
                },
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        'templates/*.php',
                        'images/optimized/*.{png,jpg,gif}',
                        'js/build/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    injectChanges: false // Change this to "true" if you'd like the css to be injected rather than a browser refresh. In order for this to work with Drupal you will need to install https://drupal.org/project/link_css keep in mind though that this should not be run on a production site.
                }
            }
        },
        real_favicon: {
		    my_icon: {
		      // The favicon master picture 
		      src: 'images/source/icons/icon.png',
		      // Directory where the generated pictures will be stored 
		      dest: 'images/optimized/icons',
		      // Path to icon (eg. favicon.ico will be accessible through http://mysite.com/path/to/icons/favicon.ico) 
		      icons_path: 'images/optimized/icons',
		      // HTML files where the favicon code should be inserted 
		      html: ['images/optimized/icons/index.html'],
		      design: {
		        // These options reflect the settings available in RealFaviconGenerator 
		        ios: {
		          picture_aspect: 'background_and_margin',
		          background_color: '#ffffff',
		          margin: 4
		        },
		        windows: {
		          picture_aspect: 'white_silhouette',
		          background_color: '#285078'
		        }
		      },
		      settings: {
		        // 0 = no compression, 5 = maximum compression 
		        compression: 5,
		        // Default is Mitchell 
		        scaling_algorithm: 'NearestNeighbor'
		      }
		    }
		  }
      
    });
    // This is where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-real-favicon');
    //grunt.loadNpmTasks('grunt-favicons');
    // Now that we've loaded the package.json and the node_modules we set the base path
    // for the actual execution of the tasks
    grunt.file.setBase('../')
    // This is where we tell Grunt what to do when we type "grunt" into the terminal.
    // Note. if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
    // you can type 'grunt watch' to automatically track your files for changes.
    grunt.registerTask('default', ['browserSync','real_favicon','watch']);
    
};
