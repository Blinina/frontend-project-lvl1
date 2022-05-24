import runGame from '../index.js';
import generateNumber from '../generateNumber.js';

const isEven = (number) => (number % 2 === 0);

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const startRound = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(startRound, rule);
