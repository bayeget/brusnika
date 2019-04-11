$(function() {


	// swiper
	// var mySwiper = new Swiper ('.swiper-container', {
	//     // If we need pagination
	//     pagination: {
	//       el: '.swiper-pagination',

	//     },

	//     // Navigation arrows
	//     navigation: {
	//       nextEl: '.swiper-button-next',
	//       prevEl: '.swiper-button-prev',
	//     },

	//     // And if we need scrollbar
	//     scrollbar: {
	//       el: '.swiper-scrollbar',
	//     },
	//     speed: 800,
	//     autoplay: {
	//     	delay: 6000,
	//     	waitForTransition: false,
	//     },
	//     effect: 'fade',
	//     loop: true,

	//   })
	// isotope install
	$('.grid').isotope({
	  // options
	  itemSelector: '.grid-item',
  	  layoutMode: 'fitRows'
	});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	// youtube bg

$('#module-video').YTPlayer({
    fitToBackground: false,
    videoId: 'WMrlgUlw1QI',
    pauseOnScroll: false,
    origin: 'http://rochestb.github.io/jQuery.YoutubeBackground/',
    playerVars: {
      modestbranding: 0,
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      branding: 0,
      rel: 0,
      autohide: 0
    }
  });
      
	$('#background-video').YTPlayer({
		fitToBackground: false,
		videoId: 'Fk9EBOOAYiU',
		pauseOnScroll: false,
		
	});
      
	

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
