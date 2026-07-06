'use strict';
// Coding challenge #1
const julia = [3, 5, 3, 7, 6];
const kate = [1, 6, 2, 4, 2];
// find out the adult dog and puppy , if the age is less then 3: puppy, other wise it is adult

const copyJulia = [...julia].slice(1, -2);
const juliaKate = [...copyJulia, ...kate];
console.log(juliaKate);

const checkDogs = function (allDogs) {
  allDogs.forEach(function (value, index) {
    value > 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and ${value} year old`,
        )
      : console.log(
          `Dog number ${index + 1} is still a puppy 🐶, and ${value} year old`,
        );
  });
};

checkDogs(juliaKate);

const eurToUsd = 1.1;
// One thing to keep in mind that map method return new array containing of result of applied condition on each element
const movementsToUSD = movements.map(movement => movement * eurToUsd);
console.log(movementsToUSD);

const movementsDescriptions = movements.map((movement, index) => {
  return `Movement ${index + 1}: You ${movement > 0 ? 'deposit' : 'withdrew'} ${movement}`;
});
console.log(movementsDescriptions);

const deposit = movements.filter(movement => movement > 0);
const withdrawal = movements.filter(movement => movement < 0);

// Reduce method ;
// Accumulator -> means a bank where we put money together
const balance = movements.reduce((acc, value) => acc + value, 0);

// Reduce method
const max = movements.reduce((acc, value) => {
  return acc > value ? acc : value;
}, movements[0]);

console.log(max);

// challenge
calcDisplayBalance(account1.movements);

const calcAverageHumanAge = allDogs => {
  // Converting into them human age
  let humanAges = allDogs
    .map(value => (value <= 2 ? 2 * value : 16 + value * 4))
    .filter(age => age >= 18)
    .reduce((acc, value, i, arr) => acc + value / arr.length, 0);

  return humanAges;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

console.log('-------Hi------');
console.log(accounts);
const account = accounts.find(
  account => account.owner === 'Steven Thomas Williams',
);
console.log(account);

const lastWithdrawal = movements.findLast(movement => movement < 0);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const latestLargeMovementIndex = movements.findLastIndex(
  movement => Math.abs(movement) > 2000,
);
console.log(latestLargeMovementIndex);

console.log(
  `Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`,
);

// Some and every
// every method always check all the condition if it is true then true other wise false
console.log(movements.every(movement => movement > 0));
console.log(account4.movements.every(movement => movement > 0));
