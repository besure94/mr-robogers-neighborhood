const userNumber = 0;

function getNumberFromUser(userNumber) {
	let numberArray = Array.from(userNumber.toString());
	return parseInt(numberArray);
}

console.log("User number: ", getNumberFromUser(userNumber));