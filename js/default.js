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
var $popoverPanel = $(".ps-popover");
var $inquireButton = $("#ps-send-inquiry");
var $pageDimmer = $(".page-dimmer");
var $pageHeader = $("#ps-page-header");

// Center Popover Panel
$($pageOverlay).each(function() {
	$(this).find($popoverPanel).css({
		"margin-left" : -$(this).find($popoverPanel).width()/2,
		"margin-top" : -$(this).find($popoverPanel).height()/2
		});
	});

// Show Overlay
function showOverlay(panelID) {
	$('body').addClass("page-overlay");
	$(panelID).css({"z-index": "9999"}).animate({opacity: 1.0});
	$(panelID).animate({opacity: 1.0}, 100);
	};

// Hide Overlay
function hideOverlay() {
	$('body').removeClass("page-overlay");
	$pageOverlay.css({"z-index": "-1", "opacity": "0"});
	};
$pageDimmer.on('click', hideOverlay);


// ---------- Page Topbar
// User Menu
$(".ps-user-menu > a").click(function(){ 
	$(this).parent().toggleClass("toggled");
	return false;
	});
// Sticky Nav
// JG**** Commented out 20150513 - Header now always has fixed class
// // IF user is logged in, do nothing
// if($('body').hasClass('user-logged-in')) {}
// // ELSE toggle fixed class on scroll
// else {
// 	$(window).scroll(function() {
// 		var offset = 0;
// 		var sticky = false;
// 		var topWindow = $(window).scrollTop();
//
// 		if (topWindow > 300) {
// 			$pageHeader.addClass("fixed");
// 			sticky = true;
// 			}
// 		else {
// 			$pageHeader.removeClass("fixed");
// 			}
// 		});
// 	};


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