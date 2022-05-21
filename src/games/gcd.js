import _ from 'lodash';
import runGame from '../index.js';
import generateNumber from '../generateNumber.js';


const rules = 'Find the greatest common divisor of given numbers.';

const startGame = () => {
  const num1 = generateNumber(1, 20);
  const num2 = generateNumber(1, 20);
  const question = `${num1} ${num2}`;
  const divisors1 = [];
  const divisors2 = [];
  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0) {
      divisors1.push(i);
    }
  }
  for (let j = 1; j <= num2; j += 1) {
    if (num2 % j === 0) {
      divisors2.push(j);
    }
  }
  const result = _.intersection(divisors1, divisors2);
  const correctAnswer = result[result.length - 1];
  return [question, correctAnswer];
};

export default () => runGame(startGame, rules);
