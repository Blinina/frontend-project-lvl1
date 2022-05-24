import _ from 'lodash';
import runGame from '../index.js';
import generateNumber from '../generateNumber.js';

const searchGcd = (number1, number2) => {
  const divisors1 = [];
  const divisors2 = [];
  for (let i = 1; i <= number1; i += 1) {
    if (number1 % i === 0) {
      divisors1.push(i);
    }
  }
  for (let j = 1; j <= number2; j += 1) {
    if (number2 % j === 0) {
      divisors2.push(j);
    }
  }

  const result = _.intersection(divisors1, divisors2);
  const generalGcd = result[result.length - 1];
  return generalGcd;
};

const rule = 'Find the greatest common divisor of given numbers.';

const startRound = () => {
  const num1 = generateNumber(1, 20);
  const num2 = generateNumber(1, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(searchGcd(num1, num2));
  return [question, correctAnswer];
};

export default () => runGame(startRound, rule);
