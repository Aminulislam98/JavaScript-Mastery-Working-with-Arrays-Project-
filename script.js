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
  type: 'Premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'Standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'Premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'Basic',
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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Creating dom elements
function displayMovements(movements, sorted = false) {
  containerMovements.innerHTML = '';

  const movs = sorted ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__value">${movement}€</div>
    </div>
    `;
    // insertAdjacentElement method take to arguments , first is position second id the element
    // Practiced about insertAdjacentHTML
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements);

const calcDisplayInSummary = movements => {};
calcDisplayInSummary(account1.movements);

const calcDisplayOutSummary = movements => {};
calcDisplayOutSummary(account1.movements);

// Computing Username
const createUserName = accounts => {
  accounts.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);

// calculating the balance to display
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, value) => acc + value, 0);
  labelBalance.textContent = 'Loading...';
  labelBalance.textContent = `${acc.balance}€`;

  // Display out going balance
};

const calcDisplaySummary = account => {
  // Display in coming balance
  const incomes = account.movements
    .filter(movement => movement > 0)
    .reduce((acc, movement, i, arr) => acc + movement, 0);
  labelSumIn.textContent = `${incomes}€`;

  // display Interest
  const interest = account.movements
    .filter(movement => movement > 0)
    .map(movement => (account.interestRate / 100) * movement)
    .filter(movement => movement >= 1)
    .reduce((acc, movement, i, arr) => acc + movement, 0);

  labelSumInterest.textContent = `${interest}€`;

  // display out
  const out = account.movements
    .filter(movement => movement < 0)
    .reduce((acc, movement, i, arr) => acc + movement, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
};

// Update Ui
const updateUi = user => {
  // Display Movements
  displayMovements(user.movements);

  // display balance
  calcDisplayBalance(user);

  // display incomes
  calcDisplaySummary(user);
};

// Login
let user;
let currentBalance;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  user = accounts.find(
    account => account.userName === inputLoginUsername.value,
  );

  // check pin number
  if (user?.pin === Number(inputLoginPin.value)) containerApp.style.opacity = 1;

  // display welcome message
  labelWelcome.textContent = `Welcome ${user?.owner.split(' ')[0]}`;

  // Clear input value
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();

  // Update UI
  updateUi(user);
});

// Transfer money
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    account => account.userName === inputTransferTo.value,
  );

  // checking validation
  if (
    amount > 0 &&
    receiverAcc &&
    amount < user.balance &&
    receiverAcc?.userName !== user.userName
  ) {
    user.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUi(user);

    inputTransferTo.value = inputTransferAmount.value = '';
    console.log('transfer successful!');
  }
});

// applying for loan
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && user.movements.some(movement => movement >= amount * 0.1)) {
    // Add amount if passed
    user.movements.push(amount);

    // update ui after getting loan
    updateUi(user);

    //r removing the amount form input
    inputLoanAmount.value = '';
  }
});

// Closing Account
btnClose.addEventListener('click', e => {
  e.preventDefault();
  const currentUser = user.userName === inputCloseUsername.value;
  const userPin = user.pin === Number(inputClosePin.value);

  if (currentUser && userPin) {
    const index = accounts.findIndex(
      account => account.userName === currentUser,
    );

    // Hide ui
    containerApp.style.opacity = 0;

    // removed account
    accounts.splice(index, 1);

    // make empty the input value
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

// sorting
let shorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(user.movements, !shorted);
  shorted = !shorted;
});

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
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
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
