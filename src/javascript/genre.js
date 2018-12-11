function sound(surl) 
{
	document.getElementById("myspan").innerHTML=
	"<embed src=\""+surl+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function stopSound(surl) 
{
	document.getElementById("myspan").innerHTML=
	"<embed src=\""+surl+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function saveGenre(clicked_id)
{
	var thegenre = clicked_id;
	console.log(thegenre);
	localStorage.setItem("genre", thegenre);

}
