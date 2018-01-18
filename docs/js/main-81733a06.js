$(window).on('load', function(){
	// Animate loader off screen
	$("#loader").fadeOut("slow");
	// Fade in on Pageload
	$(function() {
		$('body').css("overflow-y", "scroll")
	    $('#body-container').removeClass('fade-out');
	});
});

const gridBreakpoints = {
  'xs': 0,
  'sm': 576,
  'md': 768,
  'lg': 900,
  'xl': 1200,
  'xxl': 1600
};



$(function() {
  $.scrollify({
    section : ".canvas",
    interstitialSection: ".partial-canvas",
    scrollbars: false
  });
});

	


function isMobile() {
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
		return true;
	} else {
		return false;
	}
}

function isLandscape() {
	if (window.innerHeight < window.innerWidth) {
		return true;
	} else {
		return false;
	}
}

$( document ).ready(function() {
	// Medium Image Zoom
	(function() {
	  // Add zooms to a container
	  var containerZoom = [
	    mediumZoom('#zoom-default')
	  ]

	})()

	// Detect whether on mobile browser code
	

	if(isMobile()) {
	   setInterval(function(){ 
			$('.cf-top').toggleClass("cf-top-hover-mobile");
			$('.cf-top-hover-mobile').toggleClass("cf-top");
		}, 1500);
	}

	console.log( "ready!" );

	// About Page Code
	if (top.location.pathname === '/about/' || top.location.pathname === '/contact/' || top.location.pathname === '/404.html/') {
		$('#home-btn').css("color", "white");
		$('#bar1').css("background-color", "white");
	    $('#bar2').css("background-color", "white");
	}


	// Scroll Code
	if (top.location.pathname === '/') {
		$('#home-btn').hide();	
        if ($(document).scrollTop() >= $('#home-canvas-two').offset().top) {
			$('#bar1').css("background-color", "#333333");
        	$('#bar2').css("background-color", "#333333");
        } else {
        	$('#bar1').css("background-color", "white");
	        $('#bar2').css("background-color", "white");
        }
	} else if (top.location.pathname === '/about/' || top.location.pathname === '/contact/' || top.location.pathname === '/404.html/') {
		$('#bar1').css("background-color", "white");
        $('#bar2').css("background-color", "white");
	} else {
		$('#bar1').css("background-color", "#333333");
        $('#bar2').css("background-color", "#333333");
	}

	$(document).scroll(function() {
		if (top.location.pathname === '/') {
			if (($(document).scrollTop() + 80) >= $('#home-canvas-two').offset().top) {
				$('#bar1').css("background-color", "#333333");
	        	$('#bar2').css("background-color", "#333333");
			} else {
				$('#bar1').css("background-color", "white");
	        	$('#bar2').css("background-color", "white");
			}
		}
	});

	// Project Selector Background Image Code

	$('.project-link').mouseover(
		function() {
			var canvasName = $(this).parents(".background-image").attr('id');
			var project = $(this).attr('name');
			var bgImagePrefix = $(this).parent().attr('name');
			var bgImage = "#" + bgImagePrefix + project;
			$(bgImage).css("opacity", 1);
			$('.' + canvasName + '-project-name').css("color", "white");
			$('.' + canvasName + '-project-header').css("color", "white");
			$("#" + canvasName + "-header").css("color", "white");
			$("#" + canvasName + "-subheader").css("color", "white");

			var outterThis = $(this);
			$(this).parent().parent().find(".project-link").each(function() {
				if(outterThis[0] != $(this)[0]) {
					$(this).find('div').css({"opacity": ".3", "transition": "opacity .35s cubic-bezier(.39,.575,.565,1)"});
				}
			})			
		}
	);

	$('.project-link').mouseout(
		function() {
			var canvasName = $(this).parents(".background-image").attr('id');
			var project = $(this).attr('name');
			var bgImagePrefix = $(this).parent().attr('name');
			var bgImage = "#" + bgImagePrefix + project;
			$(bgImage).css("opacity", 0);
			$('.' + canvasName + '-project-name').css("color", "#333333");
			$('.' + canvasName + '-project-header').css("color", "#B3B3B3");
			$('#' + canvasName + '-header').css("color", "#333333");
			$('#' + canvasName + '-subheader').css("color", "#B3B3B3");

			var outterThis = $(this);
			$(this).parent().parent().find(".project-link").each(function() {
				if(outterThis[0] != $(this)[0]) {
					$(this).find('div').css("opacity", "1");
				}
			})
		}
	);

	// Disable Scrollify on landscape mode
	if (isMobile() && isLandscape()) {
		disableScrollifyEnableScrolling();
	}


	

	// Nav Menu Code

	// Code for Orientation Change
	$( window ).on( "orientationchange", function( event ) {
		setTimeout(orientationChangeStyles, 100);
	});

	
	$('#hamburger-menu-container').click(function() {
		toggleNavMenu();
	});

	$('#nav-overlay').click(function() {
		closeNavMenu();
	});

	$('#nav-link-one').click(function() {
		toggleNavMenu();
		if ($.scrollify.isDisabled()) {
			$.scrollify.enable();
			$.scrollify.move(1);
			$.scrollify.disable();
		} else {
			$.scrollify.move(1);
		}
		
		
	});
	$('#nav-link-two').click(function() {
		toggleNavMenu();
	});
	$('#nav-link-three').click(function() {
		toggleNavMenu();
	});
	$('#nav-link-four').click(function() {
		toggleNavMenu();
	});
	$('#nav-link-five').click(function() {
		toggleNavMenu();
	});
	$('#nav-link-six').click(function() {
		toggleNavMenu();
	});
	$('#nav-link-seven').click(function() {
		toggleNavMenu();
	});



});




