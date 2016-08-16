// Recursive factorial
$(document).ready(function(){
	$("form#factorial").submit(function(event){
		var inputSentence = parseInt($("#factorialInput").val());
		for (var index = inputSentence - 1; index > 0; index--) {
			inputSentence *= index;
		}
		if (inputSentence === 0) {
			inputSentence = 1;
		}
		$("#output").text(inputSentence);
		event.preventDefault();
	});

//Palindrome checker
	$("form#palindrome").submit(function(event){
		var inputSentence = $("#palindromeInput").val();
		var sentenceArray = inputSentence.split("");
		var reverseSentence = sentenceArray.map(function(letter) {
			return letter;
		});
		reverseSentence.reverse();
		var isPalindrome = true;

		for (var count = 0; count < sentenceArray.length; count++) {
			if (sentenceArray[count] != reverseSentence[count]) {
		  	isPalindrome = false;
		  }
		}
		if (isPalindrome === false){
			$("#output2").text("Not a palindrome");;
		} else {
			$("#output2").text("Is a palindrome!");;
		}
		event.preventDefault();
	});

// Prime numbers
	$("form#prime").submit(function(event){
		var inputNumber = parseInt($("#numberInput").val());
		var primes = [];
		for (var count = 2; count < inputNumber; count++) {
			primes.push(count);
		}

		for (var index = 2; index < inputNumber/2; index++) {
			primes.forEach(function(element, elementIndex) {
		  	if(element % index === 0 && element != index) {
		    	primes.splice(elementIndex, 1);
		    }
		  });
		}
		$("#output3").text(primes);
		event.preventDefault();
	});
});
