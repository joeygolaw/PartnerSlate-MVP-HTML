/* Toggle Panels */
$(".toggle").click(function() {
	$(this).siblings(".ps-panel-list").toggleClass("hidden");
	$(this).parent().toggleClass("toggled");
	});

/* Closable Panels */
$(".closable").click(function() {
	$(this).remove();
	});
/* Clear All Closables */
$(".clear-all-closable").click(function() {
	$(this).siblings(".closable").remove();
	$(this).remove();
	});


// ---------- Page Overlay
// Define Variables
var $pageOverlay = $(".ps-page-overlay");
var $popoverPanel = $(".ps-popover", $pageOverlay);
var $inquireButton = $("#ps-send-inquiry");
var $pageDimmer = $(".page-dimmer");

// Center Popover Panel
$($popoverPanel, $pageOverlay).css({
	"margin-left" : -$popoverPanel.width()/2,
	"margin-top" : -$popoverPanel.height()/2
	});

// Show Overlay
function showOverlay() {
	$('body').addClass("page-overlay");
	$pageOverlay.css({"z-index": "1000"}).animate({opacity: 1.0});
	$popoverPanel.animate({opacity: 1.0}, 100);
	};
$inquireButton.on('click', showOverlay);

// Hide Overlay
function hideOverlay() {
	$('body').removeClass("page-overlay");
	$pageOverlay.css({"z-index": "-1", "opacity": "0"});
	};
$pageDimmer.on('click', hideOverlay);


// ---------- Page Topbar
// User Menu
$(".ps-user-menu").click(function(){ 
	$(this).toggleClass("toggled");
	return false;
	});
// Sticky Nav
$(window).scroll(function() {
	var offset = 0;
	var sticky = false;
	var topWindow = $(window).scrollTop();
	var $pageHeader = $("#ps-page-header");

	if ($(".slider-message").offset().top < topWindow) {
		$pageHeader.addClass("fixed");
		sticky = true;
		}
	else {
		$pageHeader.removeClass("fixed");
		}
		});


// ---------- Miscellaneous
// Custom Dropdown Input
$(".dropdown-field").click(function(){ 
	$(this).toggleClass("toggled").children(".dropdown-options");
	});

// Star Icon Toggle
$(".fa.fa-star-o").click(function(){
	$(this).toggleClass("fa-star-o").toggleClass("fa-star").toggleClass("toggled");
	});
$(".fa.fa-star").click(function(){
	$(this).toggleClass("fa-star").toggleClass("fa-star-o").toggleClass("toggled");
	});

// Anchor Smooth-Scroll
$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$("[name="+this.hash.slice(1)+"]");if(target.length){$("html,body").animate({scrollTop:target.offset().top},480);return false;}}});});