function orientationChangeStyles() {
	if (isMobile()) {
		if (isLandscape()) {
			if (navMenuOpen) {
				$('#top-nav').css("height", "100vh");
				disableScroll();
			} else {
				disableScrollifyEnableScrolling();
			}
		} else {
			if (navMenuOpen) {
				$('#top-nav').css("height", "90vh");
				disableScroll();
			} else {
				$.scrollify.enable();
			}
		}
	}
}



function disableScrollifyEnableScrolling() {
	//enable vertical scrolling
	$('body').css("overflow-y", "scroll");
	//Disable Scrollify
	$.scrollify.disable();
}




function disableScroll() {
	$('body').css("overflow-y", "hidden");
	$.scrollify.disable();
}

function enableScroll() {
	if (isMobile() && isLandscape()) {
		$('body').css("overflow-y", "scroll");
	} else {
		$.scrollify.enable();
		$('body').css("overflow-y", "scroll");
	}
}



var navMenuOpen = false;
var menuBtnIsX = false;

function hamburgerMenuAnimation() {
	$('#bar1').toggleClass("active"); 
	$('#bar2').toggleClass("active");
}

function homeBtnAnimation() {
	$('#home-btn').css("color", "#333333"); 
}

function closeNavMenu() {
	hamburgerMenuAnimation();
	resetNavAnimations();
	enableScroll();
	if (top.location.pathname === '/about/' || top.location.pathname === '/contact/' || top.location.pathname === '/404.html/') {
		$('#home-btn').css("color", "#ffffff");
	}
	navMenuOpen = false;
	menuBtnIsX = true;
	$(function () {
		$("#top-nav").animate({
	    	opacity: 0,
	    	height: "0vh"
	    }, { duration: 500, specialEasing: {opacity: "easeOutQuart", height: "easeOutQuart"}, queue: false });

	    $("#nav-overlay").animate({
	       opacity: 0
	    }, { duration: 500, queue: false }, fadeNavMenuOut());
	    $('#nav-overlay').css("display", "none");
	    
	});
}

function openNavMenu() {
	hamburgerMenuAnimation();
	resetNavAnimations();
	disableScroll();
	if ($(document).scrollTop() == 0 && top.location.pathname != '/') {
		$('#nav-home-btn').hide(0);
	} else {
		$('#nav-home-btn').show()
	}
	navMenuOpen = true;
	$('#nav-overlay').css({"top": $(document).scrollTop(), "display": "inline"});
	

	if (top.location.pathname === '/about/' || top.location.pathname === '/contact/' || top.location.pathname === '/404.html/') {
		$('#home-btn').css("color", "#333333");
	}


	$(function() {
	    $('#nav-overlay').animate({
	       opacity: .25
	    }, { duration: 500, queue: false });

	    // If in landscape mode

	    if (isMobile() && isLandscape()) {
	    	$('#top-nav').animate({
		    	opacity: 1,
		    	height: "100vh"
		    }, { duration: 600, specialEasing: { opacity: "easeOutQuart", height: "easeOutQuart" }, queue: false }, fadeNavMenuIn());
	    } else {
	    	$('#top-nav').animate({
		    	opacity: 1,
		    	height: "90vh"
		    }, { duration: 600, specialEasing: { opacity: "easeOutQuart", height: "easeOutQuart" }, queue: false }, fadeNavMenuIn());
	    }
	});
}


function toggleNavMenu() {
	if (navMenuOpen) {
		closeNavMenu();
	} else {
		openNavMenu();
	}
}

function resetNavAnimations() {
	$('#top-nav').stop();
	$("#nav-overlay").stop();
	$('#nav-link-one').finish();
	$('#nav-link-two').finish();
	$('#nav-link-three').finish();
	$("#nav-link-four").finish();
	$('#nav-link-five').finish();
	$('#nav-link-six').finish();
	$('#nav-link-seven').finish();
	$('#say-hello-container').finish();
}

function fadeNavMenuIn() {

	$('#nav-link-one').delay(300).animate({
		opacity: 1
	}, 200);

	$('#nav-link-two').delay(400).animate({
		opacity: 1
	}, 300);

	$('#nav-link-three').delay(500).animate({
		opacity: 1
	}, 800);

	$('#nav-link-four').delay(600).animate({
		opacity: 1
	}, 200);

	$('#nav-link-five').delay(700).animate({
		opacity: 1
	}, 300);

	$('#nav-link-six').delay(800).animate({
		opacity: 1
	}, 400);
	$('#nav-link-seven').delay(900).animate({
		opacity: 1
	}, 600);
	$('#say-hello-container').delay(600).animate({
		opacity: 1
	}, 1500);
}

function fadeNavMenuOut() {
	$('#nav-link-one').animate({
		opacity: 0
	}, { duration: 100, queue: false });
	$('#nav-link-two').animate({
		opacity: 0
	}, { duration: 100, queue: false });
	$('#nav-link-three').animate({
		opacity: 0
	}, { duration: 100, queue: false });
	$('#nav-link-four').animate({
		opacity: 0
	}, { duration: 100, queue: false });
	$('#nav-link-five').animate({
		opacity: 0
	}, { duration: 100, queue: false });
	$('#nav-link-six').animate({
		opacity: 0
	}, { duration: 100, queue: false });
	$('#nav-link-seven').animate({
		opacity: 0
	}, { duration: 100, queue: false });
	$('#say-hello-container').animate({
		opacity: 0
	}, { duration: 100, queue: false });

}


