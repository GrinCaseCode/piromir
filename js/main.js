(function ($) {
    
	
	
	
	$('[fv-title]').tipTip({
		attribute: 'fv-title',
	});
	
	
    $('.fv-glass-product-item').click(function(e){
		if($(e.target).hasClass('fv-glass-product-item')){
			var href = $(this).parents('.catalog__item').find('.catalog__item-img').attr('href');
			window.location = href;
		}
	});
	
	
	
	
	
	
	
    if($('.woocommerce-message').length > 0){
        //setTimeout();
        var clean_uri = location.protocol + "//" + location.host + location.pathname;
        window.history.replaceState({}, document.title, clean_uri);
    }
    
	new WOW({
		boxClass: 'wow', // default
		animateClass: 'animated', // default
		offset: 0, // default
		mobile: false, // default
		live: true // default
	}).init();

    $('#open_filter, .filter_close').click(function(){
        $('.df_filter_sidebar').toggleClass('show'); 
        $('body').toggleClass('fix');
    });

	// Закрытие модалки
	$('.popup-close').on('click', function () {
		$(".fancybox-overlay").fadeOut();
	});

	// Мобильное меню
	let link = $('.menu-link')
	menu = $('.mobile-menu-wrapper'),
    menu_link = $('.menu-wrapper a');

	link.on('click', function () {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
		$('#catalog_mobile_show').removeClass('menu_active').slideDown();
	});

	menu_link.on('click', function () {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
    
    $('.mobile-menu-wrapper .menu-item-has-children > a').click(function(e){
        e.preventDefault();
        $(this).parent().siblings().find('ul').hide();
        $(this).next().show();
    });
    
    $('#catalog_show').click(function(){
       $('.menu-link').click(); 
       $('#catalog_mobile_show').show().addClass('menu_active');
    });
    
    $('#menu-item-97').click(function(){
        $('.menu-link').click();
        $('#catalog_show').click();
    })
    
	// Маска ввода
	$(`input[type='tel']`).mask('+7 (999)-999-99-99');

	// Категория товаров. Первый блок 
	if ($('.tovar__text').height() > 230) {
		$('.tovar__text').addClass('tovar__text_scroll');
	};


	// Форма поиска
	$('.search_m').on('click', function () {
		$('.search-mobile').toggleClass('active');
	});

	// Кнопка "больше характеристик"
	$('.more').on('click', function () {
		$(this).prev().find('li').toggleClass('visible');
		$(this).find('img').toggleClass('rotate');
	});

	// Слайдеры
	$('.top-slider .catalog-item-wrapper').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		variableWidth: true,
		swipe: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class=" slide-next"></button>',
		prevArrow: '<button type="button" class=" slide-prev"></button>',
		responsive: [{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	$('.bottom-slider .catalog-item-wrapper').slick({
		autoplay: true,		
		autoplaySpeed: 5000,
		swipe: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: $('.product-prev'),
		nextArrow: $('.product-next'),
		responsive: [{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	$('.tovar-slider').slick({
		autoplay: true,
		dots: true,
		dotsClass: 'tovar-dots',
		autoplaySpeed: 5000,
		variableWidth: true,
		swipe: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.product-slider').slick({
		autoplay: true,
		dots: true,
		dotsClass: 'tovar-dots product-dots',
		autoplaySpeed: 5000,
		swipe: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.product-prev'),
		nextArrow: $('.product-next'),
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false
			}
		}]
	});


	$('.feedback-slider').slick({
		autoplay: true,
		dots: true,
		dotsClass: 'tovar-dots product-dots',
		autoplaySpeed: 5000,
		swipe: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: $('.product-prev'),
		nextArrow: $('.product-next'),
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					centerMode: false,
					slidesToShow: 1
				}
			}
		]
	});

	$('.s-memories-slider').slick({
		autoplay: true,
		dots: false,
		autoplaySpeed: 5000,
		swipe: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.product-prev'),
		nextArrow: $('.product-next'),
		responsive: [{
			breakpoint: 768,
			settings: {
				dots: true,
				dotsClass: 'tovar-dots product-dots'
			}
		}]
	});

	$('.popup__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		// prevArrow: "<button class='slider-arrow slide-prev'></button>",
		// nextArrow: "<button class='slider-arrow slide-next'></button>",
		responsive: [{
			breakpoint: 992,
			settings: {
				dots: true,
				dotsClass: 'tovar-dots product-dots'
			}
		}]
	});

	$('.popup__slider-thumb').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		focusOnSelect: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				vertical: false
			}
		}, ]
	});

	$('.s-certificate-slider').slick({
		// autoplay: true,
		dots: false,
		autoplaySpeed: 5000,
		swipe: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.product-prev'),
		nextArrow: $('.product-next'),
		dotsClass: 'tovar-dots product-dots',
		responsive: [{
				breakpoint: 1200,
				settings: {
					prevArrow: null,
					nextArrow: null,
					dots: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			},
		]
	});


	$('img').lazy();

	// $('.certificate').fancybox();
	$('.certificate').on('click', function (e) {
		e.preventDefault();

		$('.popup-gallery').fadeIn();
		$('.certificate-slider').slick({
			autoplay: true,
			dots: true,
			dotsClass: 'tovar-dots product-dots',
			autoplaySpeed: 5000,
			swipe: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		});

	});



	let popup = document.querySelectorAll('.popup');

	window.addEventListener('click', function (e) {
		popup.forEach(popup => {
			if (e.target == popup) {
				$('.popup-gallery').fadeOut();
				$('.popup-thank').fadeOut();
				$('.fancybox-overlay').fadeOut();
			}
		});
	});
	document.addEventListener('wpcf7mailsent', function(event){
		$(event.target).find('form').parents('#min_price').find('.popup-close').click();
	}, false);

	$('.popup-gallery .popup-close_, .popup-thank .popup-close_').on('click', function () {
		$('.popup-gallery').fadeOut();
		$('.popup-thank').fadeOut();
	});


	// РќР°СЃС‚СЂРѕР№РєРё СЃР»Р°Р№РґРµСЂРѕРІ С‚РѕРІР°СЂР° 
	$('.popup__slider-thumb .slick-slide').on('click', function (event) {
		$('.popup__slider').slick('slickGoTo', $(this).data('slickIndex'));
		$(this).addClass('slick-current');
		$('.popup__slider-thumb .slick-slide').not($(this)).removeClass('slick-current');
	});

	// Фиксированное меню
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 126) {
			$('.header-bottom').addClass('header-bottom_fixed');
			$('.basket').addClass('basket_fixed');
		} else {
			$('.header-bottom').removeClass('header-bottom_fixed');
			$('.basket').removeClass('basket_fixed');
		}
	});

	// fancybox
	$("a.fancybox").fancybox();

	$(".various").fancybox({
		'transitionIn': 'none',
		'transitionOut': 'none'
	});

