var student = {
  firstName: 'Kenny',
  lastName: 'Park',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'ESL teacher';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2019
};

vehicle.color = 'black';
vehicle.isConvertible = false;

console.log('value of vehicle.color:', vehicle.color);
console.log('value of vehicle.isConvertible:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Spock',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
