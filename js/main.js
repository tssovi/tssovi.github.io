//////////////////////////////////////////////////////  //
//    EVENTS ON DOCUMENT READY                          //
//////////////////////////////////////////////////////  //

$(document).ready(function () {
    "use strict";
    
    //// PRELOADER TRIGGER
    $(window).on('load', function () {
        $(".loading").animate({
            "top": "-100%"
        }, 700, function () {
            $(this).remove();
        });
    });
	
	// Show Color Option Div When Click On The Gear
    
    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });
    
    // Change Theme Color On Click
    
    var colorLi = $(".color-option li");

        
    colorLi.click(function () {
        
        $("link[href*='color']").attr("href", $(this).attr("data-value"));
        
    });

    // Typed JS TRIGGER
	$(".home-page .middle-c h3 span").typed({
		strings: ["Backend Developer", "AI Learner", "Algorithm Lover"],
		loop: true,
		startDelay: 1e3,
		backDelay: 3e3
	});

    // CUSTOM SCROLLBAR JS TRIGGER
    $(window).on("load",function(){
            $(".page-content").mCustomScrollbar({
		    theme:"dark",
		    scrollInertia: 8
		});
    });

    // TABS JS TRIGGER
	$('#navbar a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	// OWL CAROUSEL TRIGGER
	$('.owl-carousel').owlCarousel({
	 	items: 1,
		margin: 0,
		dots: true
	 });

	// FILTRED PORTFOLIO
	$('.filter li a').on("click", function(e){
			e.preventDefault();
			$(this).addClass('active');
			$(this).parent().siblings().find('a').removeClass('active');
	        var filters = $(this).attr('data-filter');
	        $(this).closest('.works').find('.portfolio-caption').removeClass('disable');
	        if (filters !== 'all') {
	        var selected =  $(this).closest('.works').find('.portfolio-caption');
	        for(var i = 0; i < selected.length; i++){
	        if (!selected.eq(i).hasClass(filters)) {
	           	    selected.eq(i).addClass('disable');
				}
	        }
	   }
	});

	// MAGNIFIC POPUP TRIGGER
    $('.modal-image').magnificPopup({
      type:'inline',
      midClick: true
    });

    //// PARSLEY TRIGGER
    $('.contact-forum').parsley();

    //// NAVBAR COLLAPSE
    var rNav = $(".right-nav"),
	hInfo = $(".home .info"),
	home = $(".home"),
	navBtn = $(".slide-nav-btn"),
	navBtnActive = "slide-nav-btn-active",
	nav = $(".sidebar"),
	navActive = "sidebar-active",
	rNavSpan = $(".right-nav ul li i"),
	up = $(".up i"),
	body = $("html, body");
    rNav.css("top", (home.height() - rNav.height()) / 2);
    hInfo.css("top", (home.height() - hInfo.height()) / 2);
    navBtn.on("click", function() {
      $(this).toggleClass(navBtnActive);
      nav.toggleClass(navActive)
    });



});