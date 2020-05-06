$(function(){
	
	$('.menu-burger').on('click', function(){
		
		$('.nav-menu').slideToggle(300, function(){
			
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
		}
		
	});
	
 });
	
});