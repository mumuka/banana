define(function(require) {
	var $ = require('jquery')

	//设置宽高
	var haschagnagsize=0
	chagnagsize()
	function chagnagsize(){
		if(!haschagnagsize){
			$(window).resize(function(){
				chagnagsize()
			})
		}
		haschagnagsize=1
		var wh=$(window).height()
		var ww=$(window).width()
		if (wh>ww) {
			$(".animatemass").css({"width":ww,"height":ww})
		}else{
			$(".animatemass").css({"width":wh,"height":wh})
		}
	}

	// var scrollpage=require('scrollpage')
	// console.log(scrollpage())
	var checkbrowser=require("CheckBrowser")


	if(checkbrowser.isPC){
		var pccontrol=require("pccontrol")
		pccontrol.init()
	}else{
		var mobilecontrol=require("mobilecontrol")
		mobilecontrol.init()
	}


// http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
//http://www.cnblogs.com/yexiaochai/p/3603389.html
})