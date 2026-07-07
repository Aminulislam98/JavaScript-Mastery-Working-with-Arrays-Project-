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

// Flat and Flatmap
const arr = [[4, 5, 7, 2, 2], [4, 5, 2, 6], 32, 2, 1];
console.log(arr.flat());

// flatMap for only one level break but flat for unlimited

const overallBalance = accounts
  .map(account => account.movements)
  .flat()
  .reduce((acc, movement) => acc + movement, 0);
console.log(overallBalance);

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// Stored the average value of husky 1
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// found out the conditional object 2
const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('running') && breed.activities.includes('fetch'),
);
console.log(dogBothActivities);

// allActivities of all the dogs activities 3
const allActivities = breeds.map(breed => breed.activities).flat();
console.log(allActivities);

// Find all uniqueActivities 4
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// stored all other activities that likes swimming 5
const swimmingAdjacent = new Set(
  breeds
    .filter(breed => breed.activities.includes('swimming'))
    .flatMap(breed => breed.activities)
    .filter(breed => breed !== 'swimming'),
);
console.log('answer', swimmingAdjacent);

// average weight 10kg check
const averageWeight = breeds.every(breed => breed.averageWeight >= 10);
console.log(averageWeight);

// active or not active 6
const active = breeds.some(breed => breed.activities.length) >= 3;
console.log(active);

// Bonus exercise
const fetchWeight = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(breed => breed.averageWeight);
const heaviestFetchWeight = Math.max(...fetchWeight);

console.log(heaviestFetchWeight);

// Ascending
movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);

// Non destructive alternative: traversed . ToSorted . ToSpliced with

// reversing the array with slice and reverse , but it also reverse the original one ;
// console.log('Original', movements);
// const reversedMov = movements.slice().reverse();
// console.log('reversed', reversedMov);
// console.log('Original', movements);

// but there is another way to keep the original array untouched: toReversed() method
console.log('--------- toReversed() method -------');

console.log('Original', movements);
const reversedMov = movements.toReversed();
console.log('reversed', reversedMov);
console.log('Original', movements);

console.log('--------- With() Method -------------');
const newMovements = movements.with(1, 40);
console.log('New movements that is changed', newMovements);
console.log('Original movements', movements);
