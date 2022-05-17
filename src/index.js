import readlineSync from 'readline-sync';

const raund = 3;
const runGame = (game, rules) => {
      console.log('Welcome to the Brain Games!');
      const userName = readlineSync.question('May I have your name? ');
      console.log(`Hello, ${userName}!`);
      console.log(rules);
    
      for (let i = 0; i < raund; i += 1) {
        const [question, correctAnswer] = game();
        console.log(`Question: ${question}`);
        const answeruser = readlineSync.question('Your answer: ');
        if (answeruser !== String(correctAnswer)) {
          console.log(`'${answeruser}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
          console.log(`Let's try again, ${userName}!`);
          return;
        }
        console.log('Correct!');
      }
      console.log(`Congratulations, ${userName}!`);
    };
    
    export default runGame;