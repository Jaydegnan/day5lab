'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of a and b is addition."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/



// Write your code here
function sum(a,b){ //eslint-disable-line
  var addition = a + b;
  var finalArray = []; // once answer is achieved, this provides final output
  finalArray.push(addition);
  var sentence = []; // holds all the letters of the string inside
  var string = 'The sum of  and  is .';
  for(var i = 0; i< string.length; i++) {
    sentence.push(string[i]);
  }
  sentence.splice(11, 0, a);
  sentence.splice(17, 0, b);
  sentence.splice(22, 0, addition);
  var newSentence = '';
  for (i = 0; i<sentence.length; i++) {
    newSentence = newSentence + sentence[i];
  }
  finalArray.push(newSentence);
  return(finalArray);
}
testSum(4, 7);




// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/






// Write your code here
function multiply(a,b){  //eslint-disable-line
  var multi = a * b; // gets us our first answer, then put in array below
  var finalArray = []; // what we will use once we find the answers
  var sentence = []; // holds all the letters inside
  var string = 'The product of  and  is .';
  for(var i = 0; i<string.length; i++) { // first for loop puts info in an array
    sentence.push(string[i]); //
  }
  sentence.splice(15, 0, a);
  sentence.splice(21, 0, b);
  sentence.splice(26, 0, multi);
  var newSentence = '';
  for (i = 0; i<sentence.length; i++) { // second for loop puts info in a string
    newSentence += sentence[i];
  }
  finalArray.push(multi);
  finalArray.push(newSentence);
  console.log(newSentence);
  return(finalArray);
}
testMultiply(5, 9);
   //eslint-disable-line



// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here




function sumAndMultiply(a,b,c){ //eslint-disable-lin  //eslint-disable-line
  var sumAB = sum(a,b);
  var sumABnumber = sumAB[0];
  var sumABCarray = sum(sumABnumber, c);
  var noArray = sumABCarray[0];

  var multiplyAB = multiply(a,b);
  var multiplyABnumber = multiplyAB[0];
  var multiplyABCarray = multiply(multiplyABnumber, c);
  var noArrayTwo = multiplyABCarray[0];
  var displayArray = [];
  displayArray.push(noArray);
  displayArray.push(noArrayTwo);
  // var sumABC = sum(sumAB, c); this is wrong

  var sumSentence = [];
  var sumString = ' and  and  sum to .';
  for(var i = 0; i < sumString.length; i++) {
    sumSentence.push(sumString[i]);
  }
  sumSentence.splice(18, 0, noArray);
  sumSentence.splice(10, 0, c);
  sumSentence.splice(5, 0, b);
  sumSentence.splice(0, 0, a);
  console.log(sumSentence);
  var newSumString = '';
  for(var j = 0; j < sumSentence.length; j++) {
    newSumString += sumSentence[j];
  }
  displayArray.push(newSumString);

  var multiplySentence = [];
  var multiplyString = 'The product of  and  and  is .';
  for(var k = 0; k < multiplyString.length; k++) {
    multiplySentence.push(multiplyString[k]);

  }
  multiplySentence.splice(29, 0, noArrayTwo);
  multiplySentence.splice(25, 0, c);
  multiplySentence.splice(20, 0, b);
  multiplySentence.splice(15, 0, a);
  var newMultiplyString = '';
  for(var l = 0; l < multiplySentence.length; l++) {
    newMultiplyString += multiplySentence[l];
  }
  displayArray.push(newMultiplyString);
  return displayArray;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line
  var num = sum(testArray[0], testArray[1])[0];
  for(var i = 2; i < testArray.length; i++) {
    num = (sum(num, testArray[i]))[0];
  }
  console.log(num);

  var sentenceString = ' was passed in as an array of numbers, and  is their sum.';
  var sentenceArray = [];
  for (var a = 0; a < sentenceString.length; a++) {
    sentenceArray.push(sentenceString[a]);
  }
  sentenceArray.splice(sentenceArray.length - 14, 0, num);

  var newArray = [];
  newArray.push(testArray[0]);
  for (var b = 1; b < testArray.length; b++) {
    newArray.push(',');
    newArray.push(testArray[b]);
  }

  for (var c = 0; c < sentenceArray.length; c++) {
    newArray.push(sentenceArray[c]);
  }

  console.log(newArray);
  var finalSentence = '';
  for (var d = 0; d < newArray.length; d++) {
    finalSentence += newArray[d];
  }

  var finalAnswer = [];
  finalAnswer.push(num);
  finalAnswer.push(finalSentence);
  return finalAnswer;
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line
  var num = multiply(testArray[0], testArray[1])[0];
  for(var i = 2; i < testArray.length; i++) {
    num = (multiply(num, testArray[i]))[0];
  }
  console.log(num);

  var sentenceString = 'The numbers  have a product of .';
  var sentenceArray = [];
  for (var a = 0; a < sentenceString.length; a++) {
    sentenceArray.push(sentenceString[a]);
  }
  sentenceArray.splice(sentenceArray.length - 1, 0, num);

  var newArray = [];
  newArray.push(testArray[0]);
  for (var b = 1; b < testArray.length; b++) {
    newArray.push(',');
    newArray.push(testArray[b]);
  }

  for (var c = 0; c < newArray.length; c++) {
    sentenceArray.splice(12+c, 0, newArray[c]);
  }

  console.log(sentenceArray);
  var finalSentence = '';
  for (var d = 0; d < sentenceArray.length; d++) {
    finalSentence += sentenceArray[d];
  }
  console.log(finalSentence);

  var finalAnswer = [];
  finalAnswer.push(num);
  finalAnswer.push(finalSentence);
  return finalAnswer;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
