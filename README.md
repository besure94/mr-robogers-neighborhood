## Mr Roboger's Neighborhood

#### By Brian Scherner

#### An application that replaces specific numbers with different strings.

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

This application allows users to input a number, which is then converted into an array of numbers ranging from 0 to the inputted number. Any numbers containing a 3 are replaced with "Won't you be my neighbor?", any numbers containing a 2 are replaced with "Boop!", and any numbers containing a 1 are replaced with "Beep!". These exceptions are applied in order of most important to least important. For example, if the user inputted a 15, the array would be "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!".

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the index.html file in the directory.
* Open index.html in your browser.

Known Bugs

Application is functioning correctly, however its design is not optimal. I would like to return to this project at a later date, and update its appearance.

## License

MIT

Copyright (c) 2023 Brian Scherner

### Tests:

What am I putting into the function?
What am I getting out of the function?
Why am I doing it?

1. Take in number from user as a string.
2. If the user inputs a 0, return 0.
3. It will return a range of numbers from 0 to the user inputted number.
4. It will return the following substitutions made within the returned range, from most important to least important:
5. If the user inputs a 3, replace number with "Won't you be my neighbor?".
6. If the user inputs a 2, replace number with "Boop!".
7. If the user inputs a 1, replace number with "Beep!".
8. If the user inputs a number containing a 3, replace all its digits with "Won't you be my neighbor?".
9. If the user inputs a number containing a 2, replace all its digits with "Boop!".
10. If the user inputs a number containing a 1, replace all its digits with "Beep!".

Describe: mrRobogersNeighborhood()

Test: "It should return an array with a 0 if the number 0 is inputted."
Code:
const userNumber = "0";
mrRobogersNeighborhood(userNumber);
Expected Output: [0];

Test: "It should return an array with a range of numbers from 0 to the inputted number."
Code:
const userNumber = "5";
mrRobogersNeighborhood(userNumber);
Expected Output: [0, 1, 2, 3, 4, 5];

Test: "It will replace the number 3 with 'Won't you be my neighbor?'."
Code:
const userNumber = "5";
mrRobogersNeighborhood(userNumber);
Expected Output: [0, 1, 2, 'Won't you be my neighbor?', 4, 5];

Test: "It will replace the number 2 with 'Boop!'."
const userNumber = "5";
mrRobogersNeighborhood(userNumber);
Expected Output: [0, 1, 'Boop!', 'Won't you be my neighbor?', 4, 5];

Test: "It will replace the number 1 with 'Beep!'."
const userNumber = "5";
mrRobogersNeighborhood(userNumber);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5];

Test: "It will replace all digits in a number containing a 3 with 'Won't you be my neighbor?'."
const userNumber = "13";
mrRobogersNeighborhood(userNumber);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Won't you be my neighbor?'];

Test: "It will replace all digits in a number containing a 2 with 'Boop!'."
const userNumber = "13";
mrRobogersNeighborhood(userNumber);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 10, 11, 'Boop!', 'Won't you be my neighbor?'];

Test: "It will replace all digits in a number containing a 1 with 'Beep!'."
const userNumber = "13";
mrRobogersNeighborhood(userNumber);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?']

