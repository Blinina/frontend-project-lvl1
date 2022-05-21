import runGame from '../index.js';
import generateNumber from '../generateNumber.js';

const rules = 'What number is missing in the progression?';

const startGame = () => {
  const num1 = generateNumber(0, 100);
  const step = generateNumber(2, 5);
  const miss = generateNumber(1, 10);
  const arr = [];
  for (let i = num1; arr.length <= 10; i += step) {
    arr.push(i);
  }
  const correctAnswer = arr[miss];
  arr[miss] = '..';
  const question = arr.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(startGame, rules);
