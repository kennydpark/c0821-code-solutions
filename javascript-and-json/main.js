var arrayOfBooks = [
  {
    isbn: '0-7475-3269-9',
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J. K. Rowling'
  },
  {
    isbn: '978-0-8041-3902-1',
    title: 'The Martian',
    author: 'Andy Weir'
  },
  {
    isbn: '0-394-58816-9',
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];

console.log('arrayOfBooks:', arrayOfBooks, 'type:', typeof arrayOfBooks);
console.log('JSON.stringify(arrayOfBooks):', JSON.stringify(arrayOfBooks), 'type:', typeof JSON.stringify(arrayOfBooks));

var stringOfStudent = '{"id":"92833","name":"Bob"}';
console.log('stringOfStudent in JSON format:', stringOfStudent, 'type:', typeof stringOfStudent);

var jsonParseStudent = JSON.parse(stringOfStudent);
console.log('JSON.parse(stringOfStudent):', jsonParseStudent, 'type:', typeof jsonParseStudent);
