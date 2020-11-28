$(document).ready(function(){
	$(".fadeIn").hide(0).delay(250).fadeIn(500);
});

//Function to show hide content and change background
jQuery(window).scroll(function(){
	var fromTop = 300;
	var scrolledFromTop = jQuery(window).scrollTop();
	if(scrolledFromTop > fromTop){
		jQuery("#back").addClass('backColor');
		jQuery(".menu").addClass('backdrop');
		$("#contentPanel").css('opacity', '1.0');
		$("#downArrow").css('opacity', '0.0');
		$("#navArrow").css('z-index', '-1');

	}else{
		jQuery("#back").removeClass('backColor');
		jQuery(".menu").removeClass('backdrop');
		$("#contentPanel").css('opacity', '0.0');
		$("#downArrow").css('opacity', '1.0');
		$("#navArrow").css('z-index', '1');
	}
});

//Function to load html data without reloading entire page for fast browsing
$("li a").on("click", function (e) {

	e.preventDefault();
	console.log("Hey you clicked me!");
	const href = $(this).attr('href');
	console.log(href);
	$("li a").removeClass("active");
	$(this).addClass("active");
	if($(".barFill").is(':visible')) {
		console.log("hiding");
		$(".container")[0].classList.toggle("change");
		$(".menu li").removeClass('vis');
	}
	window.history.pushState(null, null, href);
	$.ajax({
		url: href,
		success: function (data) {
			$("section").fadeOut(250, function () {
				const newPage = $(data).filter("section").html();
				$("section").html(newPage);
				jQuery(window).scrollTop(0);
				$("section").fadeIn(250);
			});
		}
	});
});

//Functions to scroll without updating url with suffix
$("#downArrow").on("click", function (e) {
	e.preventDefault();
	document.getElementById('contentPanel').scrollIntoView(true);
});

function topScroller() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Function for controlling the menu icon
function menuController(x) {
	if(x.classList.toggle("change"))
	{
		$(".menu li").addClass('vis');
	} else {
		$(".menu li").removeClass('vis');
	}

}
