define(function(require) {
	var $ = require("jquery")

	var animateengine = {
		pageindex: 0,
		pagesize: $(".page").size(),
		animaterunning: false,
		windowsize: {
			width: $(window).width(),
			height: $(window).height()
		},
		pageback: function() {
			// console.log(this)
			this.pagerun(1)
		},
		pagego: function() {
			this.pagerun(-1)
		},
		pagerun: function(num) {
			if (this.animaterunning) {
				console.log("pagerun end")
				return
			}
			this.pageinit(num)
		},
		pageinit: function(num) {
			var _this = this
			var ph = this.windowsize.height
			var oldpagei = this.pageindex
			var newpagei = this.pageindex + num
			$(".currentpage").removeClass("currentpage")
			//更新pageindex  按需更新newpagei
			switch (this.pageindex) {
				case 0:
					//第一张禁止向上翻
					if (num < 0) {
						// console.log("最后最后")
						return
					} else {
						this.pageindex = this.pageindex + num
					}
					break
				case this.pagesize - 1:
					//最后一张翻到第一张
					console.log("最后一张")
					if (num < 0) {
						this.pageindex = this.pageindex + num
					} else {
						this.pageindex = 0
						newpagei = 0
					}
					break
				default:
					this.pageindex = this.pageindex + num;
					break
			}
			//newpage位置初始化
			$(".page:eq(" + newpagei + ")").css({
				"transform": "translateY(" + (ph * num) + "px)",
				"transition": "0s"
			})
			console.log(ph * num)
			//页面切换动画
			this.animaterunning = true
			setTimeout(function() {
				_this.pageanimate(oldpagei, newpagei, num)
			}, 60)
		},
		pageanimate: function(oldpagei, newpagei, num) {
			this.animaterunning = true
			var _this = this
			var ph = this.windowsize.height
			$(".page:eq(" + newpagei + ")").css({
				"transform": "translateY(" + 0 + "px)",
				"transition": "0.5s ease-out"
			}).addClass("currentpage")

			$(".page:eq(" + oldpagei + ")").css({
				"transform": "translateY(" + (-ph * num) + "px)",
				"transition": "0.5s ease-out"
			})

			function transitionend() {
				$(".currentpage")[0].addEventListener('webkitTransitionEnd', transitionend, false);
				setTimeout(function() {
					_this.animaterunning = false
				}, 500)
			}
			$(".currentpage")[0].addEventListener('webkitTransitionEnd', transitionend, false);
		},

	}
	return animateengine;
})