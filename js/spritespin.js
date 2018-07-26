window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(function() {

	var spin = $('.celular');
	var scrolled = false;
	var flag = 0;
	
	spin.spritespin({
		source: SpriteSpin.sourceArray('images/frames/frame_{frame}.png', { frame: [0,49], digits: 4 }),
		frames: 50,
		frameTime: 35,
		animate:false,
		loop:false,
		responsive: true,
		sense: -1,
	});

	var api = spin.spritespin("api");

	spin.bind("onLoad", function(){
		var data = api.data;
	}).bind("onFrame", function(){
		var data = api.data;
		if(data.frame > 0 && data.frame < 25){
			$('.bloque-texto-1').fadeIn();
			$('.bloque-texto-2').fadeOut();
		}
		if(data.frame >=25 && data.frame < 50){
			$('.bloque-texto-2').fadeIn();
			$('.bloque-texto-1').fadeOut();
		}
	});

	


	$(window).on('scroll', function(){
		var scroll = $(this).scrollTop();
		if(parseInt(scroll) > 750){
			if(flag == 0 && scrolled == false){
				console.log('lo hice');
				$('html, body').animate({scrollTop: $('#bloque-3').offset().top}, 2000);
				flag = 1;
				spin.spritespin({animate:true})
				.animate({
					top: "+800",
				}, 2000, function() {
					scrolled = true;
					flag = 0;
				});
			}
		}
	});

});