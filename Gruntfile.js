//module.exports= function(grunt) {
// 	// 项目配置
// 	grunt.initConfig({
// 		pkg: grunt.file.readJSON('package.json'),
// 		// concat: {
// 		// 	options: {
// 		// 		separator: ';'
// 		// 	},
// 		// 	dist: {
// 		// 		js: ['js/Weixinshare.js', 'js/share.js'],
// 		// 		dest: 'dest/libs.js'
// 		// 	}
// 		// },
// 		uglify: {
// 			options: {
// 				banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
// 			},
// 			// build: {
// 			// 	js: 'dest/<%=pkg.file %>.js',
// 			// 	dest: 'dest/<%= pkg.file %>.min.js'
// 			// }
// 			my_target:{
// 				files:{
// 					'dest/share.min.js':['js/Weixinshare.js', 'js/share.js']
// 				}
// 			}
// 		}
// 	});
// 	// 加载提供"uglify"任务的插件
// 	// grunt.loadNpmTasks("grunt-contrib-concat");
// 	grunt.loadNpmTasks('grunt-contrib-uglify');
// 	// 默认任务
// 	grunt.registerTask('default',['uglify']);
// }

//http://www.cnblogs.com/yexiaochai/p/3603389.html


module.exports = function(grunt) {
	// 项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					baseUrl: "js",
					optimize: 'uglify2',
					generateSourceMaps: true,
					preserveLicenseComments: false,
					include: [
						'main',
					],
					out: "build/main.js"
				}
			}
		},
		less: {
			development: {
				options: {
					paths: ["less"],
					sourceMap:true,
					sourceMapURL:"banana.css.map",
					sourceMapFilename:"css/banana.css.map",
					sourceMapBasepath:"../less/banana.less"
				},
				files: {
					"css/banana.css": "less/banana.less"
				}
			},
			production: {
				options: {
					paths: ["less"],
					cleancss: true,
					modifyVars: {
						imgPath: '"http://mycdn.com/path/to/images"',
						bgColor: 'red'
					}
				},
				files: {
					"css/banana.min.css": "less/banana.less"
				}
			}
		}

	});
	//加载提供"uglify"任务的插件
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-less');
	//默认任务
	grunt.registerTask('default', ['requirejs','less']);
}
















