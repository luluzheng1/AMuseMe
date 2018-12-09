$(document).ready(function() {
	var my_func = new spotifyPlayer('country', 5);

	my_func.initList();

	// $("#player").attr('src', my_func.getPlayerURL());
	$("#next").click(function() {
		my_func.next();
		console.log(my_func.getPlayerURL());
		$("audio").attr('src', my_func.getPlayerURL());
	});

	$("#check").click(function() {
		let answer = $("input#user_answer").val();
		let result = my_func.checkAnswer(answer);
		console.log(result.isCorrect);
		console.log(result.hint);
	})
});
