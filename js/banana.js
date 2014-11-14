define(function(require) {
	var $ = require('jquery')
	$("body").css({
		"position": "absolute",
		"top": 0,
		"left": 0,
		"width": "100%",
		"height": "100%",
		// "margin":0
	})

	document.body.addEventListener("DOMMouseScroll", function(event) {
		console.log(0);
	});

//http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
//http://www.cnblogs.com/yexiaochai/p/3603389.html
})