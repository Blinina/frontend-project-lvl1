import runGame from '../index.js';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomOperator = (arr) => arr[generateNumber(0, arr.length - 1)];
const opeRandom = ['+', '-', '*'];

const rules = 'What is the result of the expression?';

const startGame = () => {
  const num1 = generateNumber(1, 10);
  const num2 = generateNumber(1, 10);
  const operator = randomOperator(opeRandom);
  const question = `${num1} ${operator} ${num2}`;

  let correctAnswer = 0;

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

  return [question, correctAnswer];
};

export default () => runGame(startGame, rules);
