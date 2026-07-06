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
