 $(function()
 {
	//When navigation button is clicked, give it the active class.
	$('nav li').on('click',function()
	{
		$('nav li').removeClass('active');
		if(!($(this).attr("class") == "active"))
		{
			$(this).addClass("active");	
		}
	});
 });