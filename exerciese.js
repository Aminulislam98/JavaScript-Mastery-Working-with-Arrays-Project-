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
