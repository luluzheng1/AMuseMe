//changes audio
var change = document.getElementById('change');

var player = new spotifyPlayer('pop', 10);

var isPlaying = false;
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
var stop = document.getElementById('stpBtn');
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
    audio.pause();
	userinput = document.getElementById("myanswer").value;
	userinput = userinput.replace(/[^\w\s]/gi, ''); 

    //alert(userinput);

    modal.style.display = "block";
    let result = player.checkAnswer(userinput);
    console.log(result.isCorrect);
    console.log(result.hint);
    if(result.isCorrect)
    {
        let content = document.getElementById("answer");
    	content.innerHTML = "<h1>Correct!</h1>";
        this_player.thescore++;
    }
    else
    {
        let content = document.getElementById("answer");
        var songname = player.getSongName();
        content.innerHTML = "<h1>Wrong, the song is " + songname + "</h1>";
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

var audio = document.getElementById('audio');
stop.onclick = function() {
    togglePlay();
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
};

audio.onplaying = function() {
  isPlaying = true;
};
audio.onpause = function() {
  isPlaying = false;
};
