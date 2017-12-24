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


	// Project Selector Background Image Code

	$('.project-background-image').mouseover(
		function() {
			var project = this.getAttribute('name');
			var bgImage = "#home-canvas-two-bg-image-" + project;

			$(bgImage).css("opacity", 1);
			$(this).find('div').children().each(function() {
				console.log(this.value);
			});
			$('#canvas-two-header').css("color", "white");
			$('#canvas-two-subheader').css("color", "white");
			$('#project-container').css("color", "white");
			// var imageURL = fetchImageURL(project);
			// $('#home-canvas-two-bg-image').css("background-image", "url(" + imageURL + ")");
			// $('#home-canvas-two-bg-image').css("opacity", "1");
				// "background-position", "center",
				// "background-size", "cover"
			// );
		}
	);

	$('.project-background-image').mouseout(
		function() {
			var project = this.getAttribute('name');
			var bgImage = "#home-canvas-two-bg-image-" + project;
			$(bgImage).css("opacity", 0);
			$('#canvas-two-header').css("color", "#333333");
			$('#canvas-two-subheader').css("color", "#B3B3B3");
			// $('#home-canvas-two-bg-image').css("opacity", "0");
			// $('#home-canvas-two-bg-image').css("background-image", "none");

		}
	);

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