$(document).ready(function() {
	var my_func = new spotifyPlayer('country', 5);

	my_func.initList();

	// $("#player").attr('src', my_func.getPlayerURL());
	$("button").click(function() {
		my_func.next();
		console.log(my_func.getPlayerURL());
		$("audio").attr('src', my_func.getPlayerURL());
	});
});

