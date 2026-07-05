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
