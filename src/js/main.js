$( document ).ready(function() {
    console.log( "ready!" );

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