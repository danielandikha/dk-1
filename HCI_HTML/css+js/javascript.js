$(document).ready(function() {
	var title = $("title").html();
	if(title === 'Tramedia - Home'){
		if($('#home_id').attr('class') === 'a home'){
			$('#home_id').attr('class','a-active');
		}
	}else if(title ==='Tramedia - About'){
		console.log($('#about_id').attr('class'));
		if($('#about_id').attr('class') === 'a about'){
			$('#about_id').attr('class','a-active');
		}
	}else if(title ==='Tramedia - Join Us'){
		if($('#join_id').attr('class') === 'a join'){
			$('#join_id').attr('class','a-active');
		}
	}else if(title === 'Tramedia - Books'){
		if($('#drp-id').attr('class') === 'dropdown'){
			console.log("msk");
			$('#drp-id').addClass('a-active');
		}
	}

	var footer = $("#footer_info");
	var year = new Date().getFullYear();
	var footer_isi = "&copy; Tramedia - "+year;
	footer.html(footer_isi);


	$('#drp-id').click(function (e){
		e.stopPropagation();
		if($('#drp-content').attr('class') === 'dropdown-content'){
			$('#drp-content').addClass('dropdown-active');
		}
	});

	$(document).click(function (){
		if($('#drp-content').attr('class') !== 'dropdown-content'){
			$('#drp-content').attr('class','dropdown-content');
		}
	});
	if($("body").height() > $(window).height()){
		console.log("msk");
		if($('footer').attr('class') == 'footer-not-scroll'){
			$('footer').attr('class','footer-scroll');
		}
	}else{
		if($('footer').attr('class') !== 'footer-scroll'){
			$('footer').attr('class','footer-not-scroll');
		}
	}
});