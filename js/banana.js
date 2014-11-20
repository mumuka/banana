define(function(require) {
	var $ = require('jquery')

	// var scrollpage=require('scrollpage')
	// console.log(scrollpage())
	var checkbrowser=require("CheckBrowser")



	if(checkbrowser.isPC){
		var pccontrol=require("pccontrol")
		pccontrol.init()
	}else{

	}






// http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
//http://www.cnblogs.com/yexiaochai/p/3603389.html
})