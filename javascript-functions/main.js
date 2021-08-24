function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('value of convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResult = greet('Kenny');
console.log('value of greetResult:', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(17, 42);
console.log('value of getAreaResult:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var fullName = {
  firstName: 'Kenny',
  lastName: 'Lamperouge'
};

var getFirstNameResult = getFirstName(fullName);
console.log('value of getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of getLastElementResult:', getLastElementResult);
