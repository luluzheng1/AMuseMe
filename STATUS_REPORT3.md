# Semester Project : Status Report 3

## What's been implemented
-------------------------------------------------------------------------------
For the week of 11/26 - 11/31, there were several major additions to the
project.
*	Responsive Design for home page, login popup, and genre page.
*	Uploaded project to personal heroku app to test the responsive design on 
	different devices.
*	Implemented slides-like template in JS
	-	when player enters answer to a quiz question and clicks button to 
		continue, the page reloads with new content. 
	-	Right now it works with hardcoded multiple choice problems. 
	-	Later, each slide will use text input instead, and will integrate
		30 sec snippets from Spotify along with question
*	Modified homepage's html and js files to avoid modifying the url when 
	opening the modal box.
*	Replaced disney genre with classical genre due to limited music previews 
	available on spotify.
*	Basic Server Structure set up on our heroku app (amuse-me-trivia-game)
*	Performed testing to make sure mongodb connection was working for submit
	and retrieve operations.
*	Set up pug templates for dynamic generation of html pages
*	Learned how to serve complete static html pages from node.js server.

-------------------------------------------------------------------------------

## Challenges
-------------------------------------------------------------------------------
*  	Had trouble playing audio consistently using HTML5 audio tags when mouse 
	hovers over image on genre-page.
*	We wanted to have a background music that autoplays at the homepage, but
	the audio wasn't playing on certain browsers
	-	Specifically, Firefox on the Virtual Machine wasn't outputing any audio
*	Making sure the screen size auto-adjusts based on user's device
	-	Instead of using a front-end framework, we have implemeted responsive 
		design using responsive units for elements in css files. 
	-	Therefore, the full website will always be displayed when screen size 
		changes, which is ideal for a trivia game app.
* 	We experienced problems with login method and requiring premium spotify account.
    * 	This was a big topic of discussion at our weekly meeting but as
     	currently been solved to move forward with development though we are 
     	still investigating security issues for production release.
        * 	Note: more information about our thought process on this is 
        	available [here](https://github.com/tuftsdev/comp20-f2018-team15/blob/yidanx/YidanMeetingNotes.md)
* How to play a 30 second snippet of a song:
    *	A spotify track object contains a preview url with a 30 second preview 
    	of the song. We can use this to play the song in the user quiz.
        *	First proof of concept is at (<https://www.eecs.tufts.edu/~yxu11/test_audio.html>)
        *	A much-improved variant of this has now been implemented into a 
        	working version by [Byron.](<https://github.com/tuftsdev/comp20-f2018-team15/blob/byron/src/javascript/player.js>) 
-------------------------------------------------------------------------------

## Goals
-------------------------------------------------------------------------------
*	Integrate audio into javascript so that audio plays every time the slide
	reloads with new question, and get the audio on mouse hover working.
*	Implement responsive design for the trasition pages and game pages.
*	Integrate the client side functions, such as HTTP requests to Spotify and
	requests to the server, into current js files.
*	Security review of our current code and how to improve it.
*	Write a validate_answer function that validate the correctness of user 
	input.
*	Display score and info about all the songs.
* 	Record score and other statistics in database.
    * 	Current plan is to store username, score, genreSelected, timestamp
    and possibly a QuizObject that records the entire quiz with song level 
    information for user: for example: song, band, album, year_released, 
    correct_guess. This would allow a full review of history and tracking 
    things like best decade etc. 
    * 	**Cons:** More difficult implementation, more storage space, not a 
    	whole lot of value-added by tracking at this level at least currently.
-------------------------------------------------------------------------------


  

    

  

       

