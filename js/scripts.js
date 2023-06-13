function mrRobogersNeighborhood(userNumber) {
	let userOutputArray = [];
  for (let index = 0; index <= userNumber; index ++) {
		if (index.toString().includes('3')) {
			userOutputArray.push("Won't you be my neighbor?");
		} else if (index.toString().includes('2')) {
			userOutputArray.push("Boop!");
		} else if (index.toString().includes('1')) {
			userOutputArray.push("Beep!");
		} else {
			userOutputArray.push(index);
		}
  }
  return userOutputArray;
}

function addTextToDOM(userOutputArray) {
		const p = document.querySelector("p");
		p.append(userOutputArray);
}

function handleFormSubmission(event) {
	const resetBtn = document.getElementById("reset");
	const neighborhood = document.getElementById("neighborhood");
	const userInput = document.getElementById("userInput").value;
	console.log(userInput);
	const numbersAndStrings = mrRobogersNeighborhood(userInput);
	console.log(numbersAndStrings);
	addTextToDOM(numbersAndStrings);
	neighborhood.removeAttribute("class", "hidden");
	event.preventDefault();
}

window.addEventListener("load", function() {
	document.querySelector("form#form").addEventListener("submit", handleFormSubmission);
});