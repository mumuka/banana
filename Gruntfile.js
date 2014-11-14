module.exports = function(grunt) {
	// 项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// concat: {
		// 	options: {
		// 		separator: ';'
		// 	},
		// 	dist: {
		// 		src: ['js/Weixinshare.js', 'js/share.js'],
		// 		dest: 'dest/libs.js'
		// 	}
		// },
		uglify: {
			options: {
				banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			// build: {
			// 	src: 'dest/<%=pkg.file %>.js',
			// 	dest: 'dest/<%= pkg.file %>.min.js'
			// }
			my_target:{
				files:{
					'dest/share.min.js':['js/Weixinshare.js', 'js/share.js']
				}
			}
		}
	});
	// 加载提供"uglify"任务的插件
	// grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// 默认任务
	grunt.registerTask('default',['uglify']);
}

//http://www.cnblogs.com/yexiaochai/p/3603389.html