import runGame from '../index.js';
import generateNumber from '../generateNumber.js';

const rule = 'What number is missing in the progression?';

const startRound = () => {
  const num1 = generateNumber(0, 100);
  const step = generateNumber(2, 5);
  const strLength = 10;
  const miss = generateNumber(1, 10);
  const aNum = [];
  for (let i = num1; aNum.length <= strLength; i += step) {
    aNum.push(i);
  }
  const correctAnswer = String(aNum[miss]);
  aNum[miss] = '..';
  const question = aNum.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(startRound, rule);
