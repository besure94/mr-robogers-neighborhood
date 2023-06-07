const userNumber = 5;

function getNumberFromUser(userNumber) {
	let numberArray = Array.from(userNumber);
	for (let index = 0; index <= userNumber; index ++) {
		numberArray.push(index);
	}
	return numberArray;
}

console.log("User number: ", getNumberFromUser(userNumber));

function replaceNumWithStringInArray(numberArray, valueToStringify) {
	for (let index = 0; index < numberArray.length; index++) {
		if (numberArray[index] === valueToStringify) {
			numberArray[index] = '' + numberArray[index];
		}
	}
}

console.log("Replace every 1 with 'beep!': ", replaceNumWithStringInArray(userNumber));

// var a = [1, 2, 3, 4, 5];
// var index = a.indexOf(3);

// console.log("Before: " + a);
// a[index] = "apple";
// console.log("After: " + a);