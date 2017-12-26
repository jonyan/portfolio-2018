const gridBreakpoints = {
  'xs': 0,
  'sm': 576,
  'md': 768,
  'lg': 900,
  'xl': 1200,
  'xxl': 1600
};

$( document ).ready(function() {
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
			var canvasName = $(this).parents(".canvas").attr('id');
			var project = $(this).attr('name');
			var bgImagePrefix = $(this).parent().attr('name');
			var bgImage = "#" + bgImagePrefix + project;
			$(bgImage).css("opacity", 1);
			$('.' + canvasName + '-project-name').css("color", "white");
			$('.' + canvasName + '-project-type').css("color", "white");
			$("#" + canvasName + "-header").css("color", "white");
			$("#" + canvasName + "-subheader").css("color", "white");

			$(this).siblings().each(function() {
				$(this).find('div').css("opacity", ".3");
			});

			
		}
	);

	$('.project-link').mouseout(
		function() {
			var canvasName = $(this).parents(".canvas").attr('id');
			var project = $(this).attr('name');
			var bgImagePrefix = $(this).parent().attr('name');
			var bgImage = "#" + bgImagePrefix + project;
			$(bgImage).css("opacity", 0);
			$('.' + canvasName + '-project-name').css("color", "#333333");
			$('.' + canvasName + '-project-type').css("color", "#B3B3B3");
			$('#' + canvasName + '-header').css("color", "#333333");
			$('#' + canvasName + '-subheader').css("color", "#B3B3B3");

			$(this).siblings().each(function() {
				$(this).find('div').css("opacity", "1");
			});
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
	$('.hamburger-menu').click(function() {
			if (navMenuOpen) {
					$('#mySidenav').css('height', '0vh');
					// $('#nav-container').css('position', 'absolute');
					navMenuOpen = false;
			} else {
					$('#mySidenav').css('height', '90vh');
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



(function ($) {
  var ready = $.fn.ready;
  $.fn.ready = function (fn) {
    if (this.context === undefined) {
      // The $().ready(fn) case.
      ready(fn);
    } else if (this.selector) {
      ready($.proxy(function(){
        $(this.selector, this.context).each(fn);
      }, this));
    } else {
      ready($.proxy(function(){
        $(this).each(fn);
      }, this));
    }
  }
})(jQuery);