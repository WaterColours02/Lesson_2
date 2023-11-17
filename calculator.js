const readline = require('readline-sync');

function prompt (message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to the Calculator!');

prompt('Would you lik to perform another calculation? (y/n)');
let response = readline.question();

// Yes or No response validation
function invalidAnswer(response) {
    return String.trimStart === `` || !['y', 'n'].includes(response);
}

while (invalidAnswer(response)) {
    prompt('Hmm... that doesn\'t look like a valid answer');
    response = readline.question();
  }

while (response === 'y') {

prompt('What is the first number?');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt('Hmm... that doesn\'t look like a valid number');
  number1 = readline.question();
}

prompt('What is the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('Hmm... that doesn\'t look like a valid number');
  number2 = readline.question();
}

prompt("what operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide 5) exponentiate");
let operation = readline.question();

while (!['1', '2', '3', '4', '5'].includes(operation)) {
  prompt('Must choose 1, 2, 3, 4, or 5');
  operation = readline.question();
}


let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
  case '5':
    output = Number(number1) ** Number(number2);
    break;
}

prompt(`The result is: ${output}`);

prompt('Would you lik to perform another calculation? (y/n)');
response = readline.question();
}

