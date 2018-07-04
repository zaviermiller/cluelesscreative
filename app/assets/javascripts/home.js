$(document).ready(function(){
	$('.navbar li:nth-child(1), .dots p:nth-child(1), .navbar img').click(function(){
		$("html, body").animate({ scrollTop: $('.page1').offset().top }, {duration: 600, easing: 'swing'});
	});
	$('.navbar li:nth-child(2), .dots p:nth-child(2), .mainbtn, .maindown').click(function(){
		$("html, body").animate({ scrollTop: $('.page2').offset().top }, {duration: 600, easing: 'swing'});
	});
	$('.navbar li:nth-child(3), .dots p:nth-child(3)').click(function(){
		$("html, body").animate({ scrollTop: $('.page3').offset().top }, {duration: 600, easing: 'swing'});
	});
	$('.navbar li:nth-child(4), .dots p:nth-child(4)').click(function(){
		$("html, body").animate({ scrollTop: $('.page4').offset().top }, {duration: 600, easing: 'swing'});
	});
	$(window).scroll(function() {
    	if ($(window).scrollTop() >= $(document).height() / 3 * .95 - $(window).height() / 3 && $(window).scrollTop() < $(document).height() / 1.5  - $(window).height() / 1.5) {
    		$('.navbar .active, .dots p').removeClass('active');
    		$('.navbar li:nth-child(2), .dots p:nth-child(2)').addClass('active');
    		$('.navbar').removeClass('dark').removeClass('yellow').addClass('light');
    		$('.navbar img').attr("src","clueless yellow s.png");
    	}
    	else if($(window).scrollTop() >= $(document).height() / 1.5  - $(window).height() / 1.5 && $(window).scrollTop() < $(document).height() *.9 - $(window).height()) {
			$('.navbar .active, .dots p').removeClass('active');
    		$('.navbar li:nth-child(3), .dots p:nth-child(3)').addClass('active');
    		$('.navbar, .dots').removeClass('light').removeClass('dark').addClass('yellow');
    		$('.navbar img').attr("src","clueless black s.png");
    	}
    	else if($(window).scrollTop() >= $(document).height() * .9 - $(window).height()) {
    		$('.navbar .active, .dots p').removeClass('active');
    		$('.navbar li:nth-child(4), .dots p:nth-child(4)').addClass('active');
    		$('.dots').removeClass('yellow').removeClass('dark').addClass('light');
    	}
    	else {
    		$('.navbar .active, .dots p').removeClass('active');
    		$('.navbar li:nth-child(1), .dots p:nth-child(1)').addClass('active');
    		$('.navbar, .dots').removeClass('light').removeClass('yellow').addClass('dark');
    	}

    	if ($(window).scrollTop() >= ($(document).height() * .6 - $(window).height()) / 3 && $(window).scrollTop() < $(document).height() *.58 - $(window).height() / 1.5) {
    		$('.dots').removeClass('yellow').removeClass('dark').addClass('light');
    	}
    	else if($(window).scrollTop() >= $(document).height() * .58  - $(window).height() / 1.5 && $(window).scrollTop() < $(document).height() - $(window).height()) {
    		$('.dots').removeClass('dark').removeClass('light').addClass('yellow');
    	}
	});
	$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   var wh = $(document).height() - $(window).height();

// st : wh = X : 100
// x = (st*100)/wh

var perc = (st*100)/wh

// Your percentage is contained in perc variable

});
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 210,
	fitWidth: true
});
var s = skrollr.init({
    forceHeight: false
});

// Refresh Skrollr after resizing our sections
s.refresh($('.page3'));
});
