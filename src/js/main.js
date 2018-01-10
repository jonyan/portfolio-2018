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

	// Detect whether on mobile browser code
	

	if(jQuery.browser.mobile) {
	   setInterval(function(){ 
			$('.cf-top').toggleClass("cf-top-hover-mobile");
			$('.cf-top-hover-mobile').toggleClass("cf-top");
		}, 1500);
	}


	
	


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

(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
