
// not in use


module.exports = function(grunt) {

    require('jit-grunt')(grunt, {
        // here be static mapping
    });

    require("time-grunt")(grunt);

    grunt.initConfig({


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
                    ignorePath: 'public',
                    starttag: '<!-- app:js -->',
                    endtag: '<!-- end_app:js -->'
                }
            },
            app_css: {
                files: {
                    'public/index.html': ['public/assets/css/*.css'],
                },
                options: {
                    ignorePath: 'public',
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

        // injects bower components into the index.html
        wiredep: {
            bower: {
                src: 'public/index.html', // although the option says "src", this is the destination file the components will be injected
                options: {
                    // wiredep looks up the main files of each component through the package.json. In some cases the main file is not defined and some correction is needed
                    overrides: {
                        "angular-morris-chart": {
                            main: ["build/module/angular-morris/angular-morris.min.js"]
                        },
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
