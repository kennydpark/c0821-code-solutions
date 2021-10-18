const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((pV, cV) => pV + cV);
console.log('sum:', sum);

const product = numbers.reduce((pV, cV) => pV * cV);
console.log('product:', product);

const calc = (pV, cV) => {
  if (cV.type === 'deposit') {
    return pV + cV.amount;
  }
  return pV - cV.amount;
};

const balance = account.reduce(calc, 0);
console.log('balance:', balance);

const composite = traits.reduce((pV, cV) => {
  return Object.assign(pV, cV);
}, {});

console.log('composite:', composite);
