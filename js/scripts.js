let userNumber = "5";

function mrRobogersNeighborhood(userNumber) {
	let userOutputArray = [];
  for (let index = 0; index <= userNumber; index ++) {
    userOutputArray.push(index);
  }
  return userOutputArray;
}

console.log("Range of numbers: ", mrRobogersNeighborhood(userNumber));
