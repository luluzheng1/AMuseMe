
// old code
//changes audio
var change = document.getElementById('change');

$('html').bind('keypress', function(e) {
    if (e.which === 13) {
        e.preventDefault();
        return false;
  }
});


var genreForRound = localStorage.getItem('genre');
console.log(genreForRound);
var genres = ["hip-hop", "pop", "classical", "country", "rock"];
if(genreForRound == "shuffle")
{
    var rand = genres[Math.floor(Math.random() * genres.length)];
    var player = new spotifyPlayer(rand, 10);
    console.log(rand);
}
else
    var player = new spotifyPlayer(genreForRound, 10);


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

//hint modal
var hintmodal = document.getElementById('hintModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the button that closes the modal
var close = document.getElementById("close");

var cont = document.getElementById("continue");

var hint = document.getElementById("hint");

var stay = document.getElementById("stay");

var userinput = "";

// Try to read the score from localStorage
// if not there then initalize it to 0
// NOTE; we need to reset this to 0 somewhere when we are done with score
var score = localStorage.getItem("score");
if (!score){
    score = 0;
    localStorage.setItem("score", score);
}

var num_wrong = localStorage.getItem("num_wrong");
if (!num_wrong){
    num_wrong = 0;
    localStorage.setItem("num_wrong", num_wrong);
}


var my_genre = localStorage.getItem("genre")
if (!my_genre)
    my_genre = "NA";

// Try to read the score from localStorage
// if not there then initalize it to 0
// NOTE; we need to reset this to 0 somewhere when we are done with score
var score = localStorage.getItem("score");
if (!score){
    score = 0;
    localStorage.setItem("score", score );
}

var num_wrong = localStorage.getItem("num_wrong");
if (!num_wrong){
    num_wrong = 0;
    localStorage.setItem("num_wrong", num_wrong);
}

//player object; name is inherited from index.js
var this_player = {
	thename: name,
	thescore: score,
	nwrong: num_wrong,
    thegenre: my_genre
};

// When the user clicks the button, open the modal 
// When the user clicks the button, open the modal 
btn.onclick = function() {
    audio.pause();
    userinput = document.getElementById("myanswer").value;

    //alert(userinput);

    modal.style.display = "block";
    let result = player.checkAnswer(userinput);
    console.log(result.isCorrect);
    console.log(result.hint);
    if(result.isCorrect)
    {
        let content = document.getElementById("answer");
      content.innerHTML = "<h1>Correct! </h1>" + "<h3> " + player.getSongName() + " by " + player.getArtist() + "</h3>";
        this_player.thescore++;
        (document.getElementById("score")).innerHTML = this_player.thescore;
         //Save new score in localStorage
    }
    //modal.style.display = "block";
    else
    {
        this_player.nwrong++;
        let content = document.getElementById("answer");
        var songname = player.getSongName();
        content.innerHTML = "<h1>Wrong, the song is " + songname + "</h1>" + "<h3>" + player.getSongName() + "by " + player.getArtist() + "</h3>" + "<h4>#wrong: " + this_player.nwrong + "</h4>";

        //Save number wrong in localStorage
        localStorage.num_wrong = this_player.nwrong;
        if(this_player.nwrong >= 5)
        {

          window.location.assign("stats.html")
        }
    }

    
}


// When the user clicks on <span> (x), close the modal
close.onclick = function() {


    //modal.style.display = "none";

    window.location.assign("stats.html");


}

//     //code will be added here to submit to database
//     playInsert = {
//         "username": this_player.thename,
//         "score": this_player.thescore,
//         "nwrong": this_player.nwrong,
//         "genre": this_player.thegenre
//     };


//     var jqxhr = $.ajax( {
//         url: "https://amuseme-trivia-game.herokuapp.com/submit",
//         type: "POST",
//         data:JSON.stringify(playInsert),
//         dataType: "json",
//         contentType: "application/json; charset==utf-8",
//         success: function(results, status) {
//             console.log("Posted to db successfully.")
//         },
//         error: function(jqxhr, ex) {
//             console.log("Error writing to database " + ex )
//             console.log("\n\n" | jqxhr)
//         }
//     });
//     jqxhr.always(function() {
//         //reset score so for next round it restarts at 0
//         alert( "Your final score is " + localStorage.score
//         + "    You had " + localStorage.num_wrong + " wrong answers");
//         localStorage.score = 0;
//         localStorage.num_wrong = 0;
//         modal.style.display = "none";
//         window.location.assign("homepage.html");
//     });
// };


cont.onclick= function() {
    modal.style.display = "none";
    //window.location.reload();
    player.next();
    changeAudioElement();
    document.getElementById("myform").reset();

}

stay.onclick=function() {
  hintmodal.style.display = "none";
}

start.onclick = function() {
    changeAudioElement();
    start.style.visibility = "hidden";
    hintcount = 0;
}

hint.onclick = function() {
      hintcount++;
      audio.pause();
      userinput = document.getElementById("myanswer").value;
      let result = player.checkAnswer(userinput);
      hintmodal.style.display = "block";
      let hintcontent = document.getElementById("hintanswer");
      var songname = result.hint;
      if (hintcount > 3)
        hintcontent.innerHTML = "<h1>No more hints!</h1>";
      else
        hintcontent.innerHTML = "<h1>Hint: " + songname + "</h1>";
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

