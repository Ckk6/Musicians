$(document).ready(function() {

	//Create array to hold input box values
	//set initial array value to initial button

 	var  character = ['Madonna','Michael Jackson','Prince'];
 	var charindex = 1;
 	var same = false
 	console.log(character);
 	var result;
//================================================================================
$('.first-button').on('click', function() {
						var artist = $(this).data('person');
						console.log('artist is ' + artist);
						console.log('$(this).data() ' + $(this).data('person'));
						console.log(this);

						
						//create a query  public key "dc6zaTOxFJmzC”

							//build a url using api parameters
							var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + artist + "&api_key=dc6zaTOxFJmzC&limit=20";
							//q - search query term or phrase
							//limit - (optional) number of results to return, maximum 100. Default 25
							//rating - limit results to those rated (y,g, pg, pg-13 or r).
							//fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
						//do an ajax request
						//make ajax request
						$.ajax({
							url: queryURL, 
							method: 'GET'
						})
						.done(function(response)
							{
							//console.log json response	
							
							result = response.data;
							  
						
							console.log(result); 

						
							//present 10 images with g or pg rating(include that in query)
							for ( var imageIndex=0; imageIndex <10; imageIndex++) {
								console.log (result[imageIndex].rating);
								if (result[imageIndex].rating =="g" || result[imageIndex].rating =="pg") {
									musicalArtist=$('<div>');
									p = $('<p>');
									p.text(result[imageIndex].rating); 


									musicImage = $('<img>');
									musicImage.attr('src', result[imageIndex].images.fixed_height.url);
									musicImage.attr('class','o-image');
									musicalArtist.append(p);
                    				musicalArtist.append(musicImage);
                    				//$('#gifsAppearHere').prepend(gifDiv); 
                    				$('#image-area').prepend(musicImage);

								}// end if

							}//end for

						});//end of done

						//each image to have click event so they stop and start 
					});// end button click



//===============================================================================
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

			//ensure input is not already in the array
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
					mbutton.attr('data-person', character[charindex]);
				
					$('#button-area').append(mbutton);
					//empty input area
					$('#new-music').val("");
					//create click events for new buttons
					$('.button').on('click', function() {
						var artist = $(this).data('person');
						console.log('artist is ' + artist);
						console.log('$(this).data() ' + $(this).data('person'));
						console.log(this);

						
						//create a query  public key "dc6zaTOxFJmzC”

							//build a url using api parameters
							var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + artist + "&api_key=dc6zaTOxFJmzC&limit=20";
							
						//make ajax request
						$.ajax({
							url: queryURL, 
							method: 'GET'
						})
						.done(function(response)
							{
							//console.log json response	
							
							result = response.data;
							  
						
							console.log(result); 

						
							//present 10 images with g or pg rating(include that in query)
							for ( var imageIndex=0; imageIndex <10; imageIndex++) {
								console.log (result[imageIndex].rating);
								if (result[imageIndex].rating =="g" || result[imageIndex].rating =="pg") {
									musicalArtist=$('<div>');
									p = $('<p>');
									p.text(result[imageIndex].rating); 


									musicImage = $('<img>');
									musicImage.attr('src', result[imageIndex].images.fixed_height.url);
									musicImage.attr('class','o-image');

									musicalArtist.append(p);
                    				musicalArtist.append(musicImage);
                    				//$('#gifsAppearHere').prepend(gifDiv); 
                    				$('#image-area').prepend(musicImage);

								}// end if 


							}//end for

						});//end of done

						//each image to have click event so they stop and start 
					});// end button click

				}
			}//end if same	
		}//end empty input check	
	});//end submit onclick function
	
 				


 

 


//create submit click event that:

	
	

	
	//move the images to the image area--prepend
	//create click events for the new images so that they stop and start

}); //end (document).ready 