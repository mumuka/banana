define(function(require) {
	var animateengine = require("animateengine")
	var pccontrol = {
		scrollpermission: true,
		init: function() {
			var _this = this;
			document.body.addEventListener("mousewheel", function(event) {
				if (!_this.scrollpermission) {
					return
				}
				if (event.wheelDeltaY > 0) {
					animateengine.pagego()
				} else {
					animateengine.pageback()
				}
			});
		},
	}
	return pccontrol;
})