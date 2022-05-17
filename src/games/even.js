import runGame from "../../src/index.js"

const generateNumber  = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    
 const rules = 'Answer "yes" if the number is even, otherwise answer "no".'; 
 const startGame = () => { 
          const question = generateNumber(1, 100);
          const isEven = (question) => question % 2 === 0 ? true : false;
          const correctAnswer = isEven(question) ? 'yes' : 'no';
          return [question, correctAnswer];

    }
    
    export default () => runGame(startGame, rules);
