define(function(require) {
	var animateengine = require("animateengine")
	var checkbrowser = require("CheckBrowser")
	var pccontrol = {
		scrollpermission: true,
		init: function() {
			// animateengine.pagegoto(4);
			if(checkbrowser.browser.dom != "Moz"){
				//非火狐浏览器
				document.body.addEventListener("mousewheel", function(event) {
					if (event.wheelDelta > 0) {
						animateengine.pageback()
					} else {
						animateengine.pagego()
					}
				});
			}else{
				//火狐浏览器
				document.body.addEventListener("DOMMouseScroll", function(event) {
					if (event.detail < 0){
						animateengine.pageback()
					} else {
						animateengine.pagego()
					}
				});
			}
		},
	}
	return pccontrol;
})