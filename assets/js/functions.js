$( document ).ready(function() {

  $(window).scroll(function() {

  	//Activates when scrolling up and down
  	var wScroll = $(this).scrollTop();

  	if(wScroll > $('.newish').offset().top - $(window).height()) {

  		var offset = Math.min(0, wScroll - $('.newish').offset().top + $(window).height() - 600);

  			$('.post1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.5) +'px)'});
  			$('.post2').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.5) +'px)'});
  			$('.post3').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.5) +'px)'});
  			$('.post4').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.5) +'px)'});
  			$('.post5').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.5) +'px)'});
  			$('.post6').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.5) +'px)'});
  			$('.post7').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.5) +'px)'});
  			$('.post8').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.5) +'px)'});
  	}

  });

});
