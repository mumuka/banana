define(function(require) {
	var $ = require('jquery')
	var scrollpage=require('scrollpage')

	console.log(scrollpage())

	$("body").css({
		"position": "absolute",
		"top": 0,
		"left": 0,
		"width": "100%",
		"height": "100%",
		"margin":0
	})



	document.body.addEventListener("mousewheel", function(event) {
		console.dir(event);
	});

// http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
//http://www.cnblogs.com/yexiaochai/p/3603389.html
})