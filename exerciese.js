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

// Array grouping
console.log(movements);

const accountMoves = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 5) return 'active';
  if (movementCount >= 1) return 'moderate';
  else {
    return 'inactive';
  }
});
console.log(accountMoves);

const groupedAccount = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccount);

const x = new Array(8);

x.fill(2);
console.log(x);

const z = Array.from({ length: 7 }, () => 1);
console.log(z);
const y = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(y);

const randomDiceRoll = Array.from({ length: 10 }, (_, i) =>
  Math.round(Math.random() * i),
);
console.log(randomDiceRoll);

labelBalance.addEventListener('click', () => {
  const movementsUi = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')),
  );

  console.log(movementsUi);
});

// Solved Problem number 1
const bankDepositSum = accounts
  .flatMap(account => account.movements)
  .filter(movement => movement > 0)
  .reduce((acc, value) => acc + value, 0);
console.log(bankDepositSum);

// Solved Problem number 2
// const numDeposit1000 = accounts
//   .flatMap(account => account.movements)
//   .filter(movement => movement >= 1000);
// console.log(numDeposit1000);
const numDeposit1000 = accounts
  .flatMap(account => account.movements)
  // .reduce((acc, movement) => (movement >= 1000 && acc + 1), 0);
  .reduce((acc, movement) => (movement >= 1000 ? ++acc : acc), 0);
console.log(numDeposit1000);

// Solved Problem number 3
const { deposit, withdrawals } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (acc, move) => {
      // move > 0 ? (acc.deposit += move) : (acc.withdrawals += move);
      acc[move > 0 ? 'deposit' : 'withdrawals'] += move;
      return acc;
    },
    { deposit: 0, withdrawals: 0 },
  );

console.log(deposit, withdrawals);

const convertTitleCase = title => {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const capitalized = str => str[0].toUpperCase() + str.slice(1);

  return title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalized(word)))
    .join(' ');
};

console.log(convertTitleCase('tHis iS a NiCe tiTle'));

console.log(breeds);

console.log(['b', 'd', 'c', 'a'].sort());

const arr = [1, 2, 3, 4, 5];

console.log(arr);

console.log(arr.findIndex(element => element > 4));

console.log('--------Exercise-------');
// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)


8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

// Exercise  1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).

dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs);

// Exercise 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

if (
  sarahDog.curFood > sarahDog.recFood * 0.9 &&
  sarahDog.curFood < sarahDog.recFood * 1.1
) {
  console.log('Eating is okay!');
} else if (sarahDog.curFood < sarahDog.recFood * 0.9) {
  console.log('Eating too little 🥺');
} else if (sarahDog.curFood > sarahDog.recFood * 1.1) {
  console.log('Eating too much 🥺');
}

// Exercise 3

// const ownersTooMuch = [].flat();
// const ownersTooLittle = [].flat();
// dogs.forEach(dog => {
//   if (dog.curFood < dog.recFood * 0.9) {
//     ownersTooLittle.push(...dog.owners);
//   } else if (dog.curFood > dog.recFood * 1.1) {
//     ownersTooMuch.push(...dog.owners);
//   }
// });
// console.log(ownersTooLittle);
// console.log(ownersTooMuch);

const ownersTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood * 0.9)
  .flatMap(dog => dog.owners);
const ownersTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood * 1.1)
  .flatMap(dog => dog.owners);
console.log(ownersTooLittle, ownersTooMuch);

// Exercise 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

const ownersTooMuchJoin = ownersTooMuch.join(' and ');
console.log(`${ownersTooMuchJoin}'s dogs eat too much!`);
const ownersTooLittleJoin = ownersTooLittle.join(' and ');
console.log(`${ownersTooLittleJoin}'s dogs eat too little!`);

// Exercise  5 Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)

const exactlyRecommended = dogs.some(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1,
);
console.log(exactlyRecommended);

// Exercise 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)

const allOkay = dogs.every(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1,
);
console.log(allOkay);

// Exercise 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

const allDogsOkay = dogs.filter(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1,
);
console.log(allDogsOkay);

// Exercise 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.

const dogsType = Object.groupBy(dogs, dog => {
  if (dog.curFood > dog.recFood) {
    return 'too-much';
  } else if (dog.curFood < dog.recFood) {
    return 'too-little';
  } else {
    return 'exact';
  }
});
console.log(dogsType);

// Exercise 9. Group the dogs by the number of owners they have
const numberOfOwner = Object.groupBy(
  dogs,
  dog =>
    `Total ${dog.owners.length} ${dog.owners.length > 1 ? 'owners' : 'owner'}`,
);
console.log(numberOfOwner);

// Exercise 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

console.log('Before:', dogs);
const sortedDogsArray = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log('After:', sortedDogsArray);
