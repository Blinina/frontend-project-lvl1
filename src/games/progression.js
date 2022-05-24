import runGame from '../index.js';
import generateNumber from '../generateNumber.js';

const rule = 'What number is missing in the progression?';

const startRound = () => {
  const num1 = generateNumber(0, 100);
  const step = generateNumber(2, 5);
  const strLength = 10;
  const miss = generateNumber(1, 10);
  const numbers = [];
  for (let i = num1; numbers.length <= strLength; i += step) {
    numbers.push(i);
  }
  const correctAnswer = String(numbers[miss]);
  numbers[miss] = '..';
  const question = numbers.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(startRound, rule);
