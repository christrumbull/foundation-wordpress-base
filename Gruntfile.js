module.exports = function(grunt) {
  grunt.initConfig({
  theme: 'base',
  sass: {
    dist: {
      options: {
        style: 'compressed',
        compass: true
      },
      files: {
          'wp-content/themes/<%= theme %>/build/css/main.min.css' : 'wp-content/themes/<%= theme %>/assets/app.scss'
      }
    }
  },
  uglify: {
    my_target: {
      files: {
        'wp-content/themes/<%= theme %>/build/js/main.min.js': 'wp-content/themes/<%= theme %>/assets/js/*.js'
      }
    }
  },
  watch: {
    files: ['wp-content/themes/<%= theme %>/assets/scss/*.scss', 'wp-content/themes/<%= theme %>/assets/js/*.js'],
    tasks: ['sass', 'uglify']
  }
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['watch', 'sass', 'uglify']);

};