/*
	// Показать каталог
	$('.show-catalog').on('click', function () {
		$('.show-catalog').toggleClass('show-catalog_active');
		$('.catalog .sub-menu').toggleClass('sub-menu_active');
	});
*/


	// Счетчик товара
	$('.up').on('click', function () {
		let count = $(this).parent().prev().find('span');
		$(count).text(+$(count).text() + 1);
	});

	$('.down').on('click', function () {
		let count = $(this).parent().prev().find('span');
		if ($(count).text() == 1) {
			return false;
		} else {
			$(count).text(+$(count).text() - 1);
		}
	});


	// Табы 
	$('.product-tab-header a').click(function (event) {
		event.preventDefault();
		$(this).addClass('tab-active');
		$(this).siblings().removeClass('tab-active');
		var tab = $(this).attr('href');
		$('.product-tab-content').not(tab).css('display', 'none');
		$(tab).fadeIn();
	});

	// вопрос - ответ 
	$('.faq .faq__block-text').hide();
	$('.first-faq').show();
	$('.faq__block').on('click', f_acc);

	// РЎРєСЂС‹С‚РёРµ Р±Р»РѕРєР°
	function hideItem(a) {
		console.log($(a).find('faq__block-text'));

		$(a).find('.faq__block-text').slideToggle(400);
		$(a).toggleClass('opened');
	}

	function f_acc() {

		if ($(this).hasClass('opened')) {
			hideItem(this);
		} else {

			if ($('.faq__block').hasClass('opened')) {
				$('.faq__block.opened').find('.faq__block-text').slideToggle(400);
				$('.faq__block.opened').toggleClass('opened');
				hideItem(this);
			} else {
				hideItem(this);
			}
		}
	}

 	var mh = 0;
   	$(".tovar .tovar-wrapper .tovar__item-title").each(function () {
       var h_block = parseInt($(this).height());
       if(h_block > mh) {
          mh = h_block;
       };
   	});
   	$(".tovar .tovar-wrapper .tovar__item-title").height(mh);

   	var mh1 = 0;
   	$(".bottom-slider .catalog__item .catalog__item-top").each(function () {
       var h_block1 = parseInt($(this).height());
       if(h_block1 > mh1) {
          mh1 = h_block1;
       };
   	});
   	$(".bottom-slider .catalog__item .catalog__item-top").height(mh1);

   	var mh2 = 0;
   	$(".top-slider .catalog__item .catalog__item-top").each(function () {
       var h_block2 = parseInt($(this).height());
       if(h_block2 > mh2) {
          mh2 = h_block2;
       };
   	});
   	$(".top-slider .catalog__item .catalog__item-top").height(mh2);



})(jQuery);