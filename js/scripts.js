const userNumber = 5;

function getNumberFromUser(userNumber) {
	let numberArray = Array.from(userNumber);
	for (let index = 0; index <= userNumber; index ++) {
		numberArray.push(index);
	}
	return numberArray;
}

console.log("User number: ", getNumberFromUser(userNumber));