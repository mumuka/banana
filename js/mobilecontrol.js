define(function(require) {
	var animateengine = require("animateengine")
	var checkbrowser = require("CheckBrowser")
	var pccontrol = {
		scrollpermission: true,
		init: function() {
			animateengine.pagegoto(1);
			//animateengine.pageback()
			//animateengine.pagego()
		},
	}
	return pccontrol;
})