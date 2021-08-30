/* exported getKeys */
function getKeys(object) {
  var output = [];
  for (var key in object) {
    output.push(key);
  }
  return output;
}

// input: object
// output: array of the object's property keys
// create storage for output, which is an empty array
// for each key property in the object,
//      add the key to the output array
// return the output
