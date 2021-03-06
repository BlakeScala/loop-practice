var factorialFunc = function(inputSentence) {
	for (var index = inputSentence - 1; index > 0; index--) {
		inputSentence *= index;
	}
	if (inputSentence === 0) {
		inputSentence = 1;
	}
	return inputSentence;
}
var palindromeChecker = function(inputSentence) {
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
	return isPalindrome;
}
var primesFinder = function(inputNumber) {
	var primes = [];
	var final = [];
	var indexDifference = 0;
	for (var count = 2; count < inputNumber; count++) {
		primes.push(count);
		final.push(count);
	}
	for (var divisor = 2; divisor < inputNumber/2; divisor++) {
		indexDifference = 0;
		primes.forEach(function(element, elementIndex) {
			if(element % divisor === 0 && element != divisor) {
				final.splice(elementIndex - indexDifference, 1);
				indexDifference++;
			}
		});
		primes = final.map(function(element) {
			return element;
		});
	}
	return primes
}

// Recursive factorial
$(document).ready(function(){
	$("form#factorial").submit(function(event){
		var inputSentence = parseInt($("#factorialInput").val());
		var factorialOutput = factorialFunc(inputSentence);
		$("#output").text(factorialOutput);
		event.preventDefault();
	});

//Palindrome checker
	$("form#palindrome").submit(function(event){
		var inputSentence = $("#palindromeInput").val();
		var palindromeFlag = palindromeChecker(inputSentence);
		if (palindromeFlag === false){
			$("#output2").text("Not a palindrome");;
		} else {
			$("#output2").text("Is a palindrome!");;
		}
		event.preventDefault();
	});

// Prime numbers
	$("form#prime").submit(function(event){
		$('#uloutput').empty();
		var inputNumber = parseInt($("#numberInput").val());
		var primes = primesFinder(inputNumber);
		primes.forEach(function(element){
			$("#uloutput").append("<li>" + element + "</li>");
		});
		event.preventDefault();
	});
});
