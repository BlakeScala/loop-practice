// Recursive factorial
var inputNumber = parseInt(prompt("Enter a number, dickhead"));

var recursiveFactorial = function(numberIn) {
	if(numberIn > 0) {
	  return numberIn * recursiveFactorial(numberIn - 1);
   } else {
  	return 1;
   }
}

alert(recursiveFactorial(inputNumber));

// for loop factorial

var inputSentence = parseInt(prompt("Enter a sentence, dickhead"));

for (var index = inputSentence - 1; index > 0; index--) {
	inputSentence *= index;
}
if (inputSentence === 0) {
	inputSentence = 1;
}
alert(inputSentence);

//palindrome checker

var inputSentence = prompt("Enter a sentence!");
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
	alert("Not a palindrome!");
} else {
	alert("Is a palindrome!");
}

// prime number checker
var inputNumber = parseInt(prompt("enter a number"));
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
alert(primes);
