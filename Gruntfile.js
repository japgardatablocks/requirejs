module.exports = function (grunt) {

	grunt.initConfig({
		uglify : {
			build : {
				options : {
					mangle : true,
				},
				files : {
					'require.min.js' : ['require.js'],
				}

			}
		},
		 watch: {
		  files: ['require.js'],
		  tasks: ['uglify']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify']);

};
