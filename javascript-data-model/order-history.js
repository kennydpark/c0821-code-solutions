var orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    orderDate: 'August 4, 2020',
    totalCost: '$34.00',
    title: 'JavaScript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    itemCost: '$31.55',
    deliveredDate: 'August 8, 2020',
    returnWindowClosed: 'September 7, 2020'
  },
  {
    orderNumber: '113-9984268-1280257',
    orderDate: 'July 19, 2020',
    totalCost: '$44.53',
    title: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    itemCost: '$41.33',
    deliveredDate: 'July 20, 2020',
    returnWindowClosed: 'August 19, 2020'
  },
  {
    orderNumber: '114-2875557-9059409',
    orderDate: 'July 4, 2020',
    totalCost: '$17.22',
    title: 'Gamecube Controller Adapter',
    itemCost: '$15.98',
    deliveredDate: 'July 7, 2020',
    returnWindowClosed: 'August 5, 2020'
  },
  {
    orderNumber: '113-2883177-2648248',
    orderDate: 'July 3, 2020',
    totalCost: '$138.93',
    deliveredDate: 'July 5, 2020',
    items: [
      {
        title: 'GameCube Controller - Super Smash Bros. Edition',
        itemCost: '$94.95',
        returnWindowClosed: 'August 4, 2020'
      },
      {
        title: 'The Art of Sql',
        author: 'Faroult, Stephane',
        itemCost: '$33.99',
        returnWindowClosed: 'August 4, 2020'
      }
    ]
  }
];

console.log('value of orderHistory:', orderHistory);
console.log('value of fourth order\'s second item array:', orderHistory[3].items[1]);
console.log('value of fourth order\'s second item\'s itemCost property:', orderHistory[3].items[1].itemCost);
console.log('value of fourth order\'s first item\'s returnWindowClosed property:', orderHistory[3].items[0].returnWindowClosed);
