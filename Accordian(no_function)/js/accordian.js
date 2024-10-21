$(document).ready(function(){

	$("#accordion>h3").click(function(event){

		if($(this).next().hasClass('active'))
		{
			$(this).next().removeClass('active');
		}
		else
		{
			$("h3").next().removeClass('active');
			$(this).next().addClass('active');
		}
	});

});


