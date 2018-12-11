$(document).ready(function() {
	var my_func = new spotifyPlayer('classical', 5);

	my_func.initList();

	// $("#player").attr('src', my_func.getPlayerURL());
	$("#next").click(function() {
		my_func.next();
		var url = my_func.getPlayerURL();
		$("audio").attr('src', url);
	});

	$("#check").click(function() {
		let answer = $("input#user_answer").val();
		let result = my_func.checkAnswer(answer);
		console.log(result.isCorrect);
		console.log(result.hint);
	})
});
