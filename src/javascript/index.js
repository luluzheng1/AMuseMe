

$(document).ready(function() {
		
        $('a.popup').click(function() {
            $('.login-popup').fadeIn(300);
 
    	//Set the center alignment padding + border see css style
    	var popMargTop = ($('.login-popup').height() + 24) / 2; 
    	var popMargLeft = ($('.login-popup').width() + 24) / 2; 
    
    	$('.login-popup').css({ 
        'margin-top' : -popMargTop,
        'margin-left' : -popMargLeft
    	});
    
    	// Add the mask to body
    	$('body').append('<div id="mask"></div>');
    	$('#mask').fadeIn(300);

    	$('.blinking-cursor').fadeIn(300);
        
    	return false;
	});


	// When clicking on the button close, close the popup window
	$('a.close, #mask').live('click', function() { 
  		$('#mask , .login-popup').fadeOut(300 , function() {
    		$('#mask').remove();  
		}); 
		return false;
	});

	$('fieldset.textbox').click(function(){
		$('.blinking-cursor').fadeOut(300);
	});



    //if user entered a username, inherit the username to the following pages
    document.getElementsByTagName("button")[0].onclick = function(){
        name = document.getElementById("username").value;
        name = name.replace(/[^\w\s]/gi, ''); 
        alert(name);
        window.location.assign("genre.html");
    };

    //if user decides to play anonymously 
    document.getElementsByTagName("button")[1].onclick = function(){
        window.location.assign("genre.html");
    };


});

