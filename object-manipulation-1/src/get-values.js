/* exported getValues */
function getValues(object) {
  var output = [];
  for (var key in object) {
    output.push(object[key]);
  }
  return output;
}

// input: object
// output: array of the object's property values
// create storage for output, which is an empty array
// for each key in the object,
// add the value of the object at key property to the output
// return the output
