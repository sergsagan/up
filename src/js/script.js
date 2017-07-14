$(function() {
	
    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");

    $( ".type" ).select2({
        placeholder: "Any",
        allowClear: true
    });

    $( ".location" ).select2({
        placeholder: "Any",
        allowClear: true
    });

    $( ".status" ).select2({
        placeholder: "Any",
        allowClear: true
    });

    $( ".beds" ).select2({
        placeholder: "Any",
        allowClear: true
    });

    $( ".baths" ).select2({
        placeholder: "Any",
        allowClear: true
    });

    $( ".area" ).select2({
        placeholder: "Any",
        allowClear: true
    });

    //anchor links
	
	$(".navbar-nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	$('nav li a').click(function () {
		$('nav li').removeClass('active');
		$(this).parent().addClass('active');
		return true;
	});
	
	//Scroll Top
	
	$('#scrollUp').mouseover(function(){
		$( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click(function(e){
		e.preventDefault();
		$('body,html').animate({ scrollTop: 1 }, 1000);
	});
	
	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollUp').fadeIn('fast');
		} else {
			$('#scrollUp').fadeOut('fast');
		}
	});
	
	//modal
	
	$('.order,.order-form').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$('#modal-form').css('display', 'block');
			$('#modal-form').animate({opacity: 1, top: '20%'}, 200);
		});
	});
	
	$('.form-close').click( function(){
		$('#modal-form').animate({opacity: 0, top: '45%'}, 200,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
				$('.form-of-training, .practices, .course').find(".name, .price, .price .rub").removeClass("active");
			}
		);
	});

    //ion.rangeslider

    var $range = $(".range_slider"),
        $min = $(".min-price"),
        $max = $(".max-price"),
        ionValues = function(data) {
            $min.text('$' + data.from);
            $max.text('$' + data.to);
        };

    $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000000,
        from: 200000,
        to: 500000,
        hide_from_to: true,
        hide_min_max: false,
        onStart: ionValues,
        onChange: ionValues
    });


    $('select').styler();

    //language-select

    $('.language-select').click(function(){
        $(this).toggleClass('open');
    });

    $('.language-select li').click(function(){
        var setLang = $('.language-select').data('location'),
            dataLangSelect = $(this).data('lang');
        $('.language-select').data('location', dataLangSelect);
        $('.language-select li').removeClass('active');
        $(this).toggleClass('active');
    });

    //currency-select

    $('.currency-select').click(function(){
        $(this).toggleClass('open');
    });

    $('.currency-select li').click(function(){
        var setLang = $('.currency-select').data('location'),
            dataLangSelect = $(this).data('currency');
        $('.currency-select').data('location', dataLangSelect);
        $('.currency-select li').removeClass('active');
        $(this).toggleClass('active');
    });
    
    $('.fade').slick({
        speed: 500,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear'
    });





    /*$('.responsive').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });*/
    

    $("#phone").mask("+38 (999) 999-99-99");


    
    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
	$("#feadback-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('#feadback-form')[0].reset(
				setTimeout(function () {}, 1000)
			);
			
			$('#popUpMessage').removeClass('hiddenDiv');
			setTimeout(function () {
				$('#popUpMessage').addClass('hiddenDiv');
			}, 2000);
		});
		return false;
	});
});
