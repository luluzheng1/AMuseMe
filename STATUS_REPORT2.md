# Semester Project : Status Report 2

## What's been implemented
-------------------------------------------------------------------------------
For the week of 11/12 - 11/16, there were several major additions to the
project.
*	Linked the homepage to the genre page
*	Linked the genre page to the play page
*	Adding styling to homepage, genre page, and transition page
*	Added "Click Here to Begin" button that creates a pop up window
	-	Asks for user's name
	-	Stores user's input in local storage
	-	Allows user to play anonymous if they wish not to share their name
*	Added special blinking effects to "Click Here to Bein" button
*	Added Fade-In/Fade-Out effects to nickname pop-up window using JQuery 
*	Added background music to home page
*	Implemented hovering effect when cursor moves to a genre display
	-	Clicking on any of the genre images would redirect the page to the 
		play page
*	Furnished the play page "Enter" button
	-	Added styling to the pop window after clicking the button
	-	Created a close and continue button in the window
		+	User may click on "Quit Game" when they want to end a round
		+	User clicks on "Continue" to continue playing the round
*	Set up server environment on Heroku

-------------------------------------------------------------------------------

## Challenges
-------------------------------------------------------------------------------
*  	Figuring out how to access user information from other javascript files
*	Learning how to interact with Heroku and Mongodb
*	Writing wrapper functions for the Spotify API
	-	We recognized a potential obstacle that might hinder our progress.
	-	The Spotify API is not as intuitive to use as we hope it to be. 
	-	We are considering writing wrapper functions that will use certain
		features offered by Spotify.
*	Figuring out how to embed audio content on webpage
*   	Researching about copyrights and how royalty-free music/ music in the
	Cretive Domain works
*	Everything on the server-side
*	Relearning CSS's cascading property
*	Learning how to use GitHub collaboratively with multiple branches.
-------------------------------------------------------------------------------

## Goals
-------------------------------------------------------------------------------
*	Write js code to interact with our db on Heroku to track statistics and 
	player information
*   	Design MongoDB strategy and determine which items should be tracked for 
	use in things such as statistics gathering
*	Set up database that stores user's history of play and allows the search 
	for user - connect the login window with the game page
*	Write a validate function that checks correctness of the user's input 
*	Use bootstrap to animate the images so that they glow or expand when mouse
	hovers over it
*	Play a short clip of stereotypical sounding music of that genre when mouse 
	hovers over it
*	Implement a history of play page that displays statistical analysis
	of user's plays
*	Implement a high scores page that display the top 10 high scorers
*	Accomodate for different screen dimensions
*	Create a collection of songs for each genre
	- We might use existing playlists on Spotify
-------------------------------------------------------------------------------
