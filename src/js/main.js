$( document ).ready(function() {
    console.log( "ready!" );

    $('.home-tile').hover(
    	function() {
    		console.log("hello");
	    	var $homeTileCaption = $(this).find('.home-tile-caption');
	    	$homeTileCaption.removeClass("faded-out");
	    	$homeTileCaption.addClass("faded-in");
	    }, function() {
	    	var $homeTileCaption = $(this).find('.home-tile-caption');
	    	$homeTileCaption.addClass("faded-out");
	    	$homeTileCaption.removeClass("faded-in");
	    }
    );
});