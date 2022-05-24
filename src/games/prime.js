import runGame from '../index.js';
import generateNumber from '../generateNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const startRound = () => {
  const question = generateNumber(1, 100);
  const result = [];
  const isPrime = (number) => {
    for (let i = 0; i <= number; i += 1) {
      if (number % i === 0) {
        result.push(i);
      }
    }
    const primeAnswer = (result.length === 2);
    return primeAnswer;
  };
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(startRound, rule);
