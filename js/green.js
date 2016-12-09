/**
 * 蓝色背景。
 */
$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow");   
});

$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-2.jpg",
	 			], 	{duration: 3200, fade: 1300});
		});
})