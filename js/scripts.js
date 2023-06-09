let userNumber = "5";

function mrRobogersNeighborhood(userNumber) {
	let userOutputArray = [];
  for (let index = 0; index <= userNumber; index ++) {
		if (index === 3) {
			userOutputArray.push("Won't you be my neighbor?");
		} else if (index === 2) {
			userOutputArray.push("Boop!");
		} else if (index === 1) {
			userOutputArray.push("Beep!");
		} else {
			userOutputArray.push(index);
		}
  }
  return userOutputArray;
}

console.log("Range of numbers: ", mrRobogersNeighborhood(userNumber));
