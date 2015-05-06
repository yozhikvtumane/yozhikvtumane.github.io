$(document).ready(function(){
	$(document).on('click' , function(menuSwitch){
		menuSwitch.stopPropagation();
		if (menuSwitch.target.id == 'menuSwitch') {
			$(".header__menu").toggleClass("header__menu_visible");
			$(".header__photo").toggleClass("header__photo_invisible");
		} else {
			$(".header__photo").removeClass("header__photo_invisible");
			$(".header__menu").removeClass("header__menu_visible");
		}
	});
	
	$(document).on('click' , '#overlay-info-close' , function(){
		$(".overlay-info").hide();
	});
});
