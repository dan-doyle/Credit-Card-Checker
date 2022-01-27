/* Import validateCred function, which receives an array of credit card
 numbers via NodeJS console and returns true / false depending on validity */
const libName = require('./main.js');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// Function receiving card number string and returning validity
const inputCard = (numString) => {
    let cardArray = [];
    for (let i = 0; i<numString.length; i++) {
        // Stop process if non-number is entered
        if (Object.is(parseInt(numString[i]), NaN)) {
            console.log('Please enter numbers only');
            return
        }
        cardArray.push(parseInt(numString[i]));
    }

    let validCard = libName.validateCred(cardArray);
    if (validCard) {
        console.log(`${numString} is a valid Credit Card number`);
    } else {
        console.log(`${numString} is NOT a valid Credit Card number`);
    }
}

// Call inputCard function with user input from NodeJS console
rl.question('Please enter a card number: ', input => {
    inputCard(input);
    rl.close();
});

// Example of a valid credit card number: 4539677908016808