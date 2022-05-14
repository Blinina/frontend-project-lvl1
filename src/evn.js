import readlineSync from 'readline-sync';
#нужно импортировать username
const firstGame = () => {
 
const generateNumber  = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  
 const num = generateNumber(1, 100);
 console.log('Answer "yes" if the number is even, otherwise answer "no".'); 
console.log('Question: ${num}');

const chekNum = (num%2===0) ? 'yes': 'no';

const answermass = [];
    const answer = readlineSync.question('Your answer: ');
    let  raund =3;
    for (i=0; i<raund.length;i+=i) {
    if (chekNum===answer) {
        console.log('Correct!');
   
    } 
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${chekNum}'./n Let's try again, ${username}!`);
    }
    console.log(`Congratulations, ${username}!`)
}
}
