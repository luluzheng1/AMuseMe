// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the button that closes the modal
var close = document.getElementById("close");

var cont = document.getElementById("continue");

var userinput = "";

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
	nwrong: num_wrong
};

// When the user clicks the button, open the modal 
btn.onclick = function() {
    
	userinput = document.getElementById("myanswer").value;
	userinput = userinput.replace(/[^\w\s]/gi, ''); 


    modal.style.display = "block";
    SONGNAME = "test1";
    if(userinput == SONGNAME)
    {
    	this_player.thescore++;

        //Save new score in localStorage
        localStorage.score = this_player.thescore;
    }

    else
    {
    	this_player.nwrong++;
        //Save number wrong in localStorage
        localStorage.num_wrong = this_player.nwrong;
    }

    //Verify score is rememberered. WHere to reset to 0?
    alert(userinput + " score / wrong = " + localStorage.score + ' ' + localStorage.num_wrong);
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {

    //code will be added here to submit to database
    //reset score so for next round it restarts at 0
    localStorage.score = 0;
    localStorage.num_wrong = 0;

    modal.style.display = "none";
    window.location.assign("/");
}

cont.onclick= function() {
	modal.style.display = "none";
	window.location.reload() ;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

