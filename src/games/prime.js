import runGame from '../index.js';
import generateNumber from '../generateNumber.js';


const rules = 'Find the greatest common divisor of given numbers.';

const startGame = () => {
  const question = generateNumber(1, 100);
  const result = [];
  for (let i = 0; i <= question; i += 1) {
    if (question % i === 0) {
      result.push(i);
    }
  }
  const correctAnswer = (result.length === 2) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => runGame(startGame, rules);
