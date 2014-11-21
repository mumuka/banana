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
			this.pagerun(-1)
		},
		pagego: function() {
			this.pagerun(1)
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
			$(".currentpage").removeClass("currentpage")
			//下一张page初始化位置
			// console.log("下一张page初始化位置" + this.pageindex)
			console.log("this.pagesize"+this.pagesize)
			switch (this.pageindex) {
				case 0:
					//第一张禁止向上翻
					if (num < 0) {
						// console.log("最后最后")
						return
					} else {
						console.log(num)
						this.pageindex = this.pageindex + num
					}
					break
				case this.pagesize - 1:
					//最后一张翻到第一张
					console.log("最后一张")
					if (num < 0) {
						this.pageindex = this.pageindex + num
					} else {
						this.pageindex = "turn"
					}
					break
				default:
					this.pageindex = this.pageindex + num
					break
			}
			var pi = this.pageindex
			console.log(pi)
			$(".page:eq(" + pi + ")").css({
				"transform": "translateY(" + (-ph * num) + "px)"
			}).addClass("currentpage")

			this.pageanimate(num)
		},
		pageanimate: function(num) {
			this.animaterunning = true
			var _this = this
			var pi = this.pageindex
			var ph = this.windowsize.height

			var turnnum=(typeof pi=="number")?pi:0
			$(".page:eq(" + (turnnum) + ")").css({
				"transform": "translateY(" + 0 + "px)",
				"transition": "0.5s ease-out"
			})
			turnnum=(typeof pi=="number")?pi:this.pagesize-2
			$(".page:eq(" + (pi - num) + ")").css({
				"transform": "translateY(" + (-ph * num) + "px)",
				"transition": "0.5s ease-out"
			})

			function transitionend() {
				$(".currentpage")[0].addEventListener('webkitTransitionEnd', transitionend, false);
				setTimeout(function(){_this.animaterunning = false},500)
			}
			$(".currentpage")[0].addEventListener('webkitTransitionEnd', transitionend, false);
		},

	}
	return animateengine;
})