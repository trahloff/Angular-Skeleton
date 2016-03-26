module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.initConfig({

    wiredep: {
      bower: {
        src: 'client/index.html',\n // .html support..
      }
    },

    bower: {
      install: {
        options: {
          targetDir: './bower_components',
          copy: true
        }
      }
    },

    injector: {
      local_dependencies: {
        files: {
          'client/index.html': ['client/**/*.js', 'client/**/*.css'],
        }
      },
      options: {
        starttag: '<!-- app:js -->',
        endtag: '<!-- end_app -->'
      }
    },

    watch: {
      bower: {
        files: ['bower_components**/*.js', 'bower_components**/*.js'],
        tasks: ['wiredep'],
        options: {
          spawn: false,
        },
      },
      app_scripts: {
        files: ['client/**/*.js', 'client/**/*.css'],
        tasks: ['injector', 'newer:ngAnnotate', 'newer:jsc'],
        options: {
          spawn: false,
        },
      },
    },

    nodemon: {
      dev: {
        script: 'app.js'
      }
    },

    concurrent: {
      serve: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    jscs: {
      src: "client/**/*.js",
      options: {
        verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
        fix: true, // Autofix code style violations when possible.
        requireCurlyBraces: ["if"]
      }
    },

    ngAnnotate: {
      options: {
        singleQuotes: true,
      },
      app: {
        expand: true,
        src: 'client/app/components/**/*.js'

      }
    },

    shell: {
      multiple: {
        command: [
          'npm install',
          'bower install'
        ].join('&&')
      }
    }
  });

  grunt.registerTask('default', ['concurrent:serve']);
  grunt.registerTask('init', ['shell']);

};
