$(window).on('load', function(){
	// Animate loader off screen
	$("#loader").fadeOut();
	// Fade in on Pageload
	$(function() {
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





$( document ).ready(function() {
	

	// Medium Image Zoom
	(function() {
	  // Add zooms to a container
	  var containerZoom = [
	    mediumZoom('#zoom-default')
	  ]

	})()

	console.log( "ready!" );

	// Scroll Code

	$("#homepage").ready(function() {
		console.log("homepage");
		$(function() {
          $.scrollify({
            section : ".canvas",
            interstitialSection: ".partial-canvas",
            scrollbars: false
          });
        });
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

			// console.log($(this).parent().find(".project-link"));
			var outterThis = $(this);
			$(this).parent().parent().find(".project-link").each(function() {
				if(outterThis[0] != $(this)[0]) {
					$(this).find('div').css({"opacity": ".3", "transition": "opacity .35s cubic-bezier(.39,.575,.565,1)"});
				}
			})
			// $(this).find(".project-link").each(function() {
			// 	$(this).find('div').css("opacity", ".3");
			// });

			// $(this).siblings().each(function() {
			// 	$(this).find('div').css("opacity", ".3");
			// });

			
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

			// $(this).siblings().each(function() {
			// 	$(this).find('div').css("opacity", "1");
			// });
		}
	);

	// Not using this code
	function fetchImageURL(projectName) {
		var url = "../images/";
		if ($(window).width() < gridBreakpoints['sm']) {
			console.log("sm");
			return url + projectName + "-cover-lg.jpg";
		} else if ($(window).width() < gridBreakpoints['md']) {
			console.log('md');
			return url + projectName + "-cover-md.jpg";
		} else if ($(window).width() < gridBreakpoints['lg']) {
			console.log('lg');
			return url + projectName + "-cover-lg.jpg";
		} else if ($(window).width() < gridBreakpoints['xl']) {
			console.log('xl');
			return url + projectName + "-cover-xl.jpg";
		} else {
			console.log('xxl');
			return url + projectName + "-cover-xxl.jpg";
		}
	}

	// Home Tile Hover Code
	$('.home-tile').hover(
		function() {
			console.log("hello");
			var $homeTileCaption = $(this).find('.home-tile-caption');
			$homeTileCaption.removeClass("faded-out");
			$homeTileCaption.addClass("faded-in");
		}, function() {
			var $homeTileCaption = $(this).find('.home-tile-caption');
			$homeTileCaption.addClass('faded-out');
			$homeTileCaption.removeClass('faded-in');
		}
	);



	// Nav Menu Code
	var navMenuOpen = false;
	var menuBtnIsX = false;
	var q = $('#hamburger-menu');
	$('#hamburger-menu').hover(

		// function() {
		// 	if (!$('#bar1').hasClass('animated')) {
		// 		$(this).find('#bar1').queue(function() {
		// 			animate({top: "6px"}, 1000).dequeue();
		// 		};
		// 		$(this).find('#bar2').queue(function() {
		// 			animate({top: "22px"}, 1000).dequeue();
		// 		};
		// 	}
		// },
		// function () {
		// 	$(this).find('#bar1').addClass('animated').animate({top: "8.5px"}, 1000, "linear");
		// 	$(this).find('#bar2').addClass('animated').animate({top: "19.5px"}, 1000, "linear", function() {
		// 		console.log("animated remove");
		// 		$('#bar1').removeClass('animated').dequeue();
		// 		$('#bar2').removeClass('animated').dequeue();
		// 	});	
		// }

		// Working hover effect
		function() {
			if (!$('#bar1').hasClass('animated')) {
				$(this).find('#bar1').animate({top: "6px"}, 1000);
				$(this).find('#bar2').animate({top: "22px"}, 1000);
			}
		},
		function() {
			$(this).find('#bar1').addClass('animated').animate({top: "8.5px"}, 1000, "linear");
			$(this).find('#bar2').addClass('animated').animate({top: "19.5px"}, 1000, "linear", function() {
				console.log("animated remove");
				$('#bar1').removeClass('animated').dequeue();
				$('#bar2').removeClass('animated').dequeue();
			});	
		}	
	);

	$('#hamburger-menu-container').click(function() {
		// $('#bar2').promise().done(function() {
		// 	$('#bar1').toggleClass("active", 1000, "ease-in-out"); 
		// 	$('#bar2').toggleClass("active", 1000, "ease-in-out");

		// });

		$('#bar1').queue(function() {
			toggleClass("active", 1000, "ease-in-out").dequeue(); 
		});
		$('#bar2').queue(function() {
			toggleClass("active", 1000, "ease-in-out").dequeue();
		});


		// q.queue(function(next) {
		// 	$("#bar1").toggleClass("active", 1000, "ease-in-out"); 
		// 	$("#bar2").toggleClass("active", 1000, "ease-in-out");
		// 	next(); 
		// });
		// return false;
		// if (menuBtnIsX) {
		// 	$("#bar1").toggleClass("active"); 
		// 	$("#bar2").toggleClass("active"); 
		// } else {
		// 	$('#bar1, #bar2').delay(1000).queue(function(next) {
		// 		$("#bar1").toggleClass("active"); 
		// 		$("#bar2").toggleClass("active"); 
		// 	});
		// }
		// $(this).find('#hamburger-menu').toggleClass('open');
		if (navMenuOpen) {
			$('#mySidenav').css('height', '0vh');
			$('#hamburger-menu div').css("background-color", "#ffffff");
			
			// $('#nav-container').css('position', 'absolute');
			navMenuOpen = false;
			menuBtnIsX = true;
		} else {
			$('#mySidenav').css('height', '90vh');
			$('#hamburger-menu div').css("background-color", "#333333");
			// $('#nav-container').css('position', 'fixed');
			navMenuOpen = true;

		}
		
			
	});

	$('.closebtn').click(function(){
		$('#mySidenav').css('height', '0vh');
			console.log(navMenuOpen);
			navMenuOpen = false;
			console.log(navMenuOpen);
	});



});

