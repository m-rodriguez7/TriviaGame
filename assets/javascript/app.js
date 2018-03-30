$(".hidden").hide(); // this div is used as a hidden container on the page


// variables?
var time = 60;

var intervalId; // variable that will hold our interval ID when we execute
var correct=0
var incorrect=0
var total = 4;



function run() {
	// put the timer back in its place
	$(".returnTimer").append($("#timer"));
	clearInterval(intervalId);
	intervalId = setInterval(decrement, 1000); // change to 1000
}

//  The decrement function.
function decrement() {
	time--;

	//  Show the number in the #show-number tag.
	$("#timer").html("<h2>You have " + time + " seconds to answer these questions!</h2>");



if (time === 0) {

	stop();

	// .. run the results function (to show the results of the players questions/answers)

	//  Alert the user that time is up.
	alert("Time Up!");
	$(".hidden").append($(".questions"));
	$(".hidden").append($("#timer"));
	console.log("questions hidden");
	results(); // show the results of the game after stopping it, then after 10 seconds reset the game. 
}
}
function results() {
	// calculate which questions are correct, incorrect, set them to variables that can then be displayed afterward.
	if ($('input[name=question1]:checked').val() === 'answer') {
		correct++;
	} else {
		incorrect++;
	}
	if ($('input[name=question2]:checked').val() === 'answer') {
		correct++;
	} else {
		incorrect++;
	}
	if ($('input[name=question3]:checked').val() === 'answer') {
		correct++;
	} else {
		incorrect++;
	}
	if ($('input[name=question4]:checked').val() === 'answer') {
		correct++;
	} else {
		incorrect++
	}
		
	$("#results").html(
		"<p>Answer Correct: "+correct+"</p>"+
		"<p>Answers Incorrect: "+incorrect+"</p>"
	);
	$(".returnResults").append($("#results"));
	clearInterval(intervalId)
	intervalId = setTimeout(function(){
		alert("Try again!");
		// reset game to run again
		// hide everything
		$(".hidden").append($("#results"))
		// display the start button
		$("#start").append($(".start"));
		// reset the timer
		time = 60;
		correct=0;
		incorrect=0;
	}, 10000); // after 10 seconds, reset the game
}


//  The stop function
function stop() {
	//  Clears our intervalId  We just pass the name of the interval to the clearInterval function.
	clearInterval(intervalId);
}
$(".start").on("click", function(){
	run();
	console.log("movin on down...")
	$(".question").append($(".questions"));
	console.log("forms visible...")
	//event.preventDefault();
	//clockTicking = true;
	$(".hidden").append($(".start")); // move only the button, not the div after it is clicked, so you can't continuously click it. perhaps bring it back to start the game. 
	 
	// make sure .hidden is hidden in the css
	// make sure to first have all the questions and what not hidden, then show them after clicking this button.
});	


