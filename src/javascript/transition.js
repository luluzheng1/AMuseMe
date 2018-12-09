//changes audio
var change = document.getElementById('change');

var player = new spotifyPlayer('pop', 10);

function changeAudioElement(){
  //e.preventDefault();

  //var elm = e.target;
  var audio = document.getElementById('audio');

  var source = document.getElementById('audioSource');
  source.src = player.getPlayerURL();

  audio.load(); //call this to just preload the audio without playing
  audio.play(); //call this to play the song right away
}

change.onload = function() {
    player.initList();
 
}

// $(document).ready(function() {
//     player.initList();
// })

var start = document.getElementById('strBtn');

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the button that closes the modal
var close = document.getElementById("close");

var cont = document.getElementById("continue");

var userinput = "";

var score = 0;

var num_wrong = 0;

//player object; name is inherited from index.js
var this_player = {
	thename: name,
	thescore: score,
	nwrong: num_wrong
};

// When the user clicks the button, open the modal 
btn.onclick = function() {

	userinput = document.getElementById("myanswer").value;
	userinput = userinput.replace(/[^\w\s]/gi, ''); 

    alert(userinput);

    modal.style.display = "block";

    if(userinput == SONGNAME)
    {
    	this_player.thescore++;
    }

    else
    {
    	this_player.nwrong++;
    }


}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
    window.location.assign("homepage.html");
}

cont.onclick= function() {
	modal.style.display = "none";
	//window.location.reload();
    player.next();
    changeAudioElement();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

start.onclick = function() {
    changeAudioElement();
}

