//http://gruntjs.com

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    //TODO: Strip comment at the top from minified CSS    
	cssmin: {
	  minify: {
		expand: true,
		cwd: 'assets/css/cascade/development/',
		src: '*.css',
		dest: 'assets/css/cascade/production/',
		ext: '.min.css'
	  }
	}
  });

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['cssmin']);

};