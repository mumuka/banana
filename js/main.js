require.config({
	baseUrl: "js",
	shim: {
		// 'quo': ['jquery']
	},
	paths: {
		"jquery": "jquery",
		"banana": "banana",
		"scrollpage": "scrollpage"
	}
})
require(["banana"])