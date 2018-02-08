$(window).on('load', function(){
	// Animate loader off screen
	// $("#loader").fadeOut("slow");
	// Fade in on Pageload
	// $(function() {
	// 	$('body').css("overflow-y", "scroll")
	//     $('#body-container').removeClass('fade-out');
	// });
	// $("#loader").fadeOut("slow");
	// $("#loader").css("display", "none");
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



var baseURL = "";

$( document ).ready(function() {
	$("#loader").fadeOut("slow");
	$("#loader").css("display", "none");
	$(function() {
		$('body').css("overflow-y", "scroll")
	    $('#body-container').removeClass('fade-out');
	});
	// Medium Image Zoom
	// !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.mediumZoom=t()}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t=function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)},o=["IMG"],n=[27,81],i=function(e){return o.includes(e.tagName)},r=function(e){return e.naturalWidth!==e.width},d=function(e){return NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e)},a=function(e){return e&&1===e.nodeType},l=function(l){var m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=m.margin,s=void 0===c?0:c,u=m.background,f=void 0===u?"#fff":u,p=m.scrollOffset,v=void 0===p?48:p,g=m.metaClick,h=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+l+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},y=function(){if(x.original){if(x.original.dispatchEvent(new Event("show")),N=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,S=!0,x.zoomed=h(x.original),document.body.appendChild(A),O.template){var e=a(O.template)?O.template:document.querySelector(O.template);x.template=document.createElement("div"),x.template.appendChild(e.content.cloneNode(!0)),document.body.appendChild(x.template)}if(document.body.appendChild(x.zoomed),requestAnimationFrame(function(){document.body.classList.add("medium-zoom--open")}),x.original.style.visibility="hidden",x.zoomed.classList.add("medium-zoom-image--open"),x.zoomed.addEventListener("click",z),x.zoomed.addEventListener("transitionend",w),x.original.getAttribute("data-zoom-target")){x.zoomedHd=x.zoomed.cloneNode(),x.zoomedHd.src=x.zoomed.getAttribute("data-zoom-target"),x.zoomedHd.onerror=function(){clearInterval(t),console.error("Unable to reach the zoom image target "+x.zoomedHd.src),x.zoomedHd=null,k()};var t=setInterval(function(){x.zoomedHd.naturalWidth&&(clearInterval(t),x.zoomedHd.classList.add("medium-zoom-image--open"),x.zoomedHd.addEventListener("click",z),document.body.appendChild(x.zoomedHd),k())},10)}else k()}},z=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=function(){!S&&x.original&&(x.original.dispatchEvent(new Event("hide")),S=!0,document.body.classList.remove("medium-zoom--open"),x.zoomed.style.transform="",x.zoomedHd&&(x.zoomedHd.style.transform="",x.zoomedHd.removeEventListener("click",e)),x.template&&(x.template.style.transition="opacity 150ms",x.template.style.opacity=0),x.zoomed.removeEventListener("click",e),x.zoomed.addEventListener("transitionend",L))};t>0?setTimeout(o,t):o()},E=function(e){e&&e.target?(x.original=e.target,y()):x.original?z():(x.original=T[0],y())},b=function(e){if((e.metaKey||e.ctrlKey)&&O.metaClick)return window.open(e.target.getAttribute("data-original")||e.target.parentNode.href||e.target.src,"_blank");e.preventDefault(),E(e)},w=function e(){S=!1,x.zoomed.removeEventListener("transitionend",e),x.original.dispatchEvent(new Event("shown"))},L=function e(){x.original&&(x.original.style.visibility="",document.body.removeChild(x.zoomed),x.zoomedHd&&document.body.removeChild(x.zoomedHd),document.body.removeChild(A),x.zoomed.classList.remove("medium-zoom-image--open"),x.template&&document.body.removeChild(x.template),S=!1,x.zoomed.removeEventListener("transitionend",e),x.original.dispatchEvent(new Event("hidden")),x.original=null,x.zoomed=null,x.zoomedHd=null,x.template=null)},C=function(){if(!S&&x.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(N-e)>O.scrollOffset&&z(150)}},H=function(e){n.includes(e.keyCode||e.which)&&z()},k=function(){if(x.original){var t={width:window.innerWidth,height:window.innerHeight,left:0,top:0,right:0,bottom:0},o=void 0,n=void 0;if(O.container)if(O.container instanceof Object)e(t,O.container),o=t.width-t.left-t.right-2*O.margin,n=t.height-t.top-t.bottom-2*O.margin;else{var i=(a(O.container)?O.container:document.querySelector(O.container)).getBoundingClientRect(),r=i.width,d=i.height,l=i.left,m=i.top;e(t,{width:r,height:d,left:l,top:m})}o=o||t.width-2*O.margin,n=n||t.height-2*O.margin;var c=x.zoomedHd||x.original,s=c.naturalWidth,u=void 0===s?o:s,f=c.naturalHeight,p=void 0===f?n:f,v=c.getBoundingClientRect(),g=v.top,h=v.left,y=v.width,z=v.height,E=Math.min(u,o)/y,b=Math.min(p,n)/z,w=Math.min(E,b)||1,L="scale("+w+") translate3d("+((o-y)/2-h+O.margin+t.left)/w+"px, "+((n-z)/2-g+O.margin+t.top)/w+"px, 0)";x.zoomed.style.transform=L,x.zoomedHd&&(x.zoomedHd.style.transform=L)}},O={margin:s,background:f,scrollOffset:v,metaClick:void 0===g||g,container:m.container,template:m.template};l instanceof Object&&e(O,l);var T=function(e){try{return Array.isArray(e)?e.filter(i):d(e)?[].concat(t(e)).filter(i):a(e)?[e].filter(i):"string"==typeof e?[].concat(t(document.querySelectorAll(e))).filter(i):[].concat(t(document.querySelectorAll(o.map(function(e){return e.toLowerCase()}).join(",")))).filter(r)}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList, an HTMLCollection or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}}(l),A=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.backgroundColor=e,t}(O.background),x={original:null,zoomed:null,zoomedHd:null,template:null},N=0,S=!1;return T.forEach(function(e){e.classList.add("medium-zoom-image"),e.addEventListener("click",b)}),A.addEventListener("click",z),document.addEventListener("scroll",C),document.addEventListener("keyup",H),window.addEventListener("resize",z),{show:E,hide:z,toggle:E,update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.background&&(A.style.backgroundColor=t.background),t.container&&t.container instanceof Object&&(t.container=e({},O.container,t.container)),e(O,t)},addEventListeners:function(e,t){T.forEach(function(o){o.addEventListener(e,t)})},detach:function(){var e=function e(){var t=new Event("detach");T.forEach(function(e){e.classList.remove("medium-zoom-image"),e.removeEventListener("click",b),e.dispatchEvent(t)}),T.splice(0,T.length),A.removeEventListener("click",z),document.removeEventListener("scroll",C),document.removeEventListener("keyup",H),window.removeEventListener("resize",z),x.zoomed&&x.zoomed.removeEventListener("transitionend",e)};x.zoomed?(z(),x.zoomed.addEventListener("transitionend",requestAnimationFrame(e))):e()},images:T,options:O}},m=Object.freeze({default:l});return function(e,t){if("undefined"==typeof document)return t;e=e||"";var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--open .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s}.medium-zoom-image--open{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}",void 0),m&&l||m});
	(function() {
	  // Add zooms to a container
	  var containerZoom = [
	    mediumZoom('#zoom-default')
	  ]
	})()


    // FadeIn/FadeOut Lumi Iterations Images
	var lumiIterationsFadeInterval;
	if(isMobile()) {
		console.log("begin fade effect");
	   lumiIterationsFadeInterval = setInterval(function(){ 
			$('.cf-control').toggleClass("cf-top-hover-mobile");
			$('.cf-control').toggleClass("cf-top");
		}, 1500);
	} else {
		clearInterval(lumiIterationsFadeInterval);
	}

	

	// Black Background Code TODO: add 404, make this if any page but home/side-projects/work then
	if (top.location.pathname === baseURL + '/about/' || top.location.pathname === baseURL + '/contact/' || top.location.pathname === baseURL + '/404.html') {
		$('#home-btn').css("color", "white");
		$('#bar1').css("background-color", "white");
	    $('#bar2').css("background-color", "white");
	}

	//TODO: combine this with above
	// Scroll Code
	if (top.location.pathname === baseURL + '/') {
		$('#home-btn').hide();	
        if ($(document).scrollTop() >= $('#home-canvas-two').offset().top) {
			$('#bar1').css("background-color", "#333333");
        	$('#bar2').css("background-color", "#333333");
        } else {
        	$('#bar1').css("background-color", "white");
	        $('#bar2').css("background-color", "white");
        }
	} else if (top.location.pathname === baseURL + '/about/' || top.location.pathname === baseURL + '/contact/' || top.location.pathname === baseURL + '/404.html') {
		$('#bar1').css("background-color", "white");
        $('#bar2').css("background-color", "white");
	} else {
		$('#bar1').css("background-color", "#333333");
        $('#bar2').css("background-color", "#333333");
	}

	$(document).scroll(function() {
		if (top.location.pathname === baseURL + '/') {
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
	$('#home-btn').css("visibility", "initial");
	if (top.location.pathname === baseURL + '/about/' || top.location.pathname === baseURL + '/contact/' || top.location.pathname === baseURL + '/404.html') {
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
	if ($(document).scrollTop() == 0 && top.location.pathname != baseURL + '/') {
		$('#nav-home-btn').hide();
		$('#home-btn').css("visibility", "initial");
	} else {
		$('#home-btn').css("visibility", "hidden");
		$('#nav-home-btn').show();
	}
	navMenuOpen = true;
	$('#nav-overlay').css({"top": $(document).scrollTop(), "display": "inline"});
	

	if (top.location.pathname === baseURL + '/about/' || top.location.pathname === baseURL + '/contact/' || top.location.pathname === baseURL + '/404.html') {
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


