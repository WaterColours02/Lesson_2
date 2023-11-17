const readline = require('readline-sync');
const messages = require('./calculator_messages.json');

function prompt (message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

// prompt('Welcome to the Calculator!');
prompt(messages['welcome']);

// prompt('Would you lik to perform another calculation? (y/n)');
prompt(messages['calculation']);
let response = readline.question();

// Yes or No response validation
function invalidAnswer(response) {
    return String.trimStart === `` || !['y', 'n'].includes(response);
}

while (invalidAnswer(response)) {
    prompt(messages["invalidAnswer"]);
    response = readline.question();
  }

while (response === 'y') {

prompt(messages['firstNumber']);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(messages['invalidNumber']);
  number1 = readline.question();
}

prompt(messages['secondNumber']);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(messages['invalidNumber']);
  number2 = readline.question();
}

prompt(messages['operator']);
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

prompt(messages['anotherCalculation']);
response = readline.question();
}

