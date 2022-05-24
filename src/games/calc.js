import runGame from '../index.js';
import generateNumber from '../generateNumber.js';

const randomOperator = (arr) => arr[generateNumber(0, arr.length - 1)];
const operators = ['+', '-', '*'];

const rule = 'What is the result of the expression?';

const startRound = () => {
  const num1 = generateNumber(1, 10);
  const num2 = generateNumber(1, 10);
  const operator = randomOperator(operators);
  const question = `${num1} ${operator} ${num2}`;

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default: return null;
  }

  return [question, String(correctAnswer)];
};

export default () => runGame(startRound, rule);
