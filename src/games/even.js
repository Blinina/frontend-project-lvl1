import runGame from '../index.js';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const startGame = () => {
  const question = generateNumber(1, 100);
  const isEven = (number) => (number % 2 === 0);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(startGame, rules);
