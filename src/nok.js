import _ from 'lodash';

const nokfunction = (num1, num2) => {
  const divisors1 = [];
  const divisors2 = [];
  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0) {
      divisors1.push(i);
    }
  }
  for (let j = 1; j <= num2; j += 1) {
    if (num2 % j === 0) {
      divisors2.push(j);
    }
  }
  const result = _.intersection(divisors1, divisors2);
  return result[result.length - 1];
};
export default nokfunction;
