$(document).ready(function(){
	$(".fadeIn").hide(0).delay(250).fadeIn(500);
});

jQuery(window).scroll(function(){
    var fromTop = 300;
    var scrolledFromTop = jQuery(window).scrollTop();
    if(scrolledFromTop > fromTop){
        jQuery("#back").addClass('blueColor');
		$(".content").css('opacity', '1.0');
		$("#downArrow").css('opacity', '0.0');
    }else{
        jQuery("#back").removeClass('blueColor');
		$(".content").css('opacity', '0.0');
		$("#downArrow").css('opacity', '1.0');
    }
});

$("li a").on("click", function (e) {

	e.preventDefault();
	console.log("Hey you clicked me!");
	const href = $(this).attr('href');
	console.log(href);
	window.history.pushState(null, null, href);
	$("li a").removeClass("active");
	$(this).addClass("active");
	$.ajax({
		url: href,
		success: function (data) {
			$("section").fadeOut(250, function () {
				const newPage = $(data).filter("section").html();
				$("section").html(newPage);
				$("section").fadeIn(250);
			});
		}
	});
});
