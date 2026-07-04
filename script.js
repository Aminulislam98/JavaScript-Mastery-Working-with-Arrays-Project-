'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// In javaScript slice method get no arguments then it make shallow copy of the full array:

// Slice method
console.log('Shallow copy:', movements.slice());
console.log('Shallow copy:', [...movements]);

// splice method
// movements.splice(-1);
// console.log(movements);

// Reverse method

const arr = ['a', 'b', 'c', 'd', 'e'];
// Reverse method does mutate the original array:
const reverseArr = ['j', 'i', 'h', 'g', 'f'];
console.log(reverseArr.reverse());
console.log(reverseArr);

// Concat
// concat does not mutate the original array
const letters = arr.concat(reverseArr);
console.log(letters);
console.log([...arr, ...reverseArr]);

// Join method:
console.log(letters.join(' 👉 '));

// The new at method
const dummyArr = [12, 42, 23];
console.log(dummyArr[2]);
console.log(dummyArr.at(2));

// getting last array element
console.log(dummyArr.slice(dummyArr.length - 1)[0]);

// at method has good features like, to get last index of array , at(-1) gives last index of the array

// at method also works in string
console.log('Aminul'[-1]);
console.log('Aminul'.at(-1));

// if a bracket notation has given -1 argument then it will return undefined , on the other hand the at() method gives -1 mean the last index so

// Looping arrays : For each :
//  in foreach method gives 3 parameter to the callback function , first one is the single element , second is the element current index, then the  array
movements.forEach(function (movement, index, array) {
  console.log('current element:', movement);
  console.log('current index:', index);
  console.log('full array:', array);
  if (movement > 0) {
    console.log(`You deposit ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
});
