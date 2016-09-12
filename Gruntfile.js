module.exports = function(grunt) {

    // loads the just-in-time module. it loads the different npm tasks when they are needed. you dont have to write a "grunt.loadNpmTask([task_name])" for each task
    require('jit-grunt')(grunt, {
        // here be static mapping
    });

    grunt.initConfig({

        // enables you to run nodemon an watch simultaniously
        concurrent: {
            serve: {
                tasks: ['nodemon', 'watch:bower', 'watch:app_scripts'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },


        // this injects the files you write into the index.html. you need different subtask with different tags because it's important in which order the .js files are loaded
        injector: {
            app_js: {
                files: {
                    'public/index.html': ['public/**/*.js'],
                },
                options: {
                    starttag: '<!-- app:js -->',
                    endtag: '<!-- end_app:js -->'
                }
            },
            app_css: {
                files: {
                    'public/index.html': ['public/assets/css/*.css'],
                },
                options: {
                    starttag: '<!-- app:css -->',
                    endtag: '<!-- end_app:css -->'
                }
            }
        },

        // annotates the angular controllers
        ngAnnotate: {
            client: {
                files: [{
                    expand: true,
                    src: ['public/**/*.js']
                }],
            },
        },

        // just starts the server with nodemon
        nodemon: {
            dev: {
                script: 'app.js'
            }
        },


        // this generates watchdogs that do certain task when something changes to the mentioned file types
        // Warning: some tasks can be slow
        watch: {

            bower: {
                files: ['bower_components**/*.js', 'bower_components**/*.js'],
                tasks: ['wiredep'],
                options: {
                    spawn: false,
                },
            },
            app_scripts: {
                files: ['public/**/*.js', 'public/**/*.css'],
                tasks: ['injector', 'ngAnnotate'],
                options: {
                    spawn: false,
                },
            }
        },

        // injects bower components into the index.html. pretty cool stuff
        wiredep: {
            bower: {
                src: 'public/index.html', // although the option says "src", this is the destination file the components will be injected
                options: {
                    // wiredep looks up the main files of each component through the package.json. some lazy devs don't note down what they main files are, in these cases you have to override the default and say wiredep which file to inject
                    overrides: {
                        "angular-socket-io": {
                            main: ["socket.min.js"]
                        },
                        "socket.io-client": {
                            main: ["socket.io.js"]
                        },
                        "lodash": {
                            main: ["dist/lodash.js"]
                        },
                        "mdDataTable": {
                            main: ["dist/md-data-table.js", "dist/md-data-table-templates.js"]
                        },
                        "font-awesome": {
                            main: ["css/font-awesome.min.css"]
                        }
                    }
                }
            }
        }

    });


    grunt.registerTask('default', ['concurrent:serve']);
    grunt.registerTask('inject', ['ngAnnotate', 'wiredep', 'injector']);


};
