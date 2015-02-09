$(document).ready(function(){
	//Map
	$(".header-top__shops").click(function(event){
			event.preventDefault();
			$(this).toggleClass("header__top_li__active");
			$(".header__map").fadeToggle();
			$(".google__map_insert").append(map);
		});
	//City selection dropdown list
	$("#city__select").click(function(){
		$("#header__city_select").fadeIn(300);
	});
	$("#city__select_close").click(function(){
		$("#header__city_select").fadeOut(500);
	});

	//Category list dropdown (uses jQuery UI "Accordion")
	$(".category__list_header").click(function(){
		$(".category__list_inner").fadeOut(0);
		$(".category__list_header").css("list-style-image", "url(assets/img/category-li-img.png)");
		$(this).find("ul").fadeToggle(0);
		$(this).css("list-style-image", "url(assets/img/category-li-img-minus.png)");
	});
	$(".category__list_header > a").click(function(event){
		event.stopImmediatePropagation();
	});

	//Category preview collapse box
	$(".category__preview_link").click(function(){
		$(".category__preview_collapse-box").fadeOut(100);
		$(this).prev().fadeIn(200);
	});
	$(".category__preview_collapse-box_close").click(function(){
		$(this).parent().fadeOut(200);
	});

	//Special offers slider
	$(".sp-offers__paginator_page1").click(function(){
		$(".sp-offers__page1").fadeIn(300);
		$(".sp-offers__page2").css("display", "none");
		$(".sp-offers__page3").css("display", "none");
		$(".sp-offers__page4").css("display", "none");
		$(this).addClass("sp-offers__paginator_page-active");
		$(".sp-offers__paginator_page2, .sp-offers__paginator_page3, .sp-offers__paginator_page4").removeClass("sp-offers__paginator_page-active");
	})
	$(".sp-offers__paginator_page2").click(function(){
		$(".sp-offers__page1").css("display", "none");
		$(".sp-offers__page2").fadeIn(300);
		$(".sp-offers__page3").css("display", "none");
		$(".sp-offers__page4").css("display", "none");
		$(this).addClass("sp-offers__paginator_page-active");
		$(".sp-offers__paginator_page1, .sp-offers__paginator_page3, .sp-offers__paginator_page4").removeClass("sp-offers__paginator_page-active");
	})
	$(".sp-offers__paginator_page3").click(function(){
		$(".sp-offers__page1").css("display", "none");
		$(".sp-offers__page2").css("display", "none");
		$(".sp-offers__page3").fadeIn(300);
		$(".sp-offers__page4").css("display", "none");
		$(this).addClass("sp-offers__paginator_page-active");
		$(".sp-offers__paginator_page1, .sp-offers__paginator_page2, .sp-offers__paginator_page4").removeClass("sp-offers__paginator_page-active");
	})
	$(".sp-offers__paginator_page4").click(function(){
		$(".sp-offers__page1").css("display", "none");
		$(".sp-offers__page2").css("display", "none");
		$(".sp-offers__page3").css("display", "none");
		$(".sp-offers__page4").fadeIn(300);
		$(this).addClass("sp-offers__paginator_page-active");
		$(".sp-offers__paginator_page1, .sp-offers__paginator_page2, .sp-offers__paginator_page3").removeClass("sp-offers__paginator_page-active");
	})

	//Comments show more
	$(".comments__show-more_link").click(function(){
		$(".comments__page2").fadeIn(300);
	});

	//Item page

	//Item catalog dropdown
	$("#catalog-button").click(function(event){
		event.preventDefault();
		$(this).toggleClass("item__catalog-button_active");
		$(function() {
			//init accord
			$( "#accordion" ).accordion();
			//no animation
			var animate = $( "#accordion" ).accordion( "option", "animate" );
			$( "#accordion" ).accordion( "option", "animate", false );
			//icon setup
			$( "#accordion" ).accordion({
				icons: { "ui-accordion-header": "ui-icon-plus", "ui-accordion-header-active": "ui-icon-minus" }
			});
			var icons = $( "#accordion" ).accordion( "option", "icons" );
			$( "#accordion" ).accordion( "option", "icons", { "ui-accordion-header": "ui-icon-plus", "ui-accordion-header-active": "ui-icon-minus" } );
		});
		$(".catalog__list").fadeToggle(0);
	});

	//To cart decriment/incriment value count
	$(".to-cart__minus").click(function(event){
		event.preventDefault();
		var text = $(this).next(":text");
		text.val(parseInt(text.val(), 10) - 1);
	});
	$(".to-cart__plus").click(function(event){
		event.preventDefault();
		var text = $(this).prev(":text");
		text.val(parseInt(text.val(), 10) + 1);
	});

	//Item close comments and open leave comment box
	$(".item__comments_write").click(function(){
		$("article").css("display", "none");
		$(".item__comments_write_box").css("display","inline-block");
	});
	$(".write__box_close").click(function(){
		$("article").css("display", "inline-block");
		$(".item__comments_write_box").css("display","none");
	});

	//Item nav about collapse
	$(".item__description-full_link").click(function(){
		$(".item__about_nav ul li a").removeClass("item__nav_link-active");
		$(this).addClass("item__nav_link-active");
		$(".item__description-full").css("display", "inline-block");
		$(".item__specs").css("display", "none");
		$(".item__download").css("display", "none");
		$(".item__video").css("display", "none");
		$(".item__comments").css("display", "none");
		$(".item__ask").css("display", "none");
	})
	$(".item__specs_link").click(function(){
		$(".item__about_nav ul li a").removeClass("item__nav_link-active");
		$(this).addClass("item__nav_link-active");
		$(".item__specs").css("display", "inline-block");
		$(".item__description-full").css("display", "none");
		$(".item__download").css("display", "none");
		$(".item__video").css("display", "none");
		$(".item__comments").css("display", "none");
		$(".item__ask").css("display", "none");
	})
	$(".item__download_link").click(function(){
		$(".item__about_nav ul li a").removeClass("item__nav_link-active");
		$(this).addClass("item__nav_link-active");
		$(".item__description-full").css("display", "none");
		$(".item__specs").css("display", "none");
		$(".item__download").css("display", "inline-block");
		$(".item__video").css("display", "none");
		$(".item__comments").css("display", "none");
		$(".item__ask").css("display", "none");
	})
	$(".item__video_link").click(function(){
		$(".item__about_nav ul li a").removeClass("item__nav_link-active");
		$(this).addClass("item__nav_link-active");
		$(".item__description-full").css("display", "none");
		$(".item__specs").css("display", "none");
		$(".item__download").css("display", "none");
		$(".item__video").css("display", "inline-block");
		$(".item__comments").css("display", "none");
		$(".item__ask").css("display", "none");
	})
	$(".item__comments_link").click(function(){
		$(".item__about_nav ul li a").removeClass("item__nav_link-active");
		$(this).addClass("item__nav_link-active");
		$(".item__description-full").css("display", "none");
		$(".item__specs").css("display", "none");
		$(".item__download").css("display", "none");
		$(".item__video").css("display", "none");
		$(".item__comments").css("display", "inline-block");
		$(".item__ask").css("display", "none");
	})
	$(".item__ask_link").click(function(){
		$(".item__about_nav ul li a").removeClass("item__nav_link-active");
		$(this).addClass("item__nav_link-active");
		$(".item__description-full").css("display", "none");
		$(".item__specs").css("display", "none");
		$(".item__download").css("display", "none");
		$(".item__video").css("display", "none");
		$(".item__comments").css("display", "none");
		$(".item__ask").css("display", "inline-block");
	});

	//Related --->  buy together switcher

	$(".switcher__link_buy-together").click(function(){
		$(this).toggleClass("item__related_switcher_link-active");
		$(".item__buy-together_box").css("display", "block");
		$(".item__related_box").css("display", "none");
		$(".switcher__link_related").removeClass("item__related_switcher_link-active");
	});
	$(".switcher__link_related").click(function(){
		$(this).toggleClass("item__related_switcher_link-active");
		$(".item__related_box").css("display", "block");
		$(".item__buy-together_box").css("display", "none");
		$(".switcher__link_buy-together").removeClass("item__related_switcher_link-active");
	});

	//Catalog category view switcher

	$(".category__main_view_small").click(function(){
		$(this).toggleClass("category__main_view_active");
		$(".category__main_view_large").removeClass("category__main_view_active");
		$(".category__small-view").show(100);
		$(".category__large-view").hide(100);
	});
	$(".category__main_view_large").click(function(){
		$(this).toggleClass("category__main_view_active");
		$(".category__main_view_small").removeClass("category__main_view_active");
		$(".category__large-view").show(100);
		$(".category__small-view").hide(100);
	});

	//Modal window popup
	//Callback - feedback
	$(".header-top__call-me").click(function(event){
		event.preventDefault();
		$(".modal-window ").hide()
		$(".header-top li").removeClass("header__top_li__active");
		$(this).addClass("header__top_li__active");
		$(".modal__feedback").css("display", "block");
		$("#page-fadeblack").addClass("page-fadeblack-active");
	});
	$("#login__form").click(function(event){
		event.preventDefault();
		$(".modal-window ").hide()
		$(".header-top li").removeClass("header__top_li__active");
		$(this).addClass("header__top_li__active");
		$(".modal__login").css("display", "block");
		$("#page-fadeblack").addClass("page-fadeblack-active");
	});
	$("#modal__link_shops").click(function(event){
		event.preventDefault();
		$(this).addClass("header__top_li__active");
		$(".modal__shops").css("display", "block");
		$("#page-fadeblack").addClass("page-fadeblack-active");
	});
	$("#modal__close, #modal__close_login").click(function(){
		$(".modal-window").fadeOut(0);
		$(".header-top__call-me").removeClass("header__top_li__active");
		$("#login__form").removeClass("header__top_li__active");
	});
	$("#modal-tab-second").click(function(){
		$(this).addClass("modal__tabs_tab_active");
		$("#modal-tab-first").removeClass("modal__tabs_tab_active");
		$(".modal__feedback_content_write").show();
		$(".modal__feedback_content_call").hide();
	});
	$("#modal-tab-first").click(function(){
		$(this).addClass("modal__tabs_tab_active");
		$("#modal-tab-second").removeClass("modal__tabs_tab_active");
		$(".modal__feedback_content_call").show();
		$(".modal__feedback_content_write").hide();
	});
	$("#modal-tab_login-second").click(function(){
		$(this).addClass("modal__tabs_tab_active");
		$("#modal-tab_login-first").removeClass("modal__tabs_tab_active");
		$(".modal__login_content_sign-up").show();
		$(".modal__login_content_login").hide();
	});
	$("#modal-tab_login-first").click(function(){
		$(this).addClass("modal__tabs_tab_active");
		$("#modal-tab_login-second").removeClass("modal__tabs_tab_active");
		$(".modal__login_content_login").show();
		$(".modal__login_content_sign-up").hide();
	});

	//Category page

	//Category options select
	$(".category__options_option_value").click(function(){
		$(this).toggleClass("category__options_option_value_highlighted");
	});
	$("#options__reset").click(function(event){
		event.preventDefault();
		$(".category__options_option_value").removeClass("category__options_option_value_highlighted");
	});

	//Category options slider ui
	$(function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 9999,
			values: [ 0, 9999 ],
			slide: function( event, ui ) {
				$( "#amount-min" ).val( ui.values[ 0 ] +  " ₽ " );
				$( "#amount-max" ).val( ui.values[ 1 ] + " ₽" );
				}
		});
		// default
		$( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) + " ₽" );
		$( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + " ₽" );
	});

});
