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
					sourceMap: true,
					sourceMapFilename: "banana.css.map",
					sourceMapURL: "../banana.css.map",
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
		},
		watch: {
			client: {
				//我们不需要配置额外的任务，watch任务已经内建LiveReload浏览器刷新的代码片段。
				options: {
					livereload: true
				},
				//'**'表示包含所有的子目录
				//'*'表示包含所有的文件
				files: ['*.html', 'css/*', 'js/*', 'images/**/*','less/*']
			},
			js: {
				files: 'js/*.js',
				tasks: ['requirejs']
			},
			less: {
				files: 'less/*.less',
				tasks: 'less'
			},
		},
	});
	//加载提供"uglify"任务的插件
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//默认任务
	grunt.registerTask('default', ['requirejs', 'less']);

}