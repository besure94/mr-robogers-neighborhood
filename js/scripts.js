const userNumber = "5";

function getRangeOfNumbersFromUser(userNumber) {
  let arrayOfNumbers = [];
  for (let index = 0; index <= userNumber; index ++) {
    arrayOfNumbers.push(index);
  }
  return arrayOfNumbers;
}

console.log("Range of numbers: ", getRangeOfNumbersFromUser(userNumber));

function replaceNumWithStringInArray(replaceNumbersArray, valueToStringify) {
	for (let index = 0; index < replaceNumbersArray.length; index++) {
		if (replaceNumbersArray[index] === valueToStringify) {
			replaceNumbersArray[index] = "Beep!" + replaceNumbersArray[index];
		}
	}
}

console.log("Replace every 1 with 'beep!': ", replaceNumWithStringInArray(userNumber));

// var a = [1, 2, 3, 4, 5];
// var index = a.indexOf(3);

// console.log("Before: " + a);
// a[index] = "apple";
// console.log("After: " + a);