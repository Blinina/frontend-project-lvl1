import runGame from '../index.js';
import generateNumber from '../generateNumber.js';
const isEven = (number) => (number % 2 === 0);

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const startGame = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(startGame, rules);
