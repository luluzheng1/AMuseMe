# Semester Project : Status Report 1

## What's been implemented
-------------------------------------------------------------------------------
For the week of 11/05 - 11/09, there were several major additions to the
project.
*	Set up the structure of the Github repo
*	Established basic dev dependencies in package.json
*	Uploaded any other relevant image files, including the logo
* 	Implemented a basic structure of a button that creates a pop up window
	-	Pop up displays "correct!" when clicked
		+	Pop up page facilitates the transition between each play in a round
		+	Button serves as an "Enter" key that the user presses when they 
			want to submit their guess of the name of the song. 
		+	Pop up button assumes that the user's answer is correct
*	Implemented an "x" button at the top right corner of the pop up window 
*	Set up local storage, it's ready to be added to login page
*	Created HTML, CSS and Javascript files for the homepage and the pop-up
	login window
*	Created web page where user chooses which genre quiz to take
	 -	There are currently six genres, each represented by an image that must 
	 be clicked
	 -	Each image is linked to the same HTML for the quiz
*	Created a simple logo for the app
*	Researched the Spotify API
-------------------------------------------------------------------------------


## Challenges
-------------------------------------------------------------------------------
*   It is hard to locate the chorus in order to play what is presumably the 
	most recognizable part of the song 
    -   Possible Solutons:
        +   Finding the chorus of a song with [audio analysis](https://towardsdatascience.com/finding-choruses-in-songs-with-python-a925165f94a8)
        +   Analyzing lyrics to determine repeating phrases and possibly the
        chorus
    -   Alternatives:
        +   Play first 15 seconds of song rather than the chorus. Much easier,
        possibly will not work well for certain songs, but rewards being able
        to identfy a song by not just the refrain (which is likely to be the
        name of the song)
*	How to pick a collection of songs for each genre?
    -	Possibly can randomly choose from genre playlists [already in the
     	spotify  API](https://developer.spotify.com/documentation/web-api/reference/browse/get-categorys-playlists/)
*  Figuring out how to write the javascript file that opens/closes the Modal
box based on event handling methods 
	-	When the user clicks the button, the modal should open
	-	When the user clicks on the x on the top right corner, the modal
		should close
*	A neat implimentation that took me a while to figure out was allowing
	users to close the modal when they click anywhere outside the modal 
*	Not sure how to create a button inside a Modal and link the button to the 
	URL of the next play page
*	Learning how to use GitHub collaboratively with multiple branches.
-------------------------------------------------------------------------------

## Goals
-------------------------------------------------------------------------------
*   Implement local storage to keep track of username and highscore.
*   Design MongoDB strategy and determine which items should be tracked for 
	use in things such as statistics gathering
*	Set up database that stores user's history of play and allows the search 
	for user - connect the login window with the game page
*	Make the button trigger a validator function that checks for the
	correctness of the user's answer
	-	If it is correct, it will report "Correct!"
*	Implement a "continue" button for the pop up window that allows the user
	to move to the next song
*	Implement an "exit" button that allows the user to quit the game if they
	don't want to play the game anymore
*	Improve the styling and aesthetics of the pop up page
*	Use bootstrap to animate the images so that they glow or expand when mouse
	hovers over it
*	Play a short clip of stereotypical sounding music of that genre when mouse 
	hovers over it
-------------------------------------------------------------------------------


