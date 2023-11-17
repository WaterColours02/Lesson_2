const readline = require('readline-sync');
const messages = require('./calculator_messages.json');

function prompt (message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

// prompt('Welcome to the Calculator!');
prompt(messages['en']['welcome']);

// prompt('Would you lik to perform another calculation? (y/n)');
prompt(messages['en']['calculation']);
let response = readline.question();

// Yes or No response validation
function invalidAnswer(response) {
    return String.trimStart === `` || !['y', 'n'].includes(response);
}

while (invalidAnswer(response)) {
    prompt(messages['en']["invalidAnswer"]);
    response = readline.question();
  }

while (response === 'y') {

prompt(messages['en']['firstNumber']);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(messages['en']['invalidNumber']);
  number1 = readline.question();
}

prompt(messages['en']['secondNumber']);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(messages['en']['invalidNumber']);
  number2 = readline.question();
}

prompt(messages['en']['operator']);
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

prompt(messages['en']['result'] + `${output}`);

prompt(messages['en']['anotherCalculation']);
response = readline.question();
}

