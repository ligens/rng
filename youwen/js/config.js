require.config({
	paths:{
		"jquery":["js/jquery-1.10.2.min"],
		"fu" :["js/jquery.fullPage.min"],
		"wo" :["js/wow.min"],
		"to" :["js/jquery_top"],
		"inde":["js/index"]
	},
	
	shim:{
		"fu":{
			deps:["jquery"]
		},
		"wo":{
			deps:["jquery"]
		},
		"to":{
			deps:["jquery"]
		},
		"inde":{
			deps:["jquery"]
		}
		
	}
});
require(["jquery","fu","wo","to","inde"],function(){
	
})
