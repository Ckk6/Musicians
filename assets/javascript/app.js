$(document).ready(function() {

	//Create array to hold input box values
	//set initial array value to initial button

 	var  character = ['Prince'];
 	var charindex = 1;
 	var same = false
 	console.log(character);

 	function match(){
 		console.log('i am in match');
 		same = false;
 		for (charindex = 0; charindex < character.length; charindex++) {
 			 if ($("#new-music").val() == character[charindex]){
 			 	same = true;
 			 	$("#new-music").val("");

 			 }
 			 console.log(character[charindex]);
 			 console.log("same is " + same); 
 		}
 	}

	//create submit click event that will:
	$('#submit').on('click', function() {
		console.log('i am in the on click function');
		//capture userinput and push it to the array
		if ($("#new-music").val() != "") {
			console.log($("#new-music").val());

			match();
			console.log('i am back in click after match same is ' + same);

			if (same == false){

				var music = $("#new-music").val();
				console.log("music is " + music);
		
			
				character.push(music);

				$('#button-area').empty();
			

				//loop through character array to create buttons

	
				for(charindex = 0; charindex < character.length; charindex++) {

			  		mbutton = $('<button>').html(character[charindex]);
					mbutton.attr('class', 'button');
					mbutton.attr('type', 'button');
					mbutton.attr('class', 'btn btn-primary button');
					mbutton.attr('display', 'inline-block');
				
				
					$('#button-area').append(mbutton);
					$('#new-music').val("");
		
				}
			}	
		}	
	});
	
 				


 //create an on click event for button use this notation.

 // $('.button').on('click', function(){l, /`	.
  	 
       // var musician = $(this).data('musicican');
       // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
 // }
    




//create submit click event that:

	//build a url using api parameters
	//make ajax request
	//console.log json
	//move the images to the image area--prepend
	//create click events for the new images so that they stop and start

}); //end (document).ready 