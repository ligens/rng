/**
 * jQuery自定义插件的架构
 * @param {Object} $ jQuery对象
 */
(function($,window) {
	$.fn.extend({
		"goTop" : function(options) {
			
			var DEFAULT_VAL = {"animate" : "normal","speed" : 500};
			var setting = $.extend(DEFAULT_VAL, options); 
			setting = {
				"animate" : "normal",
				"speed" : 500
			}
			
			//在jQuery的自定义插件的方法中this不是JavaScript，是jQuery对象
			//this === $(this)
			$(this).each(function(index,item) {
				$(window).on("scroll",function() {
					if ($(window).scrollTop() > 50) {
						if (setting.animate == "normal") {
							$(item).show();
						} else if (setting.animate == "slide") {
							$(item).slideDown();
						} else if(setting.animate == "fade") {
							$(item).fadeIn();
						}
						
					} else {
						if (setting.animate == "normal") {
							$(item).hide();
						} else if (setting.animate == "slide") {
							$(item).slideUp();
						} else if(setting.animate == "fade") {
							$(item).fadeOut();
						}
					}
				});
				
				$(this).on("click",function() {
					$("body,html").animate({"scrollTop":0},setting.speed);
				});
			});
		}
	});
	
	
})(jQuery,window);
