import nokfunction from "../../src/nok.js"
import runGame from "../index.js";
const generateNumber  = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rules = 'Find the greatest common divisor of given numbers.';

const startGame = () => {

    const num1 = generateNumber(1, 20);
    const num2 = generateNumber(1, 20);
    const question = `${num1} ${num2}`;
   
   const correctAnswer = nokfunction(num1, num2);
   return [question, correctAnswer];
}
    
  export default () => runGame(startGame, rules);