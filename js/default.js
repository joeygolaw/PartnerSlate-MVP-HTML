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

/* Page Topbar, User Menu */
$(".ps-user-menu").click(function(){ 
	$(this).toggleClass("toggled");
	return false;
	});
/* Custom Dropdown Input */
$(".dropdown-field").click(function(){ 
	$(this).toggleClass("toggled").children(".dropdown-options");
	});

/* Star icon toggle */
$(".fa.fa-star-o").click(function(){
	$(this).toggleClass("fa-star-o").toggleClass("fa-star").toggleClass("toggled");
	});
$(".fa.fa-star").click(function(){
	$(this).toggleClass("fa-star").toggleClass("fa-star-o").toggleClass("toggled");
	});

/*Anchor Smooth-Scroll*/
$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$("[name="+this.hash.slice(1)+"]");if(target.length){$("html,body").animate({scrollTop:target.offset().top},480);return false;}}});});

/* Page Overlay, close when clicked outside */
$(".page-dimmer").click(function() {
	$(this).parent().remove();
	});