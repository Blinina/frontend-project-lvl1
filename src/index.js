import readlineSync from 'readline-sync';

const roundCount = 3;
const runGame = (startRound, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = startRound();
    console.log(`Question: ${question}`);
    const answeruser = readlineSync.question('Your answer: ');
    if (answeruser !== correctAnswer) {
      console.log(`'${answeruser}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
