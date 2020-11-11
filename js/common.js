$(document).ready(function() {

	//input number
	jQuery('.card-quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.card-quantity-up'),
		btnDown = spinner.find('.card-quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});
	//слайдер

	$('.slider-card').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider-card-for').not(".slick-initialized").slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-card-nav',
	});

	$('.slider-card-nav').not(".slick-initialized").slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.slider-card-for',
	});

	$(".fancybox-card").fancybox({
		helpers:  {
			overlay : {
				locked : true
			}
		},
		beforeShow : function(){
			setTimeout(function () {
				$('.slider-card-for').slick('setPosition');
				$('.slider-card-nav').slick('setPosition');
			}, 300); 
			$(".fancybox-skin").addClass("modal-fancybox");
			
		}
	});



});