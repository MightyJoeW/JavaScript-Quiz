function submitAnswers() {
		var total = 5;
		var score = 0;

		//Get User Input
		var q1 = document.forms['quizForm']['q1'].value;
		var q2 = document.forms['quizForm']['q2'].value;
		var q3 = document.forms['quizForm']['q3'].value;
		var q4 = document.forms['quizForm']['q4'].value;
		var q5 = document.forms['quizForm']['q4'].value;

		//Validation
			//Looping through the question
		for (var i = 1; i <= total; i++) {

			//If we miss one, we output an alert box
			if(eval('q' + i) == null || eval('q' + i) == ''{
				alert('You missed question ' + i);
				return false;
			}
		}

		//Set Correct Answers
		var answers = ['b', 'a', 'd', 'a', 'c'];

		//Check Answers

		for (i = 1; i <= total; i++) {

				if(eval('q' + i) == answers[i - 1]) {
					score++;
				}

		}

		//Display Results
		var results = document.getElementById('results');

		results.innerHTML = '<h3> You scored <strong>' + score + '</strong> out of <strong>' + total + '</strong> </h3>';
		alert('You scored '  + score + 'out of ' + total);
		return false;
